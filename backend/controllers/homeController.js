import Home from "../models/Home.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET HOME DATA
=========================== */

export const getHome = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: Array.from({ length: 6 }, () => ({
                    image: "",
                    alt: ""
                })),

                venueSection: Array.from({ length: 4 }, () => ({
                    image: "",
                    title: "",
                    description: "",
                    alt: ""
                })),

                weddingSection: Array.from({ length: 4 }, () => ({
                    video: "",
                    number: "",
                    title: "",
                    description: ""
                })),
                businessSection: Array.from({ length: 2 }, () => ({
                    image: "",
                    alt: ""
                })),
                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}

            });

        }

        let changed = false;

        if (!home.heroImages || home.heroImages.length < 6) {

            home.heroImages = Array.from({ length: 6 }, () => ({
                image: "",
                alt: ""
            }));

            changed = true;

        }

        if (!home.venueSection || home.venueSection.length < 4) {

            home.venueSection = Array.from({ length: 4 }, () => ({
                image: "",
                title: "",
                description: "",
                alt: ""
            }));

            changed = true;

        }

        if (!home.weddingSection || home.weddingSection.length < 4) {

            home.weddingSection = Array.from({ length: 4 }, () => ({
                video: "",
                number: "",
                title: "",
                description: ""
            }));

            changed = true;

        }
        if (!home.businessSection || home.businessSection.length < 2) {

            home.businessSection = Array.from({ length: 2 }, () => ({
                image: "",
                alt: ""
            }));

            changed = true;

        }
        if (!home.reviewSection || home.reviewSection.length < 6) {

            home.reviewSection = Array.from({ length: 6 }, () => ({
                author: "",
                text: ""
            }));

            changed = true;

        }
        if (!home.magicSection) {

            home.magicSection = {
                video: ""
            };

            changed = true;

        }
        if (!home.atlantiisSection) {

    home.atlantiisSection = {

        image: ""

    };

    changed = true;

}


        if (changed) {

            await home.save();

        }

        res.status(200).json(home);

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
   UPDATE HERO
=========================== */

export const updateHome = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: Array.from({ length: 6 }, () => ({
                    image: "",
                    alt: ""
                })),

                venueSection: Array.from({ length: 4 }, () => ({
                    image: "",
                    title: "",
                    description: "",
                    alt: ""
                })),

                weddingSection: Array.from({ length: 4 }, () => ({
                    video: "",
                    number: "",
                    title: "",
                    description: ""
                })),
                businessSection: Array.from({ length: 2 }, () => ({
                    image: "",
                    alt: ""
                })),
                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}

            });

        }

        if (!home.heroImages || home.heroImages.length < 6) {

            home.heroImages = Array.from({ length: 6 }, () => ({
                image: "",
                alt: ""
            }));

        }

        const images = [...home.heroImages];

        let uploadIndex = 0;

        for (let i = 0; i < 6; i++) {

            images[i].alt = req.body[`alt${i}`] || "";

            if (

                req.files &&
                req.files[uploadIndex]

            ) {

                const file = req.files[uploadIndex];

                const fileName =
                    `hero/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

                await r2.send(

                    new PutObjectCommand({

                        Bucket: process.env.R2_BUCKET_NAME,

                        Key: fileName,

                        Body: file.buffer,

                        ContentType: file.mimetype

                    })

                );

                images[i].image =
                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

                uploadIndex++;

            }

        }

        home.heroImages = images;

        await home.save();

        res.status(200).json({

            success: true,

            message: "Hero Slider Updated",

            home

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

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: Array.from({ length: 6 }, () => ({
                    image: "",
                    alt: ""
                })),

                venueSection: Array.from({ length: 4 }, () => ({
                    image: "",
                    title: "",
                    description: "",
                    alt: ""
                })),

                weddingSection: Array.from({ length: 4 }, () => ({
                    video: "",
                    number: "",
                    title: "",
                    description: ""
                })),
                businessSection: Array.from({ length: 2 }, () => ({
                    image: "",
                    alt: ""
                })),
                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}
            });

        }

        if (!home.venueSection || home.venueSection.length < 4) {

            home.venueSection = Array.from({ length: 4 }, () => ({
                image: "",
                title: "",
                description: "",
                alt: ""
            }));

        }

        if (!home.weddingSection || home.weddingSection.length < 4) {

            home.weddingSection = Array.from({ length: 4 }, () => ({
                video: "",
                number: "",
                title: "",
                description: ""
            }));

        }
        if (!home.businessSection || home.businessSection.length < 2) {

            home.businessSection = Array.from({ length: 2 }, () => ({
                image: "",
                alt: ""
            }));

        }
        if (!home.reviewSection || home.reviewSection.length < 6) {

            home.reviewSection = Array.from({ length: 6 }, () => ({
                author: "",
                text: ""
            }));

        }

        for (let i = 0; i < 4; i++) {

            home.venueSection[i].title =
                req.body[`title${i}`] || "";

            home.venueSection[i].description =
                req.body[`description${i}`] || "";

            home.venueSection[i].alt =
                req.body[`alt${i}`] || "";

            if (

                req.files &&
                req.files[`venue${i}`] &&
                req.files[`venue${i}`][0]

            ) {

                const file = req.files[`venue${i}`][0];

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

                home.venueSection[i].image =
                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

            }

        }

        await home.save();

        res.status(200).json({

            success: true,

            message: "Venue Updated",

            venueSection: home.venueSection

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
   UPDATE WEDDING
=========================== */

export const updateWedding = async (req, res) => {
    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: Array.from({ length: 6 }, () => ({
                    image: "",
                    alt: ""
                })),

                venueSection: Array.from({ length: 4 }, () => ({
                    image: "",
                    title: "",
                    description: "",
                    alt: ""
                })),

                weddingSection: Array.from({ length: 4 }, () => ({
                    video: "",
                    number: "",
                    title: "",
                    description: ""
                })),
                businessSection: Array.from({ length: 2 }, () => ({
                    image: "",
                    alt: ""
                })),
                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}

            });

        }

        if (!home.weddingSection || home.weddingSection.length < 4) {

            home.weddingSection = Array.from({ length: 4 }, () => ({
                video: "",
                number: "",
                title: "",
                description: ""
            }));

        }
        if (!home.businessSection || home.businessSection.length < 2) {

            home.businessSection = Array.from({ length: 2 }, () => ({
                image: "",
                alt: ""
            }));

        }
        if (!home.reviewSection || home.reviewSection.length < 6) {

            home.reviewSection = Array.from({ length: 6 }, () => ({
                author: "",
                text: ""
            }));



        }

        for (let i = 0; i < 4; i++) {

            home.weddingSection[i].number =
                req.body[`number${i}`] || "";

            home.weddingSection[i].title =
                req.body[`title${i}`] || "";

            home.weddingSection[i].description =
                req.body[`description${i}`] || "";

            if (

                req.files &&
                req.files[`video${i}`] &&
                req.files[`video${i}`][0]

            ) {

                const file = req.files[`video${i}`][0];

                const fileName =
                    `wedding/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

                await r2.send(

                    new PutObjectCommand({

                        Bucket: process.env.R2_BUCKET_NAME,

                        Key: fileName,

                        Body: file.buffer,

                        ContentType: file.mimetype

                    })

                );

                home.weddingSection[i].video =
                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

            }

        }

        await home.save();

        res.status(200).json({

            success: true,

            message: "Wedding Updated",

            weddingSection: home.weddingSection

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
export const updateBusiness = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: Array.from({ length: 6 }, () => ({
                    image: "",
                    alt: ""
                })),

                venueSection: Array.from({ length: 4 }, () => ({
                    image: "",
                    title: "",
                    description: "",
                    alt: ""
                })),

                weddingSection: Array.from({ length: 4 }, () => ({
                    video: "",
                    number: "",
                    title: "",
                    description: ""
                })),

                businessSection: Array.from({ length: 2 }, () => ({
                    image: "",
                    alt: ""
                })),
                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}

            });

        }

        if (!home.businessSection || home.businessSection.length < 2) {

            home.businessSection = Array.from({ length: 2 }, () => ({
                image: "",
                alt: ""
            }));

        }
        if (!home.reviewSection || home.reviewSection.length < 6) {

            home.reviewSection = Array.from({ length: 6 }, () => ({
                author: "",
                text: ""
            }));



        }

        for (let i = 0; i < 2; i++) {

            home.businessSection[i].alt =
                req.body[`alt${i}`] || "";

            if (

                req.files &&
                req.files[`business${i}`] &&
                req.files[`business${i}`][0]

            ) {

                const file = req.files[`business${i}`][0];

                const fileName =
                    `business/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

                await r2.send(

                    new PutObjectCommand({

                        Bucket: process.env.R2_BUCKET_NAME,

                        Key: fileName,

                        Body: file.buffer,

                        ContentType: file.mimetype

                    })

                );

                home.businessSection[i].image =
                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

            }

        }

        await home.save();

        res.json({

            success: true,

            businessSection: home.businessSection

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
export const updateReview = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                heroImages: [],

                venueSection: [],

                weddingSection: [],

                businessSection: [],

                reviewSection: Array.from({ length: 6 }, () => ({
                    author: "",
                    text: ""
                })),
                magicSection: {
                    video: ""
                },
                atlantiisSection: {

    image: ""

}

            });

        }

        if (!home.reviewSection || home.reviewSection.length < 6) {

            home.reviewSection = Array.from({ length: 6 }, () => ({
                author: "",
                text: ""
            }));

        }

        for (let i = 0; i < 6; i++) {

            home.reviewSection[i].author =
                req.body[`author${i}`] || "";

            home.reviewSection[i].text =
                req.body[`text${i}`] || "";

        }

        await home.save();

        res.json({

            success: true,

            reviewSection: home.reviewSection

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
export const updateMagic = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                magicSection: {

                    video: ""

                }

            });

        }

        if (!home.magicSection) {

            home.magicSection = {

                video: ""

            };

        }

        if (

            req.files &&
            req.files.magicVideo &&
            req.files.magicVideo[0]

        ) {

            const file = req.files.magicVideo[0];

            const fileName =
                `magic/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            home.magicSection.video =
                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await home.save();

        res.json({

            success: true,

            magicSection: home.magicSection

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
   UPDATE ATLANTIIS
=========================== */

export const updateAtlantiis = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({

                atlantiisSection: {

                    image: ""

                }

            });

        }

        if (!home.atlantiisSection) {

            home.atlantiisSection = {

                image: ""

            };

        }

        if (

            req.files &&

            req.files.atlantiis &&

            req.files.atlantiis[0]

        ) {

            const file = req.files.atlantiis[0];

            const fileName =

                `atlantiis/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

            await r2.send(

                new PutObjectCommand({

                    Bucket: process.env.R2_BUCKET_NAME,

                    Key: fileName,

                    Body: file.buffer,

                    ContentType: file.mimetype

                })

            );

            home.atlantiisSection.image =

                `${process.env.R2_PUBLIC_URL}/${fileName}`;

        }

        await home.save();

        res.json({

            success: true,

            atlantiisSection: home.atlantiisSection

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