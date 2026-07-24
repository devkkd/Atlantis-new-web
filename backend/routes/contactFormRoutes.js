import express from "express";

import {

    getContactForm,

    updateContactForm

} from "../controllers/contactFormController.js";

const router = express.Router();

router.get("/", getContactForm);

router.put("/", updateContactForm);

export default router;