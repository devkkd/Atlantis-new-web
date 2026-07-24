import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    /* ===========================
       GALLERY LANDING
    =========================== */

    galleryLanding: {
      image: {
        type: String,
        default: "",
      },

      title: {
        type: String,
        default: "GALLERY",
      },

      subtitle: {
        type: String,
        default: "MOMENTS THAT DEFINE CELEBRATIONS",
      },

      description: {
        type: String,
        default:
          "Browse our curated gallery showcasing the beauty, grandeur, and joy of events hosted at Atlantis Jaipur. From majestic wedding setups to elegant décor and lively gatherings, every image tells a story of unforgettable memories made here.",
      },
    },

    /* ===========================
       GALLERY SECTION CONTENT
    =========================== */

    galleryContent: {
      grandHall: {
        heading: {
          type: String,
          default: "THE GRAND HALL",
        },
        tagline: {
          type: String,
          default: "A Regal Setting for Timeless Celebrations.",
        },
      },

      preFunction: {
        heading: {
          type: String,
          default: "THE PRE-FUNCTION HALL",
        },
        tagline: {
          type: String,
          default: "Where Prestige Meets Professional Excellence.",
        },
      },

      diningHall: {
        heading: {
          type: String,
          default: "DINING HALL",
        },
        tagline: {
          type: String,
          default: "Intimate Affairs in a Class of Their Own.",
        },
      },

      dressingSuite: {
        heading: {
          type: String,
          default: "THE DRESSING SUITE",
        },
        tagline: {
          type: String,
          default: "Stay in Serenity, Rest in Royalty.",
        },
      },

      propertyInsights: {
        heading: {
          type: String,
          default: "PROPERTY INSIGHTS",
        },
        tagline: {
          type: String,
          default: "A Grand Welcome Begins with Seamless Arrival.",
        },
      },
    },

    /* ===========================
       GALLERY IMAGES
    =========================== */

    grandHall: {
      type: [String],
      default: () => Array(10).fill(""),
    },

    preFunction: {
      type: [String],
      default: () => Array(10).fill(""),
    },

    diningHall: {
      type: [String],
      default: () => Array(5).fill(""),
    },

    dressingSuite: {
      type: [String],
      default: () => Array(10).fill(""),
    },

    propertyInsights: {
      type: [String],
      default: () => Array(10).fill(""),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gallery", gallerySchema);