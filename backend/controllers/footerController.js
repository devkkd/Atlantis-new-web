import Footer from "../models/Footer.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET FOOTER
=========================== */

export const getFooter = async (req, res) => {

    try {

        let footer = await Footer.findOne();

        if (!footer) {

            footer = await Footer.create({});

        }

        res.status(200).json({

            success: true,

            footer

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
   UPDATE FOOTER LOGO
=========================== */

export const updateFooterImage = async (req, res) => {

    try {

        let footer = await Footer.findOne();

        if (!footer) {

            footer = await Footer.create({});

        }

        if (req.file) {

            const file = req.file;

            const fileName =
                `footer/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            footer.logo =
                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await footer.save();

        res.status(200).json({

            success: true,

            message: "Footer Logo Updated Successfully",

            footer

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
   UPDATE FOOTER CONTENT
=========================== */

export const updateFooterContent = async (req, res) => {

    try {

        let footer = await Footer.findOne();

        if (!footer) {

            footer = await Footer.create({});

        }

        footer.home = req.body.home;
        footer.venue = req.body.venue;
        footer.services = req.body.services;
        footer.gallery = req.body.gallery;
        footer.blog = req.body.blog;

        footer.description = req.body.description;
        footer.address = req.body.address;

        footer.phone = req.body.phone;
        footer.email = req.body.email;

        footer.copyright = req.body.copyright;
        footer.poweredBy = req.body.poweredBy;
        footer.poweredByLink = req.body.poweredByLink;

        footer.facebook = req.body.facebook;
        footer.instagram = req.body.instagram;
        footer.youtube = req.body.youtube;
        footer.pinterest = req.body.pinterest;

        footer.bottomText = req.body.bottomText;

        await footer.save();

        res.status(200).json({

            success: true,

            message: "Footer Content Updated Successfully",

            footer

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