import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./index.jsx";
import "./index.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <div>Blog not found.</div>;

  useEffect(() => {
    // Helper to upsert a meta tag
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

    // Standard description
    upsertMeta("meta[name='description']", { name: 'description', content: description });

    // Keywords
    const keywords = Array.isArray(blog.metaKeywords)
      ? blog.metaKeywords.join(', ')
      : (blog.metaKeywords || 'wedding, banquet hall, Jaipur, venue, events');
    upsertMeta("meta[name='keywords']", { name: 'keywords', content: keywords });
  }, [blog]);

  return (
    <section className="blog-detail-section">
      {/* <button className="blog-back-btn" onClick={() => navigate(-1)}>
        ← Back to Blogs
      </button> */}
      <h1 className="blog-detail-title">{blog.title}</h1>
      <div className="blog-detail-image-center">
        <img src={blog.image} alt={blog.title} className="blog-detail-img" />
      </div>
      <div className="blog-detail-date">{blog.date}</div>
      <div className="blog-detail-content">
        {blog.sections.map((section, idx) => {
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
                {section.caption && <div className="blog-section-caption">{section.caption}</div>}
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
