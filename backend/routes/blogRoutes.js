import express from "express";
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";

import { blogFeaturedUpload } from "../middleware/upload.js";   // ← Important

const router = express.Router();

// ======================
// PUBLIC ROUTES
// ======================
router.get("/", getAllBlogs);           // Get all blogs
router.get("/:slug", getBlogBySlug);    // Get single blog by slug

// ======================
// ADMIN ROUTES (Protected)
// ======================
router.post("/", blogFeaturedUpload, createBlog);     // Create new blog
router.put("/:id", blogFeaturedUpload, updateBlog);   // Update blog
router.delete("/:id", deleteBlog);                    // Delete blog

export default router;