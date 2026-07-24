import mongoose from "mongoose";

const headerSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      default: "",
    },

    home: {
      type: String,
      default: "HOME",
    },

    venue: {
      type: String,
      default: "VENUE",
    },

    services: {
      type: String,
      default: "SERVICES",
    },

    gallery: {
      type: String,
      default: "GALLERY",
    },

    contact: {
      type: String,
      default: "CONTACT US",
    },

    phone: {
      type: String,
      default: "+91 73000 56712",
    },

    buttonText: {
      type: String,
      default: "CALL US",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Header", headerSchema);