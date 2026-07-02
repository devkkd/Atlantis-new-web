import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Contact.css";

export default function Contact() {

    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        getContact();

    }, []);

    const getContact = async () => {

        try {

            const { data } = await api.get("/contact");

            if (data.contact) {

                setImage(data.contact.image);

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

    const saveContact = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

            await api.put("/contact", formData);

            await getContact();

            alert("Contact Landing Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Something Went Wrong");

        }

        finally {

            setSaving(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="contact-page">

                <h1>

                    Contact Landing CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Contact Landing Image

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

                        onClick={saveContact}

                    >

                        {

                            saving

                                ?

                                "Saving..."

                                :

                                "Save Contact Landing"

                        }

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}