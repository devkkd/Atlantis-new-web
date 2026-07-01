import Contact from "../models/Contact.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET CONTACT
=========================== */

export const getContact = async (req, res) => {

    try {

        let contact = await Contact.findOne();

        if (!contact) {

            contact = await Contact.create({

                image: ""

            });

        }

        res.status(200).json({

            success: true,

            contact

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
   UPDATE CONTACT
=========================== */

export const updateContact = async (req, res) => {

    try {

        let contact = await Contact.findOne();

        if (!contact) {

            contact = await Contact.create({

                image: ""

            });

        }

        if (req.file) {

            const file = req.file;

            const fileName =

                `contact/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            contact.image =

                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await contact.save();

        res.status(200).json({

            success: true,

            message: "Contact Updated Successfully",

            contact

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