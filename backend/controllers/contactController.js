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
    image: "",
    title: "CONTACT US",
    subtitle: "ATLANTIIS - THE LUXURY BANQUET",
    description:
        "Situated near Sitapura and close to major city landmarks, Atlantiis Jaipur is easy to reach for guests across the city and beyond.",
    address:
        "Infront of Novotel Hotel, Near JECC, Tonk Rd, Sitapura Industrial Area, Govardhan Nagar, Jaipur, Rajasthan 302022",
    phone: "+91 98280 60003",
    email: "info@atlantiisbanquet.com",
    facebook: "https://www.facebook.com/profile.php?id=61577228375903",
    instagram: "https://www.instagram.com/atlantiis_banquet/",
    youtube: "https://www.youtube.com/@AtlantisBanquet",
    pinterest: "https://in.pinterest.com/atlantiisbanquet/"
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
/* ===========================
   UPDATE CONTACT CONTENT
=========================== */

export const updateContactContent = async (req, res) => {

    try {

        let contact = await Contact.findOne();

        if (!contact) {
contact = await Contact.create({
    image: "",
    title: "CONTACT US",
    subtitle: "ATLANTIIS - THE LUXURY BANQUET",
    description:
        "Situated near Sitapura and close to major city landmarks, Atlantiis Jaipur is easy to reach for guests across the city and beyond.",
    address:
        "Infront of Novotel Hotel, Near JECC, Tonk Rd, Sitapura Industrial Area, Govardhan Nagar, Jaipur, Rajasthan 302022",
    phone: "+91 98280 60003",
    email: "info@atlantiisbanquet.com",
    facebook: "https://www.facebook.com/profile.php?id=61577228375903",
    instagram: "https://www.instagram.com/atlantiis_banquet/",
    youtube: "https://www.youtube.com/@AtlantisBanquet",
    pinterest: "https://in.pinterest.com/atlantiisbanquet/"
});

        }

        contact.title = req.body.title;
        contact.subtitle = req.body.subtitle;
        contact.description = req.body.description;
        contact.address = req.body.address;
        contact.phone = req.body.phone;
        contact.email = req.body.email;
        contact.facebook = req.body.facebook;
        contact.instagram = req.body.instagram;
        contact.youtube = req.body.youtube;
        contact.pinterest = req.body.pinterest;

        await contact.save();

        res.status(200).json({
            success: true,
            message: "Contact Content Updated Successfully",
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
