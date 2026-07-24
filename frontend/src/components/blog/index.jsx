import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/blogs`
);
      const result = await response.json();

      if (result.success) {
        setBlogs(result.blogs || []);
      } else {
        setError("Failed to load blogs");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Something went wrong while loading blogs");
    } finally {
      setLoading(false);
    }
  };

  // Loading State
  if (loading) {
    return (
      <section className="blog-section">
        <div className="blog-header-row">
          <div className="blog-header-line">
            <span className="blog-line" />
            <h1 className="blog-title">Blogs</h1>
            <span className="blog-line-r" />
          </div>
        </div>
        <div className="blog-grid">
          <p style={{ textAlign: "center", padding: "60px 0", fontSize: "18px" }}>
            Loading blogs...
          </p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="blog-section">
        <div className="blog-header-row">
          <div className="blog-header-line">
            <span className="blog-line" />
            <h1 className="blog-title">Blogs</h1>
            <span className="blog-line-r" />
          </div>
        </div>
        <div className="blog-grid">
          <p style={{ color: "red", textAlign: "center", padding: "60px 0" }}>
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className="blog-header-row">
        <div className="blog-header-line">
          <span className="blog-line" />
          <h1 className="blog-title">Blogs</h1>
          <span className="blog-line-r" />
        </div>
      </div>

      <div className="blog-grid">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog._id || blog.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="blog-card" style={{ cursor: "pointer" }}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="blog-image" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-blog.jpg"; // Fallback image
                  }}
                />
                <div className="blog-date">
                  <span role="img" aria-label="calendar">📅</span> {blog.date}
                </div>
                <div className="blog-title-2">{blog.title}</div>
              </div>
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1", padding: "80px 0", fontSize: "18px" }}>
            No blogs available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;