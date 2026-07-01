import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({

    image: {

        type: String,

        default: ""

    }

}, {

    timestamps: true

});

export default mongoose.model("Service", serviceSchema);