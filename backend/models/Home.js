import mongoose from "mongoose";

/* ===========================
   Hero Image
=========================== */

const imageSchema = new mongoose.Schema({

    image: {
        type: String,
        default: ""
    },

    alt: {
        type: String,
        default: ""
    }

}, { _id: false });

/* ===========================
   Venue Section
=========================== */

const venueSchema = new mongoose.Schema({

    image: {
        type: String,
        default: ""
    },

    title: {
        type: String,
        default: ""
    },

    description: {
        type: String,
        default: ""
    },

    alt: {
        type: String,
        default: ""
    }

}, { _id: false });

/* ===========================
   Wedding Section
=========================== */

const weddingSchema = new mongoose.Schema({

    video: {
        type: String,
        default: ""
    },

    number: {
        type: String,
        default: ""
    },

    title: {
        type: String,
        default: ""
    },

    description: {
        type: String,
        default: ""
    }

}, { _id: false });
/* ===========================
   Business Section
=========================== */

const businessSchema = new mongoose.Schema({

    image: {
        type: String,
        default: ""
    },

    alt: {
        type: String,
        default: ""
    }

}, { _id: false });
/* ===========================
   Awards Section
=========================== */

const awardsSchema = new mongoose.Schema({

    image: {
        type: String,
        default: ""
    },

    alt: {
        type: String,
        default: ""
    }

}, { _id: false });
/* ===========================
   Review Section
=========================== */

const reviewSchema = new mongoose.Schema({

    author: {
        type: String,
        default: ""
    },

    text: {
        type: String,
        default: ""
    }

}, { _id: false });
/* ===========================
   Magic Section
=========================== */

const magicSchema = new mongoose.Schema({

    video: {

        type: String,

        default: ""

    }

}, { _id: false });
/* ===========================
   Home Schema
=========================== */

const homeSchema = new mongoose.Schema({

    heroImages: {
        type: [imageSchema],
        default: () =>
            Array.from({ length: 6 }, () => ({
                image: "",
                alt: ""
            }))
    },

    venueSection: {
        type: [venueSchema],
        default: () =>
            Array.from({ length: 4 }, () => ({
                image: "",
                title: "",
                description: "",
                alt: ""
            }))
    },

    weddingSection: {
        type: [weddingSchema],
        default: () =>
            Array.from({ length: 4 }, () => ({
                video: "",
                number: "",
                title: "",
                description: ""
            }))
    },
    
weddingContent: {
    type: {
        title: {
            type: String,
            default: "WEDDINGS AT ATLANTIIS"
        },
        subtitle: {
            type: String,
            default: "WHERE EVERY LOVE STORY MEETS ROYAL ELEGANCE"
        },
        description: {
            type: String,
            default: "Celebrate your big day in a stunning wedding venue in Jaipur with timeless memories. At Atlantiis Jaipur, our grand ambiance and luxurious decor reflects your story. Customize your wedding destination into a magical reality. Whether it's an intimate wedding celebration or a lavish affair we make your day radiant with grace and splendor."
        }
    },
    default: () => ({
        title: "WEDDINGS AT ATLANTIIS",
        subtitle: "WHERE EVERY LOVE STORY MEETS ROYAL ELEGANCE",
        description: "Celebrate your big day in a stunning wedding venue in Jaipur with timeless memories. At Atlantiis Jaipur, our grand ambiance and luxurious decor reflects your story. Customize your wedding destination into a magical reality. Whether it's an intimate wedding celebration or a lavish affair we make your day radiant with grace and splendor."
    })
},
    businessSection: {

    type: [businessSchema],

    default: () =>

        Array.from({ length: 2 }, () => ({

            image: "",

            alt: ""

        }))

},
businessContent: {

    type: new mongoose.Schema({

        title: {

            type: String,

            default: "BUSINESS EVENTS"

        },

        subtitle: {

            type: String,

            default: "ELEVATE YOUR BUSINESS EVENTS"

        },

        description: {

            type: String,

            default: "Plan your corporate event at Jaipur premier banquet hall. Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting."

        }

    }, { _id: false }),

    default: () => ({

        title: "BUSINESS EVENTS",

        subtitle: "ELEVATE YOUR BUSINESS EVENTS",

        description: "Plan your corporate event at Jaipur premier banquet hall. Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting."

    })

},
awardsContent: {

    type: new mongoose.Schema({

        title: {

            type: String,

            default: "AWARDS & RECOGNITION"

        },

        subtitle: {

            type: String,

            default: "Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service."

        }

    }, { _id: false }),

    default: () => ({

        title: "AWARDS & RECOGNITION",

        subtitle: "Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service."

    })

},
realContent: {

    type: new mongoose.Schema({

        title: {

            type: String,

            default: "REAL EXPERIENCES. HONEST WORDS."

        },

        subtitle: {

            type: String,

            default: "STORIES OF CELEBRATION & SATISFACTION"

        },

        description: {

            type: String,

            default: "From weddings to corporate events, our clients share their genuine experiences of hosting grand occasions with us at our luxury wedding banquet halls in Jaipur. Whether it's a dream wedding reception venue or a stylish luxury banquet destination, their stories speak volumes about our commitment to excellence."

        },

        ratingTitle: {

            type: String,

            default: "AWESOME!"

        },

        trustpilotTitle: {

            type: String,

            default: "EXCELLENT"

        }

    }, { _id: false }),

    default: () => ({

        title: "REAL EXPERIENCES. HONEST WORDS.",

        subtitle: "STORIES OF CELEBRATION & SATISFACTION",

        description: "From weddings to corporate events, our clients share their genuine experiences of hosting grand occasions with us at our luxury wedding banquet halls in Jaipur. Whether it's a dream wedding reception venue or a stylish luxury banquet destination, their stories speak volumes about our commitment to excellence.",

        ratingTitle: "AWESOME!",

        trustpilotTitle: "EXCELLENT"

    })

},
awardsSection: {

    type: [awardsSchema],

    default: () =>

        Array.from({ length: 4 }, () => ({

            image: "",

            alt: ""

        }))

},
reviewSection: {

    type: [reviewSchema],

    default: () =>

        Array.from({ length: 6 }, () => ({

            author: "",

            text: ""

        }))

},
magicSection: {

    type: magicSchema,

    default: () => ({

        video: ""

    })

},
atlantiisSection: {

    type: new mongoose.Schema({

        title: {

            type: String,

            default: "ATLANTIIS"

        },

        subtitle: {

            type: String,

            default: "ELEVATE YOUR BUSINESS EVENTS"

        },

        description: {

            type: String,

            default: "Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting."

        },

        image: {

            type: String,

            default: ""

        }

    }, { _id: false }),

    default: () => ({

        title: "ATLANTIIS",

        subtitle: "ELEVATE YOUR BUSINESS EVENTS",

        description: "Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with projector systems, soundproofing, and customized layouts, we redefine corporate hosting.",

        image: ""

    })

},

celebrationSection: {

    type: new mongoose.Schema({

        title1: {

            type: String,

            default: "Jaipur's Premier Wedding Venue"

        },

        subtitle1: {

            type: String,

            default: "Experience grandeur like never before. Atlantiis Jaipur is a luxury banquet hall in Jaipur crafted for unforgettable weddings, corporate events, and majestic celebrations."

        },

        title2: {

            type: String,

            default: "PERFECTLY CRAFTED VENUES FOR EVERY OCCASION"

        },

        subtitle2: {

            type: String,

            default: "From dream weddings to milestone parties and corporate galas, Our banquet hall adapts to your event."

        }

    }, { _id: false }),

    default: () => ({

        title1: "Jaipur's Premier Wedding Venue",

        subtitle1: "Experience grandeur like never before. Atlantiis Jaipur is a luxury banquet hall in Jaipur crafted for unforgettable weddings, corporate events, and majestic celebrations.",

        title2: "PERFECTLY CRAFTED VENUES FOR EVERY OCCASION",

        subtitle2: "From dream weddings to milestone parties and corporate galas, Our banquet hall adapts to your event."

    })

},
}, {

    timestamps: true

});

export default mongoose.model("Home", homeSchema);