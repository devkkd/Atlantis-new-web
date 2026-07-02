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

const getGallery = async () => {

    try {

        const { data } = await api.get("/gallery");

        if (data.gallery) {

            setGallery(data.gallery);

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

   const renderContactLanding = () => (

    <div className="cms-card">

        <h2>

            CONTACT LANDING IMAGE

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