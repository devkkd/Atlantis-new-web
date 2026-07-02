import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/homepage";
import VenuePage from "./pages/venuepage";
import GalleryPage from "./pages/gallerypage";
import ServicesPage from "./pages/servicespage";
import ContactPage from "./pages/contactpage";
import BlogPage from "./pages/blogpage";
import BlogDetail from "./components/blog/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import AdminApp from "./admin/App";
// import Footer from './components/footer'
import "./App.css";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    // ==============================
    // Disable Right Click (COMMENTED)
    // ==============================

    // const handleContextMenu = (e) => e.preventDefault();
    // document.addEventListener("contextmenu", handleContextMenu);

    // ==========================================
    // Disable F12, Ctrl+Shift+I/J/C, Ctrl+U
    // (COMMENTED)
    // ==========================================

    // const handleKeyDown = (e) => {
    //   if (
    //     e.key === "F12" ||
    //     (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    //     (e.ctrlKey && e.key === "U")
    //   ) {
    //     e.preventDefault();
    //   }
    // };
    // document.addEventListener("keydown", handleKeyDown);

    // ==============================
    // Scroll Button Logic
    // ==============================

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // document.removeEventListener("contextmenu", handleContextMenu);
      // document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <ScrollToTop />}

      <main className="main-content">
        <Routes>
          {/* Website */}

          <Route path="/" element={<HomePage />} />

          <Route path="/venue" element={<VenuePage />} />

          <Route path="/gallery" element={<GalleryPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/blog" element={<BlogPage />} />

          {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}

          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>

      {/* <Footer /> */}

      {!isAdminRoute && showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}

      {!isAdminRoute && (
        <a
          href="https://wa.me/917300056712"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      )}
    </div>
  );
}

export default App;