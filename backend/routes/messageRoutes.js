import express from "express";

import {

    createMessage,

    getMessages,

    deleteMessage

} from "../controllers/messageController.js";

const router = express.Router();

/* ===========================
   CREATE MESSAGE
=========================== */

router.post(

    "/",

    createMessage

);

/* ===========================
   GET ALL MESSAGES
=========================== */

router.get(

    "/",

    getMessages

);

/* ===========================
   DELETE MESSAGE
=========================== */

router.delete(

    "/:id",

    deleteMessage

);

export default router;