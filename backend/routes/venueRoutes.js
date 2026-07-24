import express from "express";

import {
    getVenue,
    updateVenue,
    updateFloorPlan,
    updateGrandHall,
    updateSmallHall,
    updateLawn
} from "../controllers/venueController.js";

import {
    venueLandingUpload,
    floorPlanUpload,
    grandHallUpload,
    smallHallUpload,
    lawnUpload
} from "../middleware/upload.js";

const router = express.Router();

/* ===========================
   GET VENUE
=========================== */

router.get(
    "/",
    getVenue
);

/* ===========================
   VENUE LANDING
=========================== */

router.put(
    "/",
    venueLandingUpload,
    updateVenue
);

/* ===========================
   FLOOR PLAN
=========================== */

router.put(
    "/floor-plan",
    floorPlanUpload,
    updateFloorPlan
);

/* ===========================
   GRAND HALL
=========================== */

router.put(
    "/grand-hall",
    grandHallUpload,
    updateGrandHall
);
/* ===========================
   SMALL HALL
=========================== */

router.put(
    "/small-hall",
    smallHallUpload,
    updateSmallHall
);
/* ===========================
   LAWN
=========================== */

router.put(
    "/lawn",
    lawnUpload,
    updateLawn
);

export default router;