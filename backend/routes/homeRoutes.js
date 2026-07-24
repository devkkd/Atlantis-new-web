import express from "express";

import {

    getHome,

    updateHome,

    updateVenue,

    updateWedding,

    updateBusiness,
    updateAwards,

    updateReview,

    updateMagic,

    updateAtlantiis,

   updateCelebration,
updateWeddingContent,
updateBusinessContent,
updateAwardsContent,
updateRealContent,

} from "../controllers/homeController.js";

import {
    heroUpload,
    venueUpload,
    weddingUpload,
    businessUpload,
    awardsUpload,
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
   AWARDS SECTION
=========================== */

router.put(

    "/awards",

    awardsUpload,

    updateAwards

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
router.put(

    "/celebration",

    noneUpload,

    updateCelebration

);
router.put(

    "/wedding-content",

    noneUpload,

    updateWeddingContent

);
router.put("/business-content", noneUpload, updateBusinessContent);
router.put(
    "/awards-content",
    noneUpload,
    updateAwardsContent
);
router.put(

    "/real-content",

    noneUpload,

    updateRealContent

);
export default router;