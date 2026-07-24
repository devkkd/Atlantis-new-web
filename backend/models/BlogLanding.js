import mongoose from "mongoose";

const blogLandingSchema = new mongoose.Schema(

    {

        image: {

            type: String,

            default: ""

        }

    },

    {

        timestamps: true

    }

);

export default mongoose.model("BlogLanding", blogLandingSchema);