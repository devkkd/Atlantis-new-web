import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

try {

    const exists = await Admin.findOne({
        email: "admin@atlantiis.com",
    });

    if (exists) {

        console.log("Admin already exists.");

        process.exit();

    }

    await Admin.create({

        name: "Admin",

        email: "admin@atlantiis.com",

        password: "admin123",

    });

    console.log("Admin Created Successfully");

    console.log("Email : admin@atlantiis.com");
    console.log("Password : admin123");

    process.exit();

}

catch (error) {

    console.log(error);

    process.exit(1);

}