import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({

    image: {

        type: String,

        default: ""

    }

}, {

    timestamps: true

});

export default mongoose.model("Venue", venueSchema);