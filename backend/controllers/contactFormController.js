import ContactForm from "../models/ContactForm.js";

/* ===========================
   GET CONTACT FORM CMS
=========================== */

export const getContactForm = async (req, res) => {

    try {

        let contactForm = await ContactForm.findOne();

        if (!contactForm) {

            contactForm = await ContactForm.create({

                eventTypes: [

                    "Wedding",

                    "Birthday",

                    "Anniversary",

                    "Corporate",

                    "Other"

                ]

            });

        }

        res.status(200).json({

            success: true,

            contactForm

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/* ===========================
   UPDATE CONTACT FORM CMS
=========================== */

export const updateContactForm = async (req, res) => {

    try {

        let contactForm = await ContactForm.findOne();

        if (!contactForm) {

            contactForm = await ContactForm.create({});

        }

        Object.assign(contactForm, req.body);

        await contactForm.save();

        res.status(200).json({

            success: true,

            message: "Contact Form Updated Successfully",

            contactForm

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};