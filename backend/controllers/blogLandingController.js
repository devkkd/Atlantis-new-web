import BlogLanding from "../models/BlogLanding.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET BLOG LANDING
=========================== */

export const getBlogLanding = async (req, res) => {

    try {

        let blogLanding = await BlogLanding.findOne();

        if (!blogLanding) {

            blogLanding = await BlogLanding.create({});

        }

        res.status(200).json({

            success: true,

            blogLanding

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/* ===========================
   UPDATE BLOG LANDING IMAGE
=========================== */

export const updateBlogLandingImage = async (req, res) => {

    try {

        let blogLanding = await BlogLanding.findOne();

        if (!blogLanding) {

            blogLanding = await BlogLanding.create({});

        }

        if (req.file) {

            const file = req.file;

            const fileName =
                `blog-landing/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            blogLanding.image =
                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await blogLanding.save();

        res.status(200).json({

            success: true,

            message: "Blog Landing Image Updated Successfully",

            blogLanding

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
