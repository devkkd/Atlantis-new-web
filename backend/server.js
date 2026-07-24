import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";
import homeRoutes from "./routes/homeRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import venueRoutes from "./routes/venueRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import headerRoutes from "./routes/headerRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import blogLandingRoutes from "./routes/blogLandingRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactFormRoutes from "./routes/contactFormRoutes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// CORS Setup - Sabse Upar rakho
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

/* ============================
   Database
============================ */

connectDB();

/* ============================
   Middlewares
============================ */

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/* ============================
   Upload Folder
============================ */

const uploadsPath = path.join(__dirname, "uploads");
app.use(
    "/uploads",
    express.static(uploadsPath)
);
app.use("/api/home", homeRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/venue", venueRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/footer", footerRoutes);
app.use(

    "/api/blog-landing",

    blogLandingRoutes

);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact-form", contactFormRoutes);

/* ============================
   Test Route
============================ */

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Atlantiis CMS Backend Running"

    });

});

/* ============================
   Routes
============================ */

app.use("/api/admin", adminRoutes);

/* ============================
   404
============================ */

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });

});

/* ============================
   Server
============================ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`

====================================

Server Running

http://localhost:${PORT}

====================================

`);

});