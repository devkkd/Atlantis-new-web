import Gallery from "../models/Gallery.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET GALLERY
=========================== */

export const getGallery = async (req, res) => {

    try {

        let gallery = await Gallery.findOne();

        if (!gallery) {

        gallery = await Gallery.create({

    galleryLanding: {
        image: "",
        title: "GALLERY",
        subtitle: "MOMENTS THAT DEFINE CELEBRATIONS",
        description:
            "Browse our curated gallery showcasing the beauty, grandeur, and joy of events hosted at Atlantis Jaipur. From majestic wedding setups to elegant décor and lively gatherings, every image tells a story of unforgettable memories made here."
    },

    grandHall: Array(10).fill(""),

    preFunction: Array(10).fill(""),

    diningHall: Array(5).fill(""),

    dressingSuite: Array(10).fill(""),

    propertyInsights: Array(10).fill("")

});

        }

        let changed = false;

        if (!gallery.grandHall || gallery.grandHall.length < 10) {

            gallery.grandHall = Array(10).fill("");

            changed = true;

        }

        if (!gallery.preFunction || gallery.preFunction.length < 10) {

            gallery.preFunction = Array(10).fill("");

            changed = true;

        }

        if (!gallery.diningHall || gallery.diningHall.length < 5) {

            gallery.diningHall = Array(5).fill("");

            changed = true;

        }

        if (!gallery.dressingSuite || gallery.dressingSuite.length < 10) {

            gallery.dressingSuite = Array(10).fill("");

            changed = true;

        }

        if (!gallery.propertyInsights || gallery.propertyInsights.length < 10) {

            gallery.propertyInsights = Array(10).fill("");

            changed = true;

        }

        if (changed) {

            await gallery.save();

        }

        res.status(200).json({

            success: true,

            gallery

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
   COMMON UPDATE FUNCTION
=========================== */

const updateSection = async (

    req,

    res,

    section,

    total,

    folder

) => {

    try {

        let gallery = await Gallery.findOne();

        if (!gallery) {

          gallery = await Gallery.create({

    galleryLanding: {
        image: "",
        title: "GALLERY",
        subtitle: "MOMENTS THAT DEFINE CELEBRATIONS",
        description:
            "Browse our curated gallery showcasing the beauty, grandeur, and joy of events hosted at Atlantis Jaipur. From majestic wedding setups to elegant décor and lively gatherings, every image tells a story of unforgettable memories made here."
    },

    grandHall: Array(10).fill(""),

    preFunction: Array(10).fill(""),

    diningHall: Array(5).fill(""),

    dressingSuite: Array(10).fill(""),

    propertyInsights: Array(10).fill("")

});

        }

        if (!gallery[section] || gallery[section].length < total) {

            gallery[section] = Array(total).fill("");

        }
        if (section === "contactLanding") {

    if (

        req.files?.contactLanding?.[0]

    ) {

        const file = req.files.contactLanding[0];

        const fileName =

            `${folder}/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

        await r2.send(

            new PutObjectCommand({

                Bucket: process.env.R2_BUCKET_NAME,

                Key: fileName,

                Body: file.buffer,

                ContentType: file.mimetype

            })

        );

        gallery.contactLanding =

            `${process.env.R2_PUBLIC_URL}/${fileName}`;

        await gallery.save();

        return res.status(200).json({

            success: true,

            gallery

        });

    }

}

        const images = [...gallery[section]];

        for (let i = 0; i < total; i++) {

            const field = `${section}${i}`;

            if (

                req.files &&

                req.files[field] &&

                req.files[field][0]

            ) {

                const file = req.files[field][0];

                const fileName =

                    `${folder}/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

                await r2.send(

                    new PutObjectCommand({

                        Bucket: process.env.R2_BUCKET_NAME,

                        Key: fileName,

                        Body: file.buffer,

                        ContentType: file.mimetype

                    })

                );

                images[i] =

                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

            }

        }

        gallery[section] = images;

        await gallery.save();

        res.status(200).json({

            success: true,

            message: `${section} Updated Successfully`,

            gallery

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
   UPDATE GRAND HALL
=========================== */

export const updateGrandHall = async (req, res) => {

    return updateSection(

        req,

        res,

        "grandHall",

        10,

        "gallery/grandHall"

    );

};

/* ===========================
   UPDATE PRE FUNCTION
=========================== */

export const updatePreFunction = async (req, res) => {

    return updateSection(

        req,

        res,

        "preFunction",

        10,

        "gallery/preFunction"

    );

};

/* ===========================
   UPDATE DINING HALL
=========================== */

export const updateDiningHall = async (req, res) => {

    return updateSection(

        req,

        res,

        "diningHall",

        5,

        "gallery/diningHall"

    );

};

/* ===========================
   UPDATE DRESSING SUITE
=========================== */

export const updateDressingSuite = async (req, res) => {

    return updateSection(

        req,

        res,

        "dressingSuite",

        10,

        "gallery/dressingSuite"

    );

};

/* ===========================
   UPDATE PROPERTY INSIGHTS
=========================== */

export const updatePropertyInsights = async (req, res) => {

    return updateSection(

        req,

        res,

        "propertyInsights",

        10,

        "gallery/propertyInsights"

    );

};
/* ===========================
   UPDATE CONTACT LANDING
=========================== */

export const updateContactLanding = async (req, res) => {

    return updateSection(

        req,

        res,

        "contactLanding",

        1,

        "gallery/contactLanding"

    );

};
/* ===========================
   UPDATE GALLERY BP CONTENT
=========================== */

export const updateGalleryLandingContent = async (req, res) => {

    try {

        let gallery = await Gallery.findOne();

        if (!gallery) {

            gallery = await Gallery.create();

        }

        if (!gallery.galleryLanding) {

            gallery.galleryLanding = {
                image: "",
                title: "GALLERY",
                subtitle: "MOMENTS THAT DEFINE CELEBRATIONS",
                description:
                    "Browse our curated gallery showcasing the beauty, grandeur, and joy of events hosted at Atlantis Jaipur. From majestic wedding setups to elegant décor and lively gatherings, every image tells a story of unforgettable memories made here."
            };

        }

        gallery.galleryLanding.title = req.body.title;
        gallery.galleryLanding.subtitle = req.body.subtitle;
        gallery.galleryLanding.description = req.body.description;

        await gallery.save();

        res.status(200).json({
            success: true,
            message: "Gallery Landing Content Updated Successfully",
            gallery
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
/* ===========================
   UPDATE GALLERY SECTIONS CONTENT
=========================== */

export const updateGallerySectionsContent = async (req, res) => {

    try {

        let gallery = await Gallery.findOne();

        if (!gallery) {

            gallery = await Gallery.create();

        }

        if (!gallery.galleryContent) {

            gallery.galleryContent = {};

        }

        gallery.galleryContent = req.body;

        await gallery.save();

        res.status(200).json({

            success: true,

            message: "Gallery Sections Content Updated Successfully",

            gallery

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