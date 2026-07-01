import express from "express";

import {

    getHome,

    updateHome,

    updateVenue,

    updateWedding,

    updateBusiness,

    updateReview,

    updateMagic,

    updateAtlantiis

} from "../controllers/homeController.js";

import {

    heroUpload,

    venueUpload,

    weddingUpload,

    businessUpload,

    magicUpload,

    atlantiisUpload,

    noneUpload

} from "../middleware/upload.js";

const router = express.Router();

/* ===========================
   GET HOME DATA
=========================== */

router.get(

    "/",

    getHome

);

/* ===========================
   HERO SLIDER
=========================== */

router.put(

    "/",

    heroUpload,

    updateHome

);

/* ===========================
   VENUE SECTION
=========================== */

router.put(

    "/venue",

    venueUpload,

    updateVenue

);

/* ===========================
   WEDDING SECTION
=========================== */

router.put(

    "/wedding",

    weddingUpload,

    updateWedding

);
/* ===========================
   BUSINESS SECTION
=========================== */

router.put(

    "/business",

    businessUpload,

    updateBusiness

);
/* ===========================
   REVIEW SECTION
=========================== */

router.put(

    "/review",

    noneUpload,

    updateReview

);
/* ===========================
   MAGIC VIDEO
=========================== */

router.put(

    "/magic",

    magicUpload,

    updateMagic

);
router.put(
    "/atlantiis",
    atlantiisUpload,
    updateAtlantiis
);

export default router;