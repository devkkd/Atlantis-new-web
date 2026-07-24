import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
{
    title: {
        type: String,
        default: "GET IN TOUCH WITH ATLANTIIS"
    },

    subtitle: {
        type: String,
        default: "WE'RE HERE TO MAKE YOUR EVENT EXTRAORDINARY"
    },

    description: {
        type: String,
        default:
            "Have questions or ready to start planning your celebration? Fill out the form below, and our dedicated event specialists will get back to you promptly to assist with bookings, tours, and customized packages."
    },

    firstNameLabel: {
        type: String,
        default: "FIRST NAME"
    },

    firstNamePlaceholder: {
        type: String,
        default: "ENTER YOUR FIRST NAME"
    },

    lastNameLabel: {
        type: String,
        default: "LAST NAME"
    },

    lastNamePlaceholder: {
        type: String,
        default: "ENTER YOUR LAST NAME"
    },

    mobileLabel: {
        type: String,
        default: "WHATSAPP NUMBER"
    },

    mobilePlaceholder: {
        type: String,
        default: "ENTER YOUR WHATSAPP NUMBER"
    },

    emailLabel: {
        type: String,
        default: "EMAIL ADDRESS"
    },

    emailPlaceholder: {
        type: String,
        default: "ENTER YOUR EMAIL ADDRESS"
    },

    eventDateLabel: {
        type: String,
        default: "EVENT DATE"
    },

    eventDatePlaceholder: {
        type: String,
        default: "Select your event date"
    },

    eventTypeLabel: {
        type: String,
        default: "EVENT TYPE"
    },

    queryLabel: {
        type: String,
        default: "QUERY"
    },

    queryPlaceholder: {
        type: String,
        default: "WRITE HERE...."
    },

    buttonText: {
        type: String,
        default: "SEND →"
    },

    eventTypes: [
        {
            type: String
        }
    ]

},
{
    timestamps: true
});

export default mongoose.model("ContactForm", contactFormSchema);