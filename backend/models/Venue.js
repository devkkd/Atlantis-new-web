import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
  {
    /* ===========================
       VENUE LANDING
    =========================== */

    image: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: "OUR GRAND VENUE"
    },

    subtitle: {
      type: String,
      default: "A Royal Setting for Unforgettable Celebrations"
    },

    description: {
      type: String,
      default:
        "Step into a world of elegance and sophistication at Atlantiis Jaipur. A premier luxury banquet hall in Jaipur. Designed to host weddings, receptions, corporate events and social gatherings, our versatile spaces blend modern comfort with regal charm. From the opulent banquet hall to the beautifully landscaped outdoor areas, every corner is crafted to elevate your event experience."
    },

    /* ===========================
       FLOOR PLAN
    =========================== */

    floorPlan: {
      image: {
        type: String,
        default: ""
      },

      title: {
        type: String,
        default: "FLOOR PLAN"
      },

      subtitle: {
        type: String,
        default: "VISUALIZE YOUR EVENT WITH CONFIDENCE"
      },

      description: {
        type: String,
        default:
          "Explore the detailed floor plan of Atlantiis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size."
      }
    },

    /* ===========================
       GRAND HALL
    =========================== */

    grandHall: {
      image: {
        type: String,
        default: ""
      },

      title: {
        type: String,
        default: "THE GRAND BANQUET HALL"
      },

      subtitle: {
        type: String,
        default: "WHERE ELEGANCE MEETS SCALE"
      },

      description: {
        type: String,
        default:
          "Our luxurious wedding banquet hall is designed for large scale wedding receptions, and gala events. With rich interiors, customizable lighting and state-of-the-art acoustics, this banquet hall has the capacity to host up to 1200 guests comfortably – making every moment majestic and memorable."
      },

      buttonText: {
        type: String,
        default: "SEE THE GRAND BANQUET HALL IMAGES →"
      },

      theatre: {
        type: String,
        default: "1000"
      },

      classroom: {
        type: String,
        default: "500"
      },

      cocktail: {
        type: String,
        default: "750"
      },

      sitDown: {
        type: String,
        default: "500"
      },

      totalArea: {
        type: String,
        default: "SQ. FT. - 13,120 | SQ. MTR. - 1,218.89"
      },

      length: {
        type: String,
        default: "FT. - 160 | MTR. - 48.77"
      },

      width: {
        type: String,
        default: "FT. - 82 | MTR. - 24.99"
      },

      height: {
        type: String,
        default: "FT. - 28 | MTR. - 8.53"
      }
    },


/* ===========================
   SMALL HALL
=========================== */

smallHall: {
  image: {
    type: String,
    default: ""
  },

  title: {
    type: String,
    default: "THE PRE-FUNCTION HALL / SMALL BANQUET"
  },

  subtitle: {
    type: String,
    default: "PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS"
  },

  description: {
    type: String,
    default:
      "Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities."
  },

  buttonText: {
    type: String,
    default: "SEE THE PRE-FUNCTION HALL / SMALL BANQUET IMAGES →"
  },

  theatre: {
    type: String,
    default: "450"
  },

  classroom: {
    type: String,
    default: "200"
  },

  cocktail: {
    type: String,
    default: "330"
  },

  sitDown: {
    type: String,
    default: "200"
  },

  totalArea: {
    type: String,
    default: "SQ. FT. - 6,032 | SQ. MTR. - 560.39"
  },

  length: {
    type: String,
    default: "FT. - 104 | MTR. - 31.70"
  },

  width: {
    type: String,
    default: "FT. - 58 | MTR. - 17.68"
  },

  height: {
    type: String,
    default: "FT. - 15 | MTR. - 4.57"
  }
},
/* ===========================
   LAWN
=========================== */

lawn: {
  image: {
    type: String,
    default: ""
  },

  title: {
    type: String,
    default: "THE LAWN"
  },

  subtitle: {
    type: String,
    default: "CELEBRATE UNDER THE OPEN SKY"
  },

  description: {
    type: String,
    default:
      "Our beautiful landscaped outdoor wedding lawn is perfect for vibrant day events or romantic evening ceremonies with flexible outdoor wedding decoration possibilities and ample space, it adds charm and freshness to weddings, cultural functions or casual stories."
  },

  buttonText: {
    type: String,
    default: "SEE THE LAWN IMAGES →"
  },

  theatre: {
    type: String,
    default: "620"
  },

  classroom: {
    type: String,
    default: "375"
  },

  cocktail: {
    type: String,
    default: ""
  },

  sitDown: {
    type: String,
    default: ""
  },

  totalArea: {
    type: String,
    default: "SQ. FT. - 12,825 | SQ. MTR. - 1,191.48"
  },

  length: {
    type: String,
    default: "FT. - 135 | MTR. - 41.15"
  },

  width: {
    type: String,
    default: "FT. - 95 | MTR. - 28.96"
  },

  height: {
    type: String,
    default: ""
  }
},
    
  },
  
  
  {
    timestamps: true
  }
);


const Venue = mongoose.model("Venue", venueSchema);

export default Venue;