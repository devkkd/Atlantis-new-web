import Header from "../models/Header.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET HEADER
=========================== */

export const getHeader = async (req, res) => {
    try {

        let header = await Header.findOne();

        if (!header) {

            header = await Header.create({});

        }

        res.status(200).json({
            success: true,
            header
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

/* ===========================
   UPDATE HEADER LOGO
=========================== */

export const updateHeaderImage = async (req, res) => {

    try {

        let header = await Header.findOne();

        if (!header) {

            header = await Header.create({});

        }

        if (req.file) {

            const file = req.file;

            const fileName =
                `header/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                })
            );

            header.logo =
                `${process.env.R2_PUBLIC_URL}/${fileName}`;
        }

        await header.save();

        res.status(200).json({
            success: true,
            message: "Header Logo Updated Successfully",
            header,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/* ===========================
   UPDATE HEADER CONTENT
=========================== */

export const updateHeaderContent = async (req, res) => {

    try {

        let header = await Header.findOne();

        if (!header) {

            header = await Header.create({});

        }

        header.home = req.body.home;
        header.venue = req.body.venue;
        header.services = req.body.services;
        header.gallery = req.body.gallery;
        header.contact = req.body.contact;
        header.phone = req.body.phone;
        header.buttonText = req.body.buttonText;

        await header.save();

        res.status(200).json({
            success: true,
            message: "Header Content Updated Successfully",
            header,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};