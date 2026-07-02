import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Messages.css";

export default function Messages() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getMessages();

    }, []);

    const getMessages = async () => {

        try {

            const { data } = await api.get("/message");

            setMessages(data.messages || []);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    const deleteMessage = async (id) => {

        if (!window.confirm("Delete this message?")) return;

        try {

            await api.delete(`/message/${id}`);

            setMessages(prev =>
                prev.filter(item => item._id !== id)
            );

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <DashboardLayout>

            <div className="messages-page">

                <div className="messages-header">

                    <h1>

                        Customer Messages

                    </h1>

                    <p>

                        All inquiries submitted from the website.

                    </p>

                </div>

                {

                    loading ?

                        (

                            <div className="loading">

                                Loading...

                            </div>

                        )

                        :

                        (

                            <div className="table-wrapper">

                                <table className="messages-table">

                                    <thead>

                                        <tr>

                                            <th>Name</th>

                                            <th>Phone</th>

                                            <th>Email</th>

                                            <th>Event</th>

                                            <th>Date</th>

                                            <th>Message</th>

                                            <th>Action</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {

                                            messages.length ?

                                                messages.map(item => (

                                                    <tr key={item._id}>

                                                        <td data-label="Name">

                                                            {item.firstName} {item.lastName}

                                                        </td>

                                                        <td data-label="Phone">

                                                            {item.mobileNumber}

                                                        </td>

                                                        <td data-label="Email">

                                                            {item.emailAddress}

                                                        </td>

                                                        <td data-label="Event">

                                                            {item.eventType}

                                                        </td>

                                                        <td data-label="Date">

                                                            {item.eventDate}

                                                        </td>

                                                        <td data-label="Message">

                                                            {item.query}

                                                        </td>

                                                        <td data-label="Action">

                                                            <button

                                                                className="delete-btn"

                                                                onClick={() => deleteMessage(item._id)}

                                                            >

                                                                Delete

                                                            </button>

                                                        </td>

                                                    </tr>

                                                ))

                                                :

                                                (

                                                    <tr>

                                                        <td

                                                            colSpan="7"

                                                            style={{ textAlign: "center" }}

                                                        >

                                                            No Messages Found

                                                        </td>

                                                    </tr>

                                                )

                                        }

                                    </tbody>

                                </table>

                            </div>

                        )

                }

            </div>

        </DashboardLayout>

    );

}