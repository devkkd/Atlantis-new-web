import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Gallery from "./pages/Gallery";
import Venue from "./pages/Venue";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import BlogLanding from "./pages/BlogLanding";
import ContactFormCMS from "./pages/ContactFormCMS";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function AdminApp() {

    return (

        <Routes>

            {/* Login */}

            <Route path="/" element={<Login />} />

            {/* Protected Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/messages"
                element={
                    <ProtectedRoute>
                        <Messages />
                    </ProtectedRoute>
                }
            />
            <Route
    path="/gallery"
    element={
        <ProtectedRoute>
            <Gallery />
        </ProtectedRoute>
    }
/>
            <Route
                path="/venue"
                element={
                    <ProtectedRoute>
                        <Venue />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/services"
                element={
                    <ProtectedRoute>
                        <Services />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/contact"
                element={
                    <ProtectedRoute>
                        <Contact />
                    </ProtectedRoute>
                }
            />
            <Route
    path="/contact-form"
    element={
        <ProtectedRoute>
            <ContactFormCMS />
        </ProtectedRoute>
    }
/>
            <Route
    path="/header"
    element={
        <ProtectedRoute>
            <Header />
        </ProtectedRoute>
    }
/>
<Route
    path="/footer"
    element={
        <ProtectedRoute>
            <Footer />
        </ProtectedRoute>
    }
/>
<Route
    path="/blog-landing"
    element={
        <ProtectedRoute>
            <BlogLanding />
        </ProtectedRoute>
    }
/>
            {/* Default */}

            <Route
                path="*"
                element={<Navigate to="/admin" replace />}
            />

        </Routes>

    );

}