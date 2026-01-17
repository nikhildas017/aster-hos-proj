import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { loginUser } from "../api/auth";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ destructure values properly
  const { username, password } = login;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tokens = await loginUser({ username, password });

      // ✅ store tokens (adjust keys if backend differs)
      localStorage.setItem("access", tokens.access);
      localStorage.setItem("refresh", tokens.refresh);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-background">
      <h1 style={{color:"black",fontSize:"50px"}} className="login">LOGIN PAGE</h1><br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="loginform">
        {/* <label>Username:</label> */}
        <input
          name="username"
          value={username}
          placeholder="Your username"
          onChange={handleChange}
        />
        <br /><br />

        {/* <label>Password:</label> */}
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={handleChange}
        />
        <br /><br />

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
