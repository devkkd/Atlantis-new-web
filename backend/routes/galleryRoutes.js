import express from "express";

import {

    getGallery,

    updateContactLanding,

    updateGalleryLandingContent,

    updateGallerySectionsContent,

    updateGrandHall,

    updatePreFunction,

    updateDiningHall,

    updateDressingSuite,

    updatePropertyInsights

} from "../controllers/galleryController.js";

import {

    galleryUpload

} from "../middleware/upload.js";

const router = express.Router();

/* ===========================
   GET GALLERY
=========================== */

router.get(

    "/",

    getGallery

);
/* ===========================
   CONTACT LANDING
=========================== */

router.put(

    "/contactLanding",

    galleryUpload,

    updateContactLanding

);
/* ===========================
   GALLERY LANDING CONTENT
=========================== */

router.put(

    "/galleryLandingContent",

    updateGalleryLandingContent

);
/* ===========================
   GALLERY SECTIONS CONTENT
=========================== */

router.put(

    "/gallerySectionsContent",

    updateGallerySectionsContent

);
/* ===========================
   GRAND HALL
=========================== */

router.put(

    "/grandHall",

    galleryUpload,

    updateGrandHall

);


/* ===========================
   PRE FUNCTION
=========================== */

router.put(

    "/preFunction",

    galleryUpload,

    updatePreFunction

);

/* ===========================
   DINING HALL
=========================== */

router.put(

    "/diningHall",

    galleryUpload,

    updateDiningHall

);

/* ===========================
   DRESSING SUITE
=========================== */

router.put(

    "/dressingSuite",

    galleryUpload,

    updateDressingSuite

);

/* ===========================
   PROPERTY INSIGHTS
=========================== */

router.put(

    "/propertyInsights",

    galleryUpload,

    updatePropertyInsights

);

export default router;