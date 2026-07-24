import express from "express";
import multer from "multer";

import {
    getFooter,
    updateFooterImage,
    updateFooterContent
} from "../controllers/footerController.js";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

/* ===========================
   GET FOOTER
=========================== */

router.get(
    "/",
    getFooter
);

/* ===========================
   UPDATE FOOTER LOGO
=========================== */

router.put(
    "/image",
    upload.single("image"),
    updateFooterImage
);

/* ===========================
   UPDATE FOOTER CONTENT
=========================== */

router.put(
    "/content",
    updateFooterContent
);

export default router;