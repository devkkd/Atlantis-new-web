import Venue from "../models/Venue.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET VENUE
=========================== */

export const getVenue = async (req, res) => {

    try {

        let venue = await Venue.findOne();

        if (!venue) {

            venue = await Venue.create({

                image: ""

            });

        }

        res.status(200).json({

            success: true,

            venue

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
   UPDATE VENUE
=========================== */

export const updateVenue = async (req, res) => {

    try {

        let venue = await Venue.findOne();

        if (!venue) {

            venue = await Venue.create({

                image: ""

            });

        }

        if (

            req.file

        ) {

            const file = req.file;

            const fileName =

                `venue/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            venue.image =

                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await venue.save();

        res.status(200).json({

            success: true,

            message: "Venue Updated Successfully",

            venue

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