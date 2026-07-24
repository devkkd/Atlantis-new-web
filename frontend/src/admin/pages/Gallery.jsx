import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Gallery.css";

export default function Gallery() {

   const [gallery, setGallery] = useState({

    contactLanding: "",

    grandHall: Array(10).fill(""),

    preFunction: Array(10).fill(""),

    diningHall: Array(5).fill(""),

    dressingSuite: Array(10).fill(""),

    propertyInsights: Array(10).fill("")

});

   const [files, setFiles] = useState({

    contactLanding: null,

    grandHall: Array(10).fill(null),

    preFunction: Array(10).fill(null),

    diningHall: Array(5).fill(null),

    dressingSuite: Array(10).fill(null),

    propertyInsights: Array(10).fill(null)

});

    const [saving, setSaving] = useState("");

    useEffect(() => {

        getGallery();

    }, []);
    const [title, setTitle] = useState("");
const [subtitle, setSubtitle] = useState("");
const [description, setDescription] = useState("");
const [contentSaving, setContentSaving] = useState(false);
const [sectionsContent, setSectionsContent] = useState({
    grandHall: {
        heading: "",
        tagline: ""
    },
    preFunction: {
        heading: "",
        tagline: ""
    },
    diningHall: {
        heading: "",
        tagline: ""
    },
    dressingSuite: {
        heading: "",
        tagline: ""
    },
    propertyInsights: {
        heading: "",
        tagline: ""
    }
});

const [sectionContentSaving, setSectionContentSaving] = useState(false);

const getGallery = async () => {

    try {

        const { data } = await api.get("/gallery");

        if (data.gallery) {

            setGallery(data.gallery);
            setTitle(data.gallery.galleryLanding?.title || "");
setSubtitle(data.gallery.galleryLanding?.subtitle || "");
setDescription(data.gallery.galleryLanding?.description || "");
setSectionsContent(
    data.gallery.galleryContent || {
        grandHall: {
            heading: "",
            tagline: ""
        },
        preFunction: {
            heading: "",
            tagline: ""
        },
        diningHall: {
            heading: "",
            tagline: ""
        },
        dressingSuite: {
            heading: "",
            tagline: ""
        },
        propertyInsights: {
            heading: "",
            tagline: ""
        }
    }
);

        }

    }

    catch (err) {

        console.log(err);

    }

};

   const handleImage = (section, index, file) => {

    if (!file) return;

    if (section === "contactLanding") {

        setFiles(prev => ({

            ...prev,

            contactLanding: file

        }));

        setGallery(prev => ({

            ...prev,

            contactLanding: URL.createObjectURL(file)

        }));

        return;

    }

    const tempFiles = [...files[section]];

    tempFiles[index] = file;

    setFiles(prev => ({

        ...prev,

        [section]: tempFiles

    }));

    const preview = [...gallery[section]];

    preview[index] = URL.createObjectURL(file);

    setGallery(prev => ({

        ...prev,

        [section]: preview

    }));

};

   const saveSection = async (section) => {

    try {

        setSaving(section);

        const formData = new FormData();

        if (section === "contactLanding") {

            if (files.contactLanding) {

                formData.append(

                        "contactLanding",


                    files.contactLanding

                );

            }

            await api.put(

                    "/gallery/contactLanding",


                formData

            );

        }

        else {

            files[section].forEach((file, index) => {

                if (file) {

                    formData.append(

                        `${section}${index}`,

                        file

                    );

                }

            });

            await api.put(

                `/gallery/${section}`,

                formData

            );

        }

        await getGallery();

        alert("Updated Successfully");

    }

    catch (err) {

        console.log(err);

        alert("Something Went Wrong");

    }

    finally {

        setSaving("");

    }

};
const saveGalleryContent = async () => {

    try {

        setContentSaving(true);

        await api.put("/gallery/galleryLandingContent", {
            title,
            subtitle,
            description
        });

        await getGallery();

        alert("Gallery Content Updated Successfully");

    } catch (err) {

        console.log(err);
        alert("Something Went Wrong");

    } finally {

        setContentSaving(false);

    }

};
const saveGallerySectionsContent = async () => {

    try {

        setSectionContentSaving(true);

        await api.put(
            "/gallery/gallerySectionsContent",
            sectionsContent
        );

        await getGallery();

        alert("Gallery Sections Updated Successfully");

    } catch (err) {

        console.log(err);

        alert("Something Went Wrong");

    } finally {

        setSectionContentSaving(false);

    }

};

   const renderContactLanding = () => (

    <div className="cms-card">

        <h2>

            GALLERY LANDING IMAGE

        </h2>

        <div className="hero-grid">

            <div className="hero-item">

                <div className="hero-preview">

                    {

                        gallery.contactLanding

                        ?

                        <img

                            src={gallery.contactLanding}

                            alt=""

                        />

                        :

                        <div className="placeholder">

                            No Image

                        </div>

                    }

                </div>

                <label>

                    Contact Image

                </label>

                <input

                    type="file"

                    accept="image/*"

                    onChange={(e)=>

                        handleImage(

                            "contactLanding",

                            0,

                            e.target.files[0]

                        )

                    }

                />

            </div>

        </div>

        <button

            className="save-btn"

            onClick={()=>saveSection("contactLanding")}

        >

            {

                saving==="contactLanding"

                ?

                "Saving..."

                :

                "Save Contact Image"

            }

        </button>

    </div>

);
const renderGalleryContent = () => (

    <div className="cms-card">

        <h2>GALLERY CONTENT</h2>

        <label>Title</label>

        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <label>Subtitle</label>

        <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
        />

        <label>Description</label>

        <textarea
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />

        <button
            className="save-btn"
            onClick={saveGalleryContent}
        >
            {contentSaving ? "Saving..." : "Save Gallery Content"}
        </button>

    </div>

);
const renderGallerySectionsContent = () => {

    const sectionNames = {
        grandHall: "Grand Hall",
        preFunction: "Pre Function Hall",
        diningHall: "Dining Hall",
        dressingSuite: "Dressing Suite",
        propertyInsights: "Property Insights"
    };

    return (

        <div className="cms-card">

            <h2>GALLERY SECTIONS CONTENT</h2>

            {

                Object.keys(sectionsContent).map((key) => (

                    <div
                        key={key}
                        style={{
                            marginBottom: "35px",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "25px"
                        }}
                    >

                        <h3>{sectionNames[key]}</h3>

                        <label>{sectionNames[key]} Heading</label>

                        <input
                            type="text"
                            value={sectionsContent[key].heading}
                            onChange={(e) =>
                                setSectionsContent({
                                    ...sectionsContent,
                                    [key]: {
                                        ...sectionsContent[key],
                                        heading: e.target.value
                                    }
                                })
                            }
                        />

                        <label>{sectionNames[key]} Tagline</label>

                        <input
                            type="text"
                            value={sectionsContent[key].tagline}
                            onChange={(e) =>
                                setSectionsContent({
                                    ...sectionsContent,
                                    [key]: {
                                        ...sectionsContent[key],
                                        tagline: e.target.value
                                    }
                                })
                            }
                        />

                    </div>

                ))

            }

            <button
                className="save-btn"
                onClick={saveGallerySectionsContent}
            >
                {
                    sectionContentSaving
                        ? "Saving..."
                        : "Save Gallery Sections"
                }
            </button>

        </div>

    );

};
const renderSection = (title, key, total) => (

    <div className="cms-card">

        <h2>{title}</h2>

        <div className="hero-grid">

            {

                Array.from({ length: total }).map((_, index) => (

                    <div
                        className="hero-item"
                        key={index}
                    >

                        <div className="hero-preview">

                            {

                                gallery[key][index]

                                ?

                                <img
                                    src={gallery[key][index]}
                                    alt=""
                                />

                                :

                                <div className="placeholder">

                                    No Image

                                </div>

                            }

                        </div>

                        <label>

                            Image {index + 1}

                        </label>

                        <input

                            type="file"

                            accept="image/*"

                            onChange={(e)=>

                                handleImage(

                                    key,

                                    index,

                                    e.target.files[0]

                                )

                            }

                        />

                    </div>

                ))

            }

        </div>

        <button

            className="save-btn"

            onClick={()=>saveSection(key)}

        >

            {

                saving===key

                ?

                "Saving..."

                :

                `Save ${title}`

            }

        </button>

    </div>

);
    return (

        <DashboardLayout>

            <div className="home-page">

                <h1>

                    Gallery CMS

                </h1>
                
{renderContactLanding()}
{renderGalleryContent()}
{renderGallerySectionsContent()}
                {

                    renderSection(

                        "THE GRAND HALL",

                        "grandHall",

                        10

                    )

                }

                {

                    renderSection(

                        "THE PRE-FUNCTION HALL",

                        "preFunction",

                        10

                    )

                }

                {

                    renderSection(

                        "DINING HALL",

                        "diningHall",

                        5

                    )

                }

                {

                    renderSection(

                        "THE DRESSING SUITE",

                        "dressingSuite",

                        10

                    )

                }

                {

                    renderSection(

                        "PROPERTY INSIGHTS",

                        "propertyInsights",

                        10

                    )

                }

            </div>

        </DashboardLayout>

    );

}