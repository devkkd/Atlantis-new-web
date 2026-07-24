import express from "express";

import {

    getContact,

    updateContact,
     updateContactContent

} from "../controllers/contactController.js";

import {

    contactLandingUpload

} from "../middleware/upload.js";

const router = express.Router();

/* ===========================
   GET CONTACT
=========================== */

router.get(

    "/",

    getContact

);

/* ===========================
   UPDATE CONTACT
=========================== */

router.put(

    "/",

    contactLandingUpload,

    updateContact

);
router.put(
    "/content",
    updateContactContent
);

export default router;