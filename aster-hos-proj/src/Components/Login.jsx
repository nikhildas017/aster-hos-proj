import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
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
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", paddingTop: "90px" }}
    >
      <Card
        className="position-relative"
        style={{
          width: "320px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          backgroundColor: "#fff",
        }}
      >
        {/* Close Button */}
        <span
          className="close"
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "10px",
            right: "14px",
            cursor: "pointer",
            fontSize: "20px",
            color: "#666",
          }}
        >
          ×
        </span>

        <h4 className="text-center mb-3">Login</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control
              size="sm"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              size="sm"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {error && (
            <div className="text-danger text-center mb-2" style={{ fontSize: "0.85rem" }}>
              {error}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            size="sm"
            className="w-100"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
export default Login;