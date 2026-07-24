import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
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

    blog: {
      type: String,
      default: "BLOGS",
    },

    description: {
      type: String,
      default:
        "Situated near Sitapura and close to major city landmarks, Atlantiis Jaipur is easy to reach for guests across the city and beyond.",
    },

    address: {
      type: String,
      default:
        "Infront of Novotel Hotel, Near JECC, Tonk Rd, Sitapura Industrial Area, Govardhan Nagar, Jaipur, Rajasthan 302022",
    },

    phone: {
      type: String,
      default: "+91 73000 56712",
    },

    email: {
      type: String,
      default: "info@atlantiisbanquet.com",
    },

    copyright: {
      type: String,
      default: "© COPYRIGHT ATLANTIIS | ALL RIGHTS RESERVED | Crafted and Powered by",
    },

    poweredBy: {
      type: String,
      default: "Kontent Kraft Digital",
    },

    poweredByLink: {
      type: String,
      default: "https://www.kontentkraftdigital.com",
    },

    facebook: {
      type: String,
      default: "https://www.facebook.com/profile.php?id=61577228375903",
    },

    instagram: {
      type: String,
      default: "https://www.instagram.com/atlantiis_banquet/",
    },

    youtube: {
      type: String,
      default: "https://www.youtube.com/@AtlantisBanquet",
    },

    pinterest: {
      type: String,
      default: "https://in.pinterest.com/atlantiisbanquet/",
    },

    bottomText: {
      type: String,
      default: "ATLANTIIS-THE LUXURY BANQUET",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Footer", footerSchema);