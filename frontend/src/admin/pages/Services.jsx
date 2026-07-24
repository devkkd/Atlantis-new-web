import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Services.css";

export default function Services() {

    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [saving, setSaving] = useState(false);
    const [title, setTitle] = useState("");

const [subtitle, setSubtitle] = useState("");

const [description, setDescription] = useState("");

const [contentSaving, setContentSaving] = useState(false);

    useEffect(() => {

        getService();

    }, []);

    const getService = async () => {

        try {

            const { data } = await api.get("/service");

            if (data.service) {

             setImage(data.service.serviceLanding.image);
setTitle(data.service.serviceLanding.title);
setSubtitle(data.service.serviceLanding.subtitle);
setDescription(data.service.serviceLanding.description);

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleImage = (e) => {

        const selected = e.target.files[0];

        if (!selected) return;

        setFile(selected);

        setImage(URL.createObjectURL(selected));

    };

const saveServiceImage = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

         await api.put("/service/image", formData);

            await getService();

            alert("Service Landing Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Something Went Wrong");

        }

        finally {

            setSaving(false);

        }

    };
    const saveServiceContent = async () => {

    try {

        setContentSaving(true);

        await api.put("/service/content", {

            title,

            subtitle,

            description

        });

        await getService();

        alert("Service Content Updated Successfully");

    }

    catch (err) {

        console.log(err);

        alert("Something Went Wrong");

    }

    finally {

        setContentSaving(false);

    }

};

    return (

        <DashboardLayout>

            <div className="service-page">

                <h1>

                    Service Landing CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Service Landing Image

                    </h2>

                    <div className="hero-grid">

                        <div className="hero-item">

                            <div className="hero-preview">

                                {

                                    image

                                        ?

                                        <img

                                            src={image}

                                            alt=""

                                        />

                                        :

                                        <div className="placeholder">

                                            No Image

                                        </div>

                                }

                            </div>

                            <label>

                                Upload Image

                            </label>

                            <input

                                type="file"

                                accept="image/*"

                                onChange={handleImage}

                            />

                        </div>

                    </div>

                    <button

                        className="save-btn"

                       onClick={saveServiceImage}

                    >

                        {

                            saving

                                ?

                                "Saving..."

                                :

                                "Save Service Landing"

                        }

                    </button>

                </div>
                <div className="cms-card">

    <h2>Service Landing Content</h2>

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
        rows={8}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />

    <button
        className="save-btn"
        onClick={saveServiceContent}
    >
        {
            contentSaving
                ? "Saving..."
                : "Save Content"
        }
    </button>

</div>

            </div>

        </DashboardLayout>

    );

}