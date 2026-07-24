import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "CONTACT US",
    },

    subtitle: {
      type: String,
      default: "ATLANTIIS - THE LUXURY BANQUET",
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
      default: "+91 98280 60003",
    },

    email: {
      type: String,
      default: "info@atlantiisbanquet.com",
    },

    facebook: {
      type: String,
      default:
        "https://www.facebook.com/profile.php?id=61577228375903",
    },

    instagram: {
      type: String,
      default:
        "https://www.instagram.com/atlantiis_banquet/",
    },

    youtube: {
      type: String,
      default:
        "https://www.youtube.com/@AtlantisBanquet",
    },

    pinterest: {
      type: String,
      default:
        "https://in.pinterest.com/atlantiisbanquet/",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);