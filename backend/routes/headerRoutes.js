import express from "express";
import multer from "multer";

import {
    getHeader,
    updateHeaderImage,
    updateHeaderContent
} from "../controllers/headerController.js";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

router.get("/", getHeader);

router.put(
    "/image",
    upload.single("image"),
    updateHeaderImage
);

router.put(
    "/content",
    updateHeaderContent
);

export default router;