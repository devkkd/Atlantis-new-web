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

    businessSection: {

    type: [businessSchema],

    default: () =>

        Array.from({ length: 2 }, () => ({

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

        image: {

            type: String,

            default: ""

        }

    }, { _id: false }),

    default: () => ({

        image: ""

    })

},


}, {

    timestamps: true

});

export default mongoose.model("Home", homeSchema);