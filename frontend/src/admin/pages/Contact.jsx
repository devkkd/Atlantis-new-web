import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Contact.css";

export default function Contact() {

    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [saving, setSaving] = useState(false);
    const [contentSaving, setContentSaving] = useState(false);

const [contactData, setContactData] = useState({
    title: "",
    subtitle: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    youtube: "",
    pinterest: ""
});

    useEffect(() => {

        getContact();

    }, []);

    const getContact = async () => {

        try {

            const { data } = await api.get("/contact");

            if (data.contact) {

                setImage(data.contact.image);
                setContactData({
    title: data.contact.title || "",
    subtitle: data.contact.subtitle || "",
    description: data.contact.description || "",
    address: data.contact.address || "",
    phone: data.contact.phone || "",
    email: data.contact.email || "",
    facebook: data.contact.facebook || "",
    instagram: data.contact.instagram || "",
    youtube: data.contact.youtube || "",
    pinterest: data.contact.pinterest || ""
});

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
    const saveContactContent = async () => {

    try {

        setContentSaving(true);

        await api.put("/contact/content", contactData);

        alert("Contact Content Updated Successfully");

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
                <div className="cms-card">

    <h2>Contact Content</h2>

    <label>Title</label>
    <input
        type="text"
        value={contactData.title}
        onChange={(e) =>
            setContactData({
                ...contactData,
                title: e.target.value
            })
        }
    />

    <label>Subtitle</label>
    <input
        type="text"
        value={contactData.subtitle}
        onChange={(e) =>
            setContactData({
                ...contactData,
                subtitle: e.target.value
            })
        }
    />

    <label>Description</label>
    <textarea
        rows="5"
        value={contactData.description}
        onChange={(e) =>
            setContactData({
                ...contactData,
                description: e.target.value
            })
        }
    />

    <label>Address</label>
    <textarea
        rows="4"
        value={contactData.address}
        onChange={(e) =>
            setContactData({
                ...contactData,
                address: e.target.value
            })
        }
    />

    <label>Phone</label>
    <input
        type="text"
        value={contactData.phone}
        onChange={(e) =>
            setContactData({
                ...contactData,
                phone: e.target.value
            })
        }
    />

    <label>Email</label>
    <input
        type="text"
        value={contactData.email}
        onChange={(e) =>
            setContactData({
                ...contactData,
                email: e.target.value
            })
        }
    />

    <label>Facebook</label>
    <input
        type="text"
        value={contactData.facebook}
        onChange={(e) =>
            setContactData({
                ...contactData,
                facebook: e.target.value
            })
        }
    />

    <label>Instagram</label>
    <input
        type="text"
        value={contactData.instagram}
        onChange={(e) =>
            setContactData({
                ...contactData,
                instagram: e.target.value
            })
        }
    />

    <label>Youtube</label>
    <input
        type="text"
        value={contactData.youtube}
        onChange={(e) =>
            setContactData({
                ...contactData,
                youtube: e.target.value
            })
        }
    />

    <label>Pinterest</label>
    <input
        type="text"
        value={contactData.pinterest}
        onChange={(e) =>
            setContactData({
                ...contactData,
                pinterest: e.target.value
            })
        }
    />

    <button
        className="save-btn"
        onClick={saveContactContent}
    >
        {contentSaving ? "Saving..." : "Save Contact Content"}
    </button>

</div>

            </div>

        </DashboardLayout>

    );

}