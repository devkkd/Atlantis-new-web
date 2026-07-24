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
    image: "",
    title: "OUR GRAND VENUE",
    subtitle: "A Royal Setting for Unforgettable Celebrations",
    description:
        "Step into a world of elegance and sophistication at Atlantiis Jaipur. A premier luxury banquet hall in Jaipur. Designed to host weddings, receptions, corporate events and social gatherings, our versatile spaces blend modern comfort with regal charm. From the opulent banquet hall to the beautifully landscaped outdoor areas, every corner is crafted to elevate your event experience.",

    floorPlan: {
        image: "",
        title: "FLOOR PLAN",
        subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
        description:
            "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
    },
    grandHall: {
    image: "",
    title: "THE GRAND BANQUET HALL",
    subtitle: "WHERE ELEGANCE MEETS SCALE",
    description:
        "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
    buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
    theatre: "1000",
    classroom: "500",
    cocktail: "750",
    sitDown: "500",
    totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
    length: "FT. - 160 | MTR. - 48.77",
    width: "FT. - 82 | MTR. - 24.99",
    height: "FT. - 28 | MTR. - 8.53"
},
smallHall: {
    image: "",
    title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
    subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
    description:
        "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
    buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
    theatre: "450",
    classroom: "200",
    cocktail: "330",
    sitDown: "200",
    totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
    length: "FT. - 104 | MTR. - 31.70",
    width: "FT. - 58 | MTR. - 17.68",
    height: "FT. - 15 | MTR. - 4.57"
},
    
});

        }
        

        res.status(200).json({
            success: true,
            venue
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
   UPDATE VENUE
=========================== */

export const updateVenue = async (req, res) => {
    try {

        let venue = await Venue.findOne();

        if (!venue) {

           venue = await Venue.create({
    image: "",
    title: "OUR GRAND VENUE",
    subtitle: "A Royal Setting for Unforgettable Celebrations",
    description:
        "Step into a world of elegance and sophistication at Atlantiis Jaipur. A premier luxury banquet hall in Jaipur. Designed to host weddings, receptions, corporate events and social gatherings, our versatile spaces blend modern comfort with regal charm. From the opulent banquet hall to the beautifully landscaped outdoor areas, every corner is crafted to elevate your event experience.",

    floorPlan: {
        image: "",
        title: "FLOOR PLAN",
        subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
        description:
            "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
    },
    grandHall: {
    image: "",
    title: "THE GRAND BANQUET HALL",
    subtitle: "WHERE ELEGANCE MEETS SCALE",
    description:
        "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
    buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
    theatre: "1000",
    classroom: "500",
    cocktail: "750",
    sitDown: "500",
    totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
    length: "FT. - 160 | MTR. - 48.77",
    width: "FT. - 82 | MTR. - 24.99",
    height: "FT. - 28 | MTR. - 8.53"
},
smallHall: {
    image: "",
    title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
    subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
    description:
        "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
    buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
    theatre: "450",
    classroom: "200",
    cocktail: "330",
    sitDown: "200",
    totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
    length: "FT. - 104 | MTR. - 31.70",
    width: "FT. - 58 | MTR. - 17.68",
    height: "FT. - 15 | MTR. - 4.57"
},
});

        }
        if (!venue.floorPlan) {

    venue.floorPlan = {
        image: "",
        title: "FLOOR PLAN",
        subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
        description:
            "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
    };

}
if (!venue.grandHall) {

    venue.grandHall = {
        image: "",
        title: "THE GRAND BANQUET HALL",
        subtitle: "WHERE ELEGANCE MEETS SCALE",
        description:
            "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
        buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
        theatre: "1000",
        classroom: "500",
        cocktail: "750",
        sitDown: "500",
        totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
        length: "FT. - 160 | MTR. - 48.77",
        width: "FT. - 82 | MTR. - 24.99",
        height: "FT. - 28 | MTR. - 8.53"
    };

}
if (!venue.smallHall) {

    venue.smallHall = {
        image: "",
        title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
        subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
        description:
            "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
        buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
        theatre: "450",
        classroom: "200",
        cocktail: "330",
        sitDown: "200",
        totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
        length: "FT. - 104 | MTR. - 31.70",
        width: "FT. - 58 | MTR. - 17.68",
        height: "FT. - 15 | MTR. - 4.57"
    };

}

        /* ===========================
           IMAGE UPDATE
        =========================== */

        if (req.file) {

            const file = req.file;

            const fileName = `venue/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                })
            );

            venue.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        /* ===========================
           CONTENT UPDATE
        =========================== */

        if (req.body.title !== undefined) {
            venue.title = req.body.title;
        }

        if (req.body.subtitle !== undefined) {
            venue.subtitle = req.body.subtitle;
        }

        if (req.body.description !== undefined) {
            venue.description = req.body.description;
        }

        await venue.save();

        res.status(200).json({
            success: true,
            message: "Venue Updated Successfully",
            venue
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
export const updateFloorPlan = async (req, res) => {

    try {

        let venue = await Venue.findOne();

        if (!venue) {

          venue = await Venue.create({
    image: "",
    title: "OUR GRAND VENUE",
    subtitle: "A Royal Setting for Unforgettable Celebrations",
    description:
        "Step into a world of elegance and sophistication at Atlantiis Jaipur. A premier luxury banquet hall in Jaipur. Designed to host weddings, receptions, corporate events and social gatherings, our versatile spaces blend modern comfort with regal charm. From the opulent banquet hall to the beautifully landscaped outdoor areas, every corner is crafted to elevate your event experience.",

    floorPlan: {
        image: "",
        title: "FLOOR PLAN",
        subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
        description:
            "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
    },
    grandHall: {
    image: "",
    title: "THE GRAND BANQUET HALL",
    subtitle: "WHERE ELEGANCE MEETS SCALE",
    description:
        "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
    buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
    theatre: "1000",
    classroom: "500",
    cocktail: "750",
    sitDown: "500",
    totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
    length: "FT. - 160 | MTR. - 48.77",
    width: "FT. - 82 | MTR. - 24.99",
    height: "FT. - 28 | MTR. - 8.53"
},
smallHall: {
    image: "",
    title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
    subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
    description:
        "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
    buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
    theatre: "450",
    classroom: "200",
    cocktail: "330",
    sitDown: "200",
    totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
    length: "FT. - 104 | MTR. - 31.70",
    width: "FT. - 58 | MTR. - 17.68",
    height: "FT. - 15 | MTR. - 4.57"
},
});

        }
        if (!venue.floorPlan) {

    venue.floorPlan = {
        image: "",
        title: "FLOOR PLAN",
        subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
        description:
            "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
    };

}
if (!venue.grandHall) {

    venue.grandHall = {
        image: "",
        title: "THE GRAND BANQUET HALL",
        subtitle: "WHERE ELEGANCE MEETS SCALE",
        description:
            "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
        buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
        theatre: "1000",
        classroom: "500",
        cocktail: "750",
        sitDown: "500",
        totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
        length: "FT. - 160 | MTR. - 48.77",
        width: "FT. - 82 | MTR. - 24.99",
        height: "FT. - 28 | MTR. - 8.53"
    };

}
if (!venue.smallHall) {

    venue.smallHall = {
        image: "",
        title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
        subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
        description:
            "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
        buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
        theatre: "450",
        classroom: "200",
        cocktail: "330",
        sitDown: "200",
        totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
        length: "FT. - 104 | MTR. - 31.70",
        width: "FT. - 58 | MTR. - 17.68",
        height: "FT. - 15 | MTR. - 4.57"
    };

}

        /* ===========================
           FLOOR PLAN IMAGE
        =========================== */

        if (req.file) {

            const file = req.file;

            const fileName = `floor-plan/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                })
            );

            venue.floorPlan.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        /* ===========================
           FLOOR PLAN CONTENT
        =========================== */

        if (req.body.title !== undefined) {
            venue.floorPlan.title = req.body.title;
        }

        if (req.body.subtitle !== undefined) {
            venue.floorPlan.subtitle = req.body.subtitle;
        }

        if (req.body.description !== undefined) {
            venue.floorPlan.description = req.body.description;
        }

        await venue.save();

        res.status(200).json({
            success: true,
            message: "Floor Plan Updated Successfully",
            venue
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
export const updateGrandHall = async (req, res) => {

    try {

        let venue = await Venue.findOne();

        if (!venue) {

            venue = await Venue.create({
                image: "",
                title: "OUR GRAND VENUE",
                subtitle: "A Royal Setting for Unforgettable Celebrations",
                description:
                    "Step into a world of elegance and sophistication at Atlantiis Jaipur. A premier luxury banquet hall in Jaipur. Designed to host weddings, receptions, corporate events and social gatherings, our versatile spaces blend modern comfort with regal charm. From the opulent banquet hall to the beautifully landscaped outdoor areas, every corner is crafted to elevate your event experience.",

                floorPlan: {
                    image: "",
                    title: "FLOOR PLAN",
                    subtitle: "VISUALIZE YOUR EVENT WITH CONFIDENCE",
                    description:
                        "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
                },

                grandHall: {
                    image: "",
                    title: "THE GRAND BANQUET HALL",
                    subtitle: "WHERE ELEGANCE MEETS SCALE",
                    description:
                        "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
                    buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
                    theatre: "1000",
                    classroom: "500",
                    cocktail: "750",
                    sitDown: "500",
                    totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
                    length: "FT. - 160 | MTR. - 48.77",
                    width: "FT. - 82 | MTR. - 24.99",
                    height: "FT. - 28 | MTR. - 8.53"
                },
                smallHall: {
    image: "",
    title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
    subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
    description:
        "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
    buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
    theatre: "450",
    classroom: "200",
    cocktail: "330",
    sitDown: "200",
    totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
    length: "FT. - 104 | MTR. - 31.70",
    width: "FT. - 58 | MTR. - 17.68",
    height: "FT. - 15 | MTR. - 4.57"
},
            });

        }

        if (!venue.grandHall) {

            venue.grandHall = {
                image: "",
                title: "THE GRAND BANQUET HALL",
                subtitle: "WHERE ELEGANCE MEETS SCALE",
                description:
                    "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable.",
                buttonText: "SEE THE GRAND BANQUET HALL IMAGES →",
                theatre: "1000",
                classroom: "500",
                cocktail: "750",
                sitDown: "500",
                totalArea: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89",
                length: "FT. - 160 | MTR. - 48.77",
                width: "FT. - 82 | MTR. - 24.99",
                height: "FT. - 28 | MTR. - 8.53"
            };

        }
        if (!venue.smallHall) {

    venue.smallHall = {
        image: "",
        title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
        subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
        description:
            "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
        buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
        theatre: "450",
        classroom: "200",
        cocktail: "330",
        sitDown: "200",
        totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
        length: "FT. - 104 | MTR. - 31.70",
        width: "FT. - 58 | MTR. - 17.68",
        height: "FT. - 15 | MTR. - 4.57"
    };

}

        /* ===========================
           GRAND HALL IMAGE
        =========================== */

        if (req.file) {

            const file = req.file;

            const fileName = `grand-hall/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                })
            );

            venue.grandHall.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        /* ===========================
           GRAND HALL CONTENT
        =========================== */

        if (req.body.title !== undefined) {
            venue.grandHall.title = req.body.title;
        }

        if (req.body.subtitle !== undefined) {
            venue.grandHall.subtitle = req.body.subtitle;
        }

        if (req.body.description !== undefined) {
            venue.grandHall.description = req.body.description;
        }

        if (req.body.buttonText !== undefined) {
            venue.grandHall.buttonText = req.body.buttonText;
        }

        if (req.body.theatre !== undefined) {
            venue.grandHall.theatre = req.body.theatre;
        }

        if (req.body.classroom !== undefined) {
            venue.grandHall.classroom = req.body.classroom;
        }

        if (req.body.cocktail !== undefined) {
            venue.grandHall.cocktail = req.body.cocktail;
        }

        if (req.body.sitDown !== undefined) {
            venue.grandHall.sitDown = req.body.sitDown;
        }

        if (req.body.totalArea !== undefined) {
            venue.grandHall.totalArea = req.body.totalArea;
        }

        if (req.body.length !== undefined) {
            venue.grandHall.length = req.body.length;
        }

        if (req.body.width !== undefined) {
            venue.grandHall.width = req.body.width;
        }

        if (req.body.height !== undefined) {
            venue.grandHall.height = req.body.height;
        }

        await venue.save();

        res.status(200).json({
            success: true,
            message: "Grand Hall Updated Successfully",
            venue
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
export const updateSmallHall = async (req, res) => {
    try {

        let venue = await Venue.findOne();

        if (!venue) {
            venue = await Venue.create({});
        }

        if (!venue.smallHall) {

            venue.smallHall = {
                image: "",
                title: "THE PRE-FUNCTION HALL / SMALL BANQUET",
                subtitle: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS",
                description:
                    "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.",
                buttonText: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →",
                theatre: "450",
                classroom: "200",
                cocktail: "330",
                sitDown: "200",
                totalArea: "SQ. FT. - 6,032 | SQ. MTR. - 560.39",
                length: "FT. - 104 | MTR. - 31.70",
                width: "FT. - 58 | MTR. - 17.68",
                height: "FT. - 15 | MTR. - 4.57"
            };

        }

        /* ===========================
           SMALL HALL IMAGE
        =========================== */

        if (req.file) {

            const file = req.file;

            const fileName = `small-hall/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                })
            );

            venue.smallHall.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        /* ===========================
           SMALL HALL CONTENT
        =========================== */

        if (req.body.title !== undefined) {
            venue.smallHall.title = req.body.title;
        }

        if (req.body.subtitle !== undefined) {
            venue.smallHall.subtitle = req.body.subtitle;
        }

        if (req.body.description !== undefined) {
            venue.smallHall.description = req.body.description;
        }

        if (req.body.buttonText !== undefined) {
            venue.smallHall.buttonText = req.body.buttonText;
        }

        if (req.body.theatre !== undefined) {
            venue.smallHall.theatre = req.body.theatre;
        }

        if (req.body.classroom !== undefined) {
            venue.smallHall.classroom = req.body.classroom;
        }

        if (req.body.cocktail !== undefined) {
            venue.smallHall.cocktail = req.body.cocktail;
        }

        if (req.body.sitDown !== undefined) {
            venue.smallHall.sitDown = req.body.sitDown;
        }

        if (req.body.totalArea !== undefined) {
            venue.smallHall.totalArea = req.body.totalArea;
        }

        if (req.body.length !== undefined) {
            venue.smallHall.length = req.body.length;
        }

        if (req.body.width !== undefined) {
            venue.smallHall.width = req.body.width;
        }

        if (req.body.height !== undefined) {
            venue.smallHall.height = req.body.height;
        }

        await venue.save();

        res.status(200).json({
            success: true,
            message: "Small Hall Updated Successfully",
            venue
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
export const updateLawn = async (req, res) => {
    try {

        let venue = await Venue.findOne();

        if (!venue) {
            venue = await Venue.create({});
        }

        if (!venue.lawn) {

            venue.lawn = {
                image: "",
                title: "THE LAWN",
                subtitle: "CELEBRATE UNDER THE OPEN SKY",
                description:
                    "Our beautiful landscaped outdoor wedding lawn is perfect for vibrant day events or romantic evening ceremonies with flexible outdoor wedding decoration possibilities and ample space, it adds charm and freshness to weddings, cultural functions or casual stories.",
                buttonText: "SEE THE LAWN IMAGES →",
                theatre: "620",
                classroom: "375",
                cocktail: "",
                sitDown: "",
                totalArea: "SQ. FT. - 12,825 | SQ. MTR. - 1,191.48",
                length: "FT. - 135 | MTR. - 41.15",
                width: "FT. - 95 | MTR. - 28.96",
                height: ""
            };

        }

        /* ===========================
           LAWN IMAGE
        =========================== */

        if (req.file) {

            const file = req.file;

            const fileName = `lawn/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(
                new PutObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype
                })
            );

            venue.lawn.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        /* ===========================
           LAWN CONTENT
        =========================== */

        if (req.body.title !== undefined) {
            venue.lawn.title = req.body.title;
        }

        if (req.body.subtitle !== undefined) {
            venue.lawn.subtitle = req.body.subtitle;
        }

        if (req.body.description !== undefined) {
            venue.lawn.description = req.body.description;
        }

        if (req.body.buttonText !== undefined) {
            venue.lawn.buttonText = req.body.buttonText;
        }

        if (req.body.theatre !== undefined) {
            venue.lawn.theatre = req.body.theatre;
        }

        if (req.body.classroom !== undefined) {
            venue.lawn.classroom = req.body.classroom;
        }

        if (req.body.cocktail !== undefined) {
            venue.lawn.cocktail = req.body.cocktail;
        }

        if (req.body.sitDown !== undefined) {
            venue.lawn.sitDown = req.body.sitDown;
        }

        if (req.body.totalArea !== undefined) {
            venue.lawn.totalArea = req.body.totalArea;
        }

        if (req.body.length !== undefined) {
            venue.lawn.length = req.body.length;
        }

        if (req.body.width !== undefined) {
            venue.lawn.width = req.body.width;
        }

        if (req.body.height !== undefined) {
            venue.lawn.height = req.body.height;
        }

        await venue.save();

        res.status(200).json({
            success: true,
            message: "Lawn Updated Successfully",
            venue
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};