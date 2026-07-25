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

/* ============================
   Database
============================ */

connectDB();

/* ============================
   CORS
============================ */

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  "https://www.atlantiisbanquet.com",
  "https://atlantiisbanquet.com",
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman, Render health checks etc.
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);

// Handle preflight requests
app.options("*", cors());

/* ============================
   Middlewares
============================ */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ============================
   Upload Folder
============================ */

const uploadsPath = path.join(__dirname, "uploads");

app.use("/uploads", express.static(uploadsPath));

/* ============================
   API Routes
============================ */

app.use("/api/home", homeRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/venue", venueRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/blog-landing", blogLandingRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact-form", contactFormRoutes);
app.use("/api/admin", adminRoutes);

/* ============================
   Test Route
============================ */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Atlantiis CMS Backend Running",
  });
});

/* ============================
   404
============================ */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
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
PORT: ${PORT}
====================================
`);
});
