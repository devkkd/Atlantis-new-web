import express from "express";
import multer from "multer";

import {
    getBlogLanding,
    updateBlogLandingImage
} from "../controllers/blogLandingController.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({

    storage

});

/* ===========================
   GET BLOG LANDING
=========================== */

router.get(

    "/",

    getBlogLanding

);

/* ===========================
   UPDATE BLOG LANDING IMAGE
=========================== */

router.put(

    "/image",

    upload.single("image"),

    updateBlogLandingImage

);

export default router;