import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    mobileNumber: {
        type: String,
        required: true
    },

    emailAddress: {
        type: String,
        required: true
    },

    eventDate: {
        type: String,
        required: true
    },

    eventType: {
        type: String,
        required: true
    },

    query: {
        type: String,
        required: true
    }

}, {

    timestamps: true

});

export default mongoose.model("Message", messageSchema);