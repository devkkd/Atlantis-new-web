import express from "express";

import {

    getContact,

    updateContact

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

export default router;