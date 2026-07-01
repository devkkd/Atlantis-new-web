import express from "express";

import {

    getService,

    updateService

} from "../controllers/serviceController.js";

import {

    serviceLandingUpload

} from "../middleware/upload.js";

const router = express.Router();

/* ===========================
   GET SERVICE
=========================== */

router.get(

    "/",

    getService

);

/* ===========================
   UPDATE SERVICE
=========================== */

router.put(

    "/",

    serviceLandingUpload,

    updateService

);

export default router;