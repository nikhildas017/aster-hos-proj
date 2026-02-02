import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tokens = await loginUser({ username, password });

      localStorage.setItem("access", tokens.access);
      localStorage.setItem("refresh", tokens.refresh);

      navigate("/home");
    } catch (err) {
      setError(err.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="page-background position-relative p-4">
        {/* Close button */}
        <span className="close" onClick={() => navigate(-1)}>×</span>

        <h2 className="text-center mb-3">Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form className="form" onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <br /><br />

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            style={{ width: "185px" }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;