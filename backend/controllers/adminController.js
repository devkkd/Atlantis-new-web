import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {

    return jwt.sign(

        { id },

        process.env.JWT_SECRET,

        {
            expiresIn: "7d"
        }

    );

};

// =========================
// Admin Login
// =========================

export const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message: "Email and Password are required"

            });

        }

        const admin = await Admin.findOne({

            email

        });

        if (!admin) {

            return res.status(401).json({

                success: false,

                message: "Invalid Email"

            });

        }

        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {

            return res.status(401).json({

                success: false,

                message: "Invalid Password"

            });

        }

        const token = generateToken(admin._id);

        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            admin: {

                id: admin._id,

                name: admin.name,

                email: admin.email

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};