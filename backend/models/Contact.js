import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    image: {

        type: String,

        default: ""

    }

}, {

    timestamps: true

});

export default mongoose.model("Contact", contactSchema);