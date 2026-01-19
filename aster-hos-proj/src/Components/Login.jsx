import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Decide if this is login or register
  const isLogin = location.pathname === "/login";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { username, password, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN
        const tokens = await loginUser({ username, password });

        localStorage.setItem("access", tokens.access);
        localStorage.setItem("refresh", tokens.refresh);

        navigate("/home");
      } else {
        // REGISTER (placeholder)
        console.log("Register user:", formData);
        navigate("/login");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="card">
        {/* Close button */}
        <span className="close" onClick={() => navigate(-1)}>×</span>

        <h2 className="text-center mb-3">
          {isLogin ? "Login" : "Register"}
        </h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <br /><br />
            </>
          )}

          <input
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <br /><br />

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="w-100"
          >
            {loading
              ? isLogin ? "Logging in..." : "Registering..."
              : isLogin ? "Login" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
