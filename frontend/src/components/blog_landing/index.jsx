import React, { useEffect, useState } from "react";
import api from "../../admin/services/api";
import "./index.css";

const BlogLanding = () => {

    const [blogLanding, setBlogLanding] = useState({
        image: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getBlogLanding();

    }, []);

    const getBlogLanding = async () => {

        try {

            const { data } = await api.get("/blog-landing");

            if (data.success && data.blogLanding) {

                setBlogLanding({
                    image: data.blogLanding.image || ""
                });

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="blog-landing-container">

            {
                loading ? (

                    <>
                        <div className="blog-landing-skeleton desktop-img"></div>
                        <div className="blog-landing-skeleton mobile-img"></div>
                    </>

                ) : (

                    <>
                        <img
                            src={blogLanding.image || "/contact_landscape.jpeg"}
                            alt="Blog Banner"
                            className="blog-landing-img desktop-img"
                        />

                        <img
                            src={blogLanding.image || "/contact_landscape.jpeg"}
                            alt="Blog Banner"
                            className="blog-landing-img mobile-img"
                        />
                    </>

                )
            }

        </div>

    );

};

export default BlogLanding;