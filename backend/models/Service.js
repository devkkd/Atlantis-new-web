import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    /* ===========================
       SERVICE LANDING
    =========================== */

    serviceLanding: {
      image: {
        type: String,
        default: "",
      },

      title: {
        type: String,
        default: "OUR SERVICES",
      },

      subtitle: {
        type: String,
        default: "EVERYTHING YOU NEED FOR A SEAMLESS CELEBRATION",
      },

      description: {
        type: String,
        default:
          "Atlantis Jaipur, a royal banquet hall where we offer a full suite of services to make your event effortlessly elegant. From venue styling and custom décor to gourmet catering and event coordination, our team handles every detail with care and precision. Whether it's a wedding, reception, corporate event, or private party, we ensure your occasion is executed flawlessly from start to finish.",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;