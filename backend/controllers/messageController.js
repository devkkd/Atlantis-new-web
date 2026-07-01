import Message from "../models/Message.js";

/* ===========================
   CREATE MESSAGE
=========================== */

export const createMessage = async (req, res) => {

    try {

        const message = await Message.create(req.body);

        res.status(201).json({

            success: true,

            message: "Message Sent Successfully",

            data: message

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/* ===========================
   GET ALL MESSAGES
=========================== */

export const getMessages = async (req, res) => {

    try {

        const messages = await Message.find().sort({

            createdAt: -1

        });

        res.status(200).json({

            success: true,

            messages

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/* ===========================
   DELETE MESSAGE
=========================== */

export const deleteMessage = async (req, res) => {

    try {

        await Message.findByIdAndDelete(req.params.id);

        res.status(200).json({

            success: true,

            message: "Message Deleted"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};