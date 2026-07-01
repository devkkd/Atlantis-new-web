import express from "express";

import {

    getVenue,

    updateVenue

} from "../controllers/venueController.js";

import {

    venueLandingUpload

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
   UPDATE VENUE
=========================== */

router.put(

    "/",

    venueLandingUpload,

    updateVenue

);

export default router;