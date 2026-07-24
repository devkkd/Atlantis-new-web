import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./index.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/blogs/${slug}`
);
      const result = await response.json();

      if (result.success && result.blog) {
        setBlog(result.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  // Meta Tags Update
  useEffect(() => {
    if (!blog) return;

    const upsertMeta = (selector, attrs) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        Object.keys(attrs).forEach(k => {
          if (k !== 'content') tag.setAttribute(k, attrs[k]);
        });
        document.head.appendChild(tag);
      }
      if (attrs.content !== undefined) tag.setAttribute('content', attrs.content);
      return tag;
    };

    const descriptionFromContent = () => {
      const firstText = blog.sections?.find(s => s.type === 'text');
      const raw = typeof firstText?.content === 'string' ? firstText.content : '';
      return (blog.metaDescription || raw).replace(/\s+/g, ' ').trim().slice(0, 160);
    };

    const description = descriptionFromContent();

    // Update meta tags
    upsertMeta("meta[name='description']", { name: 'description', content: description });

    const keywords = Array.isArray(blog.metaKeywords)
      ? blog.metaKeywords.join(', ')
      : (blog.metaKeywords || 'wedding, banquet hall, Jaipur, venue, events');

    upsertMeta("meta[name='keywords']", { name: 'keywords', content: keywords });

  }, [blog]);

  if (loading) return <div className="blog-detail-container"><h2>Loading blog...</h2></div>;
  if (error) return <div className="blog-detail-container"><h2>{error}</h2></div>;
  if (!blog) return <div className="blog-detail-container"><h2>Blog Not Found</h2></div>;

  return (
    <section className="blog-detail-section">
      <Link to="/blog" className="blog-back-btn">
        ← Back to Blogs
      </Link>

      <h1 className="blog-detail-title">{blog.title}</h1>
      
      <div className="blog-detail-image-center">
        <img src={blog.image} alt={blog.title} className="blog-detail-img" />
      </div>

      <div className="blog-detail-date">{blog.date}</div>

      <div className="blog-detail-content">
        {blog.sections?.map((section, idx) => {
          if (section.type === "text") {
            return <p className="blog-section-text" key={idx}>{section.content}</p>;
          }
          if (section.type === "heading") {
            return (
              <div className="blog-section-heading" key={idx}>
                {section.icon && <span className="blog-section-icon">{section.icon}</span>}
                <span>{section.content}</span>
              </div>
            );
          }
          if (section.type === "divider") {
            return <hr className="blog-section-divider" key={idx} />;
          }
          if (section.type === "image") {
            return (
              <div className="blog-section-image" key={idx} style={{ textAlign: "center", margin: "2rem 0" }}>
                <img src={section.src} alt={section.alt || ""} className="blog-section-img" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default BlogDetail;