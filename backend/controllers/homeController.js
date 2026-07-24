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

    title: "ATLANTIIS",

    subtitle: "ELEVATE YOUR BUSINESS EVENTS",

    description: "Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting.",

    image: ""

},

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
        if (!home.awardsSection || home.awardsSection.length < 4) {

    home.awardsSection = Array.from({ length: 4 }, () => ({

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

    home.atlantiisSection = {};

}
if (!home.weddingContent) {

    home.weddingContent = {};

}

home.weddingContent.title ||= "WEDDINGS AT ATLANTIIS";

home.weddingContent.subtitle ||= "WHERE EVERY LOVE STORY MEETS ROYAL ELEGANCE";

home.weddingContent.description ||= "Celebrate your big day in a stunning wedding venue in Jaipur with timeless memories. At Atlantiis Jaipur, our grand ambiance and luxurious decor reflects your story. Customize your wedding destination into a magical reality. Whether it's an intimate wedding celebration or a lavish affair we make your day radiant with grace and splendor.";

changed = true;
if (!home.businessContent) {

    home.businessContent = {};

}
if (!home.awardsContent) {

    home.awardsContent = {

        title: "AWARDS & RECOGNITION",

        subtitle: "Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service."

    };

    changed = true;

}
home.awardsContent.title ||= "AWARDS & RECOGNITION";

home.awardsContent.subtitle ||= "Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service.";
if (!home.realContent) {

    home.realContent = {};

    changed = true;

}

home.realContent.title ||= "REAL EXPERIENCES. HONEST WORDS.";

home.realContent.subtitle ||= "STORIES OF CELEBRATION & SATISFACTION";

home.realContent.description ||= "From weddings to corporate events, our clients share their genuine experiences of hosting grand occasions with us at our luxury wedding banquet halls in Jaipur. Whether it's a dream wedding reception venue or a stylish luxury banquet destination, their stories speak volumes about our commitment to excellence.";

home.realContent.ratingTitle ||= "AWESOME!";

home.realContent.trustpilotTitle ||= "EXCELLENT";

home.businessContent.title ||= "BUSINESS EVENTS";

home.businessContent.subtitle ||= "ELEVATE YOUR BUSINESS EVENTS";

home.businessContent.description ||= "Plan your corporate event at Jaipur premier banquet hall. Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting.";

changed = true;

home.atlantiisSection.title ||= "ATLANTIIS";

home.atlantiisSection.subtitle ||= "ELEVATE YOUR BUSINESS EVENTS";

home.atlantiisSection.description ||= "Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting.";

home.atlantiisSection.image ||= "";

changed = true;


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
                awardsSection: Array.from({ length: 4 }, () => ({
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

       for (let i = 0; i < 6; i++) {

    images[i].alt = req.body[`alt${i}`] || "";

    if (
        req.files &&
        req.files[`image${i}`] &&
        req.files[`image${i}`][0]
    ) {

        const file = req.files[`image${i}`][0];

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
    title: "ATLANTIIS",
    subtitle: "ELEVATE YOUR BUSINESS EVENTS",
    description: "Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting.",
    image: ""
},
celebrationSection: {

    title1: "Jaipur's Premier Wedding Venue",

    subtitle1: "Experience grandeur like never before. Atlantiis Jaipur is a luxury banquet hall in Jaipur crafted for unforgettable weddings, corporate events, and majestic celebrations.",

    title2: "PERFECTLY CRAFTED VENUES FOR EVERY OCCASION",

    subtitle2: "From dream weddings to milestone parties and corporate galas, Our banquet hall adapts to your event."

},
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
export const updateAwards = async (req, res) => {

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

                awardsSection: Array.from({ length: 4 }, () => ({
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

        if (!home.awardsSection || home.awardsSection.length < 4) {

            home.awardsSection = Array.from({ length: 4 }, () => ({
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

            home.awardsSection[i].alt =
                req.body[`alt${i}`] || "";

            if (

                req.files &&
                req.files[`awards${i}`] &&
                req.files[`awards${i}`][0]

            ) {

                const file = req.files[`awards${i}`][0];

                const fileName =
                    `awards/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

                await r2.send(

                    new PutObjectCommand({

                        Bucket: process.env.R2_BUCKET_NAME,

                        Key: fileName,

                        Body: file.buffer,

                        ContentType: file.mimetype

                    })

                );

                home.awardsSection[i].image =
                    `${process.env.R2_PUBLIC_URL}/${fileName}`;

            }

        }

        await home.save();

        res.json({

            success: true,

            awardsSection: home.awardsSection

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

    home.atlantiisSection = {};

}

home.atlantiisSection.title = req.body.title || "";

home.atlantiisSection.subtitle = req.body.subtitle || "";

home.atlantiisSection.description = req.body.description || "";
   

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
export const updateCelebration = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({});

        }

        if (!home.celebrationSection) {

            home.celebrationSection = {};

        }

        home.celebrationSection.title1 = req.body.title1 || "";

        home.celebrationSection.subtitle1 = req.body.subtitle1 || "";

        home.celebrationSection.title2 = req.body.title2 || "";

        home.celebrationSection.subtitle2 = req.body.subtitle2 || "";

        await home.save();

        res.json({

            success: true,

            celebrationSection: home.celebrationSection

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
export const updateWeddingContent = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({});

        }

        if (!home.weddingContent) {

            home.weddingContent = {};

        }

        home.weddingContent.title = req.body.title || "";

        home.weddingContent.subtitle = req.body.subtitle || "";

        home.weddingContent.description = req.body.description || "";

        await home.save();

        res.json({

            success: true,

            weddingContent: home.weddingContent

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
export const updateBusinessContent = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({});

        }

        if (!home.businessContent) {

            home.businessContent = {};

        }

        home.businessContent.title = req.body.title || "";

        home.businessContent.subtitle = req.body.subtitle || "";

        home.businessContent.description = req.body.description || "";

        await home.save();

        res.json({

            success: true,

            businessContent: home.businessContent

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
export const updateAwardsContent = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({});

        }

        if (!home.awardsContent) {

            home.awardsContent = {};

        }
        

        home.awardsContent.title = req.body.title || "";

        home.awardsContent.subtitle = req.body.subtitle || "";

        await home.save();

        res.json({

            success: true,

            awardsContent: home.awardsContent

        });

    }
    

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
export const updateRealContent = async (req, res) => {

    try {

        let home = await Home.findOne();

        if (!home) {

            home = await Home.create({});

        }

        if (!home.realContent) {

            home.realContent = {};

        }

        home.realContent.title = req.body.title || "";

        home.realContent.subtitle = req.body.subtitle || "";

        home.realContent.description = req.body.description || "";

        home.realContent.ratingTitle = req.body.ratingTitle || "";

        home.realContent.trustpilotTitle = req.body.trustpilotTitle || "";

        await home.save();

        res.json({

            success: true,

            realContent: home.realContent

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};