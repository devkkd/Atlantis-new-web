import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../services/api";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await api.post("/admin/login", {
                email,
                password,
            });

            localStorage.setItem("adminToken", data.token);
            localStorage.setItem("admin", JSON.stringify(data.admin));

            navigate("/admin/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="login-left">
                <div className="overlay"></div>
                <div className="content">
                    <span>ATLANTIIS CMS</span>
                    <h1>Luxury Admin Panel</h1>
                    <p>
                        Manage your complete Atlantiis website, gallery, services,
                        venue, blogs, contact information and media from one place.
                    </p>
                </div>
            </div>

            <div className="login-right">
                <form onSubmit={handleLogin} className="login-card">
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue</p>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="password-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>

                    <button
                        className="login-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "LOGGING IN..." : "LOGIN"}
                    </button>
                </form>
            </div>
        </div>
    );
}