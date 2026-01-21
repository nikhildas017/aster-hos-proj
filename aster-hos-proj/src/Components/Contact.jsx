import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/background.css";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 contact-bg">
      <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4">Contact Us</h3>
        <p><strong>Hospital Name:</strong> Aster Hospital</p>
        <p><strong>Address:</strong> 123 Health Street, Kochi, India</p>
        <p><strong>Phone:</strong> +91 1234 567 890</p>
        <p><strong>Email:</strong> contact@asterhospital.com</p>
        <p><strong>Working Hours:</strong> Mon-Fri 8:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default Contact;