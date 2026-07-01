import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
contactLanding: {

    type: String,

    default: ""

},
    grandHall: {

        type: [String],

        default: () => Array(10).fill("")

    },

    preFunction: {

        type: [String],

        default: () => Array(10).fill("")

    },

    diningHall: {

        type: [String],

        default: () => Array(5).fill("")

    },

    dressingSuite: {

        type: [String],

        default: () => Array(10).fill("")

    },

    propertyInsights: {

        type: [String],

        default: () => Array(10).fill("")

    }

}, {

    timestamps: true

});

export default mongoose.model("Gallery", gallerySchema);