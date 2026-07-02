import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Venue.css";

export default function Venue() {

    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        getVenue();

    }, []);

    const getVenue = async () => {

        try {

            const { data } = await api.get("/venue");

            if (data.venue) {

                setImage(data.venue.image);

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

    const saveVenue = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

            await api.put("/venue", formData);

            await getVenue();

            alert("Venue Landing Updated Successfully");

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

            <div className="venue-page">

                <h1>

                    Venue Landing CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Venue Landing Image

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
                        onClick={saveVenue}
                    >

                        {

                            saving

                                ?

                                "Saving..."

                                :

                                "Save Venue Landing"

                        }

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}