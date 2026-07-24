import express from "express";

import {
    getService,
    updateServiceImage,
    updateServiceContent
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
   UPDATE SERVICE IMAGE
=========================== */

router.put(
    "/image",
    serviceLandingUpload,
    updateServiceImage
);

/* ===========================
   UPDATE SERVICE CONTENT
=========================== */

router.put(
    "/content",
    updateServiceContent
);

export default router;