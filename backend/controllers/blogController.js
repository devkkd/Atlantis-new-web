import Blog from "../models/Blog.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET ALL BLOGS (Public)
=========================== */
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ===========================
   GET SINGLE BLOG BY SLUG
=========================== */
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ===========================
   CREATE BLOG
=========================== */
export const createBlog = async (req, res) => {
  try {
    const { title, slug, date, metaTitle, metaDescription, metaKeywords, sections } = req.body;

    let imageUrl = "";

    if (req.file) {
      const fileName = `blogs/${Date.now()}-${req.file.originalname.replace(/\s+/g, "-")}`;

      await r2.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      }));

      imageUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`;
    }

    const blog = await Blog.create({
      title,
      slug: slug || title.toLowerCase().trim().replace(/\s+/g, '-'),
      image: imageUrl,
      date: date || new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }),
      metaTitle,
      metaDescription,
      metaKeywords: metaKeywords ? JSON.parse(metaKeywords) : [],
      sections: sections ? JSON.parse(sections) : [],
    });

    res.status(201).json({ success: true, message: "Blog created successfully", blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ===========================
   UPDATE BLOG
=========================== */
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, date, metaTitle, metaDescription, metaKeywords, sections } = req.body;

    const updateData = {};
    if (title) updateData.title = title;
    if (slug) updateData.slug = slug;
    if (date) updateData.date = date;
    if (metaTitle) updateData.metaTitle = metaTitle;
    if (metaDescription) updateData.metaDescription = metaDescription;
    if (metaKeywords) updateData.metaKeywords = JSON.parse(metaKeywords);
    if (sections) updateData.sections = JSON.parse(sections);

    if (req.file) {
      const fileName = `blogs/${Date.now()}-${req.file.originalname.replace(/\s+/g, "-")}`;

      await r2.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      }));

      updateData.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;
    }

    const blog = await Blog.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ===========================
   DELETE BLOG
=========================== */
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};