import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Header.css";

export default function Header() {

    const [logo, setLogo] = useState("");
    const [file, setFile] = useState(null);

    const [home, setHome] = useState("");
    const [venue, setVenue] = useState("");
    const [services, setServices] = useState("");
    const [gallery, setGallery] = useState("");
    const [contact, setContact] = useState("");

    const [phone, setPhone] = useState("");
    const [buttonText, setButtonText] = useState("");

    const [saving, setSaving] = useState(false);
    const [contentSaving, setContentSaving] = useState(false);

    useEffect(() => {
        getHeader();
    }, []);

    const getHeader = async () => {

        try {

            const { data } = await api.get("/header");

            if (data.success) {

                setLogo(data.header.logo);

                setHome(data.header.home);
                setVenue(data.header.venue);
                setServices(data.header.services);
                setGallery(data.header.gallery);
                setContact(data.header.contact);

                setPhone(data.header.phone);
                setButtonText(data.header.buttonText);

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleLogo = (e) => {

        const selected = e.target.files[0];

        if (!selected) return;

        setFile(selected);

        setLogo(URL.createObjectURL(selected));

    };

    const saveLogo = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

            await api.put("/header/image", formData);

            await getHeader();

            alert("Header Logo Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Something Went Wrong");

        }

        finally {

            setSaving(false);

        }

    };

    const saveContent = async () => {

        try {

            setContentSaving(true);

            await api.put("/header/content", {

                home,
                venue,
                services,
                gallery,
                contact,
                phone,
                buttonText

            });

            await getHeader();

            alert("Header Updated Successfully");

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

            <div className="header-page">

                <h1>

                    Header CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Header Logo

                    </h2>

                    <div className="hero-grid">

                        <div className="hero-item">

                            <div className="hero-preview">

                                {

                                    logo ?

                                        <img
                                            src={logo}
                                            alt=""
                                        />

                                        :

                                        <div className="placeholder">

                                            No Logo

                                        </div>

                                }

                            </div>

                            <label>

                                Upload Logo

                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogo}
                            />

                        </div>

                    </div>

                    <button
                        className="save-btn"
                        onClick={saveLogo}
                    >

                        {

                            saving

                                ?

                                "Saving..."

                                :

                                "Save Logo"

                        }

                    </button>

                </div>

                <div className="cms-card">

                    <h2>

                        Header Content

                    </h2>

                    <label>

                        Home

                    </label>

                    <input
                        type="text"
                        value={home}
                        onChange={(e) => setHome(e.target.value)}
                    />

                    <label>

                        Venue

                    </label>

                    <input
                        type="text"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    />

                    <label>

                        Services

                    </label>

                    <input
                        type="text"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                    />

                    <label>

                        Gallery

                    </label>

                    <input
                        type="text"
                        value={gallery}
                        onChange={(e) => setGallery(e.target.value)}
                    />

                    <label>

                        Contact

                    </label>

                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <label>

                        Phone Number

                    </label>

                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <label>

                        Button Text

                    </label>

                    <input
                        type="text"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                    />

                    <button
                        className="save-btn"
                        onClick={saveContent}
                    >

                        {

                            contentSaving

                                ?

                                "Saving..."

                                :

                                "Save Header"

                        }

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}