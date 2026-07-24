import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./ContactFormCMS.css";

export default function ContactFormCMS() {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        title: "",
        subtitle: "",
        description: "",

        firstNameLabel: "",
        firstNamePlaceholder: "",

        lastNameLabel: "",
        lastNamePlaceholder: "",

        mobileLabel: "",
        mobilePlaceholder: "",

        emailLabel: "",
        emailPlaceholder: "",

        eventDateLabel: "",
        eventDatePlaceholder: "",

        eventTypeLabel: "",

        queryLabel: "",
        queryPlaceholder: "",

        buttonText: "",

        eventTypes: []

    });

    useEffect(() => {

        fetchCMS();

    }, []);

    const fetchCMS = async () => {

        try {

            const { data } = await api.get("/contact-form");

            if (data.success) {

                setForm(data.contactForm);

            }

        } catch (err) {

            console.log(err);

        }

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({

            ...prev,

            [name]: value

        }));

    };

    const handleEventChange = (index, value) => {

        const arr = [...form.eventTypes];

        arr[index] = value;

        setForm(prev => ({

            ...prev,

            eventTypes: arr

        }));

    };

    const addEventType = () => {

        setForm(prev => ({

            ...prev,

            eventTypes: [...prev.eventTypes, ""]

        }));

    };

    const removeEventType = (index) => {

        setForm(prev => ({

            ...prev,

            eventTypes: prev.eventTypes.filter((_, i) => i !== index)

        }));

    };

    const saveCMS = async () => {

        try {

            setLoading(true);

            const { data } = await api.put("/contact-form", form);

            alert(data.message);

        } catch (err) {

            console.log(err);

            alert("Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="contact-cms">

                <h1>Contact Form CMS</h1>

                <div className="cms-card">

                    <input
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    <input
                        name="subtitle"
                        placeholder="Subtitle"
                        value={form.subtitle}
                        onChange={handleChange}
                    />

                    <textarea
                        rows="4"
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    />

                </div>

                <div className="cms-card">

                    <h2>Form Fields</h2>

                    <input name="firstNameLabel" placeholder="First Name Label" value={form.firstNameLabel} onChange={handleChange}/>
                    <input name="firstNamePlaceholder" placeholder="First Name Placeholder" value={form.firstNamePlaceholder} onChange={handleChange}/>

                    <input name="lastNameLabel" placeholder="Last Name Label" value={form.lastNameLabel} onChange={handleChange}/>
                    <input name="lastNamePlaceholder" placeholder="Last Name Placeholder" value={form.lastNamePlaceholder} onChange={handleChange}/>

                    <input name="mobileLabel" placeholder="Mobile Label" value={form.mobileLabel} onChange={handleChange}/>
                    <input name="mobilePlaceholder" placeholder="Mobile Placeholder" value={form.mobilePlaceholder} onChange={handleChange}/>

                    <input name="emailLabel" placeholder="Email Label" value={form.emailLabel} onChange={handleChange}/>
                    <input name="emailPlaceholder" placeholder="Email Placeholder" value={form.emailPlaceholder} onChange={handleChange}/>

                    <input name="eventDateLabel" placeholder="Date Label" value={form.eventDateLabel} onChange={handleChange}/>
                    <input name="eventDatePlaceholder" placeholder="Date Placeholder" value={form.eventDatePlaceholder} onChange={handleChange}/>

                    <input name="eventTypeLabel" placeholder="Event Type Label" value={form.eventTypeLabel} onChange={handleChange}/>

                    <input name="queryLabel" placeholder="Query Label" value={form.queryLabel} onChange={handleChange}/>
                    <input name="queryPlaceholder" placeholder="Query Placeholder" value={form.queryPlaceholder} onChange={handleChange}/>

                    <input name="buttonText" placeholder="Button Text" value={form.buttonText} onChange={handleChange}/>

                </div>

                <div className="cms-card">

                    <h2>Event Types</h2>

                    {

                        form.eventTypes.map((item,index)=>(

                            <div
                                key={index}
                                className="event-row"
                            >

                                <input

                                    value={item}

                                    onChange={(e)=>handleEventChange(index,e.target.value)}

                                />

                                <button
                                    type="button"
                                    onClick={()=>removeEventType(index)}
                                >

                                    Delete

                                </button>

                            </div>

                        ))

                    }

                    <button
                        type="button"
                        onClick={addEventType}
                    >

                        + Add Event Type

                    </button>

                </div>

                <button

                    className="save-btn"

                    onClick={saveCMS}

                    disabled={loading}

                >

                    {loading ? "Saving..." : "Save Changes"}

                </button>

            </div>

        </DashboardLayout>

    );

}