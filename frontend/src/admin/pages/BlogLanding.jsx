import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./BlogLanding.css";

export default function BlogLanding() {

    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        date: "",
        image: null,
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        sections: []
    });

    // Blog Landing Banner State
    const [bannerImage, setBannerImage] = useState("");
    const [bannerFile, setBannerFile] = useState(null);
    const [savingBanner, setSavingBanner] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        fetchBlogs();
        fetchBlogLanding();
    }, []);

    // Fetch All Blogs
    const fetchBlogs = async () => {
        try {
            const { data } = await api.get("/blogs");
            if (data.success) setBlogs(data.blogs || []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    // Fetch Blog Landing Banner
    const fetchBlogLanding = async () => {
        try {
            const { data } = await api.get("/blog-landing");
            if (data.success) {
                setBannerImage(data.blogLanding?.image || "");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

   const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData(prev => ({
        ...prev,
        image: file
    }));

    setImagePreview(URL.createObjectURL(file));
};

    // Banner Image Handlers
    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBannerFile(file);
            setBannerImage(URL.createObjectURL(file));
        }
    };

    const saveBannerImage = async () => {
        if (!bannerFile) {
            alert("Please select a banner image");
            return;
        }

        try {
            setSavingBanner(true);
            const formData = new FormData();
            formData.append("image", bannerFile);

            const { data } = await api.put("/blog-landing/image", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (data.success) {
                alert("Blog Banner Updated Successfully");
                fetchBlogLanding();
                setBannerFile(null);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update banner");
        } finally {
            setSavingBanner(false);
        }
    };

    const addSection = () => {
        setFormData(prev => ({
            ...prev,
            sections: [...prev.sections, { type: "text", content: "" }]
        }));
    };

    const updateSection = (index, field, value) => {
        const newSections = [...formData.sections];
        newSections[index][field] = value;
        setFormData(prev => ({ ...prev, sections: newSections }));
    };

    const removeSection = (index) => {
        setFormData(prev => ({
            ...prev,
            sections: prev.sections.filter((_, i) => i !== index)
        }));
    };

   const resetForm = () => {
    setFormData({
        title: "",
        slug: "",
        date: "",
        image: null,
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        sections: []
    });

    setSelectedBlog(null);
    setIsEditing(false);
    setImagePreview("");
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("title", formData.title);
        data.append("slug", formData.slug);
        data.append("date", formData.date);
        data.append("metaTitle", formData.metaTitle);
        data.append("metaDescription", formData.metaDescription);
        data.append("metaKeywords", JSON.stringify(
            formData.metaKeywords.split(",").map(k => k.trim()).filter(Boolean)
        ));
        data.append("sections", JSON.stringify(formData.sections));

        if (formData.image) data.append("image", formData.image);

        try {
            if (isEditing && selectedBlog) {
                await api.put(`/blogs/${selectedBlog._id}`, data, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Blog Updated Successfully!");
            } else {
                await api.post("/blogs", data, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Blog Created Successfully!");
            }

            fetchBlogs();
            resetForm();
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setIsEditing(true);
        setFormData({
            title: blog.title,
            slug: blog.slug,
            date: blog.date,
            image: null,
            metaTitle: blog.metaTitle || "",
            metaDescription: blog.metaDescription || "",
            metaKeywords: blog.metaKeywords ? blog.metaKeywords.join(", ") : "",
            sections: blog.sections || []
        });
        setImagePreview(blog.image || "");
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;

        try {
            await api.delete(`/blogs/${id}`);
            alert("Blog Deleted Successfully");
            fetchBlogs();
        } catch (error) {
            alert("Failed to delete blog");
        }
    };

    return (
        <DashboardLayout>
            <div className="blog-landing-page">

                <h1>Blog Management CMS</h1>

                {/* Banner Image Section */}
                <div className="cms-card">
                    <h2>Blog Banner Image</h2>
                    <div className="hero-grid">
                        <div className="hero-item">
                            <div className="hero-preview">
                                {bannerImage ? (
                                    <img src={bannerImage} alt="Blog Banner" />
                                ) : (
                                    <div className="placeholder">No Banner Image</div>
                                )}
                            </div>
                            
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleBannerChange}
                            />
                            <button
                                className="save-btn"
                                onClick={saveBannerImage}
                                disabled={savingBanner}
                            >
                                {savingBanner ? "Saving..." : "Save Banner Image"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* All Blogs List */}
                <div className="cms-card">
                    <h2>All Blogs ({blogs.length})</h2>
                    <div className="blog-list">
                        {blogs.map(blog => (
                            <div key={blog._id} className="blog-item">
                                {blog.image && <img src={blog.image} alt={blog.title} width="80" />}
                                <div className="blog-info">
                                    <strong>{blog.title}</strong>
                                    <small>{blog.date}</small>
                                </div>
                                <div className="blog-actions">
                                    <button onClick={() => handleEdit(blog)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(blog._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Create / Edit Blog Form */}
                <div className="cms-card">
                    <h2>{isEditing ? "Edit Blog" : "Create New Blog"}</h2>

                    <form onSubmit={handleSubmit} className="blog-form">
                        <input
                            type="text"
                            name="title"
                            placeholder="Blog Title *"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            name="slug"
                            placeholder="Slug (url-friendly)"
                            value={formData.slug}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="date"
                            placeholder="Date (e.g. 25-Aug, 2025)"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
{imagePreview && (
    <div className="hero-preview" style={{ marginBottom: "15px" }}>
        <img
            src={imagePreview}
            alt="Preview"
            style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px"
            }}
        />
    </div>
)}

<input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
/>
                       

                        <input
                            type="text"
                            name="metaTitle"
                            placeholder="Meta Title"
                            value={formData.metaTitle}
                            onChange={handleInputChange}
                        />

                        <textarea
                            name="metaDescription"
                            placeholder="Meta Description"
                            value={formData.metaDescription}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="metaKeywords"
                            placeholder="Meta Keywords (comma separated)"
                            value={formData.metaKeywords}
                            onChange={handleInputChange}
                        />

                        <h3>Blog Sections</h3>
                        {formData.sections.map((section, index) => (
                            <div key={index} className="section-row">
                                <select 
                                    value={section.type} 
                                    onChange={(e) => updateSection(index, "type", e.target.value)}
                                >
                                    <option value="text">Text</option>
                                    <option value="heading">Heading</option>
                                    <option value="image">Image URL</option>
                                    <option value="divider">Divider</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Content"
                                    value={section.content || ""}
                                    onChange={(e) => updateSection(index, "content", e.target.value)}
                                />
                                <button type="button" onClick={() => removeSection(index)}>Remove</button>
                            </div>
                        ))}

                        <button type="button" onClick={addSection}>+ Add Section</button>

                        <div className="form-actions">
                            <button type="submit" disabled={loading}>
                                {loading ? "Saving..." : isEditing ? "Update Blog" : "Create Blog"}
                            </button>
                            {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}