import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const credentials = {
    admin: { email: "admin@example.com", password: "admin123", dashboard: "/dashboard", role: "admin" },
    designer: { email: "designer@example.com", password: "designer123", dashboard: "/designerdashboard", role: "designer" },
    "project manager": { email: "projectmanager@example.com", password: "projectmanager123", dashboard: "/projectmanagementdashboard", role: "projectmanager" },
    "production team": { email: "productionteam@example.com", password: "productionteam123", dashboard: "/productiondashboard", role: "productionteam" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetCredentials = (role) => {
    setFormData({ email: credentials[role].email, password: credentials[role].password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const role = Object.keys(credentials).find(
      (key) => credentials[key].email === formData.email && credentials[key].password === formData.password
    );

    if (role) {
      navigate(credentials[role].dashboard);
      localStorage.setItem("role", role);
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 bg-white text-dark" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}>
        {/* Gradient Header */}
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Welcome Back!</h3>
          <p className="text-muted">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mb-3" style={{ borderRadius: "8px" }}>
            Log In
          </button>
        </form>

        {/* Role-Based Credential Buttons */}
        <div className="text-center">
          <h6 className="mb-2 text-muted">Login as:</h6>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {Object.keys(credentials).map((role) => (
              <button
                key={role}
                className="btn btn-primary px-3"
                onClick={() => handleSetCredentials(role)}
                style={{ borderRadius: "8px", textTransform: "capitalize" }}>
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
