import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Services.css";

export default function Services() {

    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        getService();

    }, []);

    const getService = async () => {

        try {

            const { data } = await api.get("/service");

            if (data.service) {

                setImage(data.service.image);

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

    const saveService = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

            await api.put("/service", formData);

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

                        onClick={saveService}

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

            </div>

        </DashboardLayout>

    );

}