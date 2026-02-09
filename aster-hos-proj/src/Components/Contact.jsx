import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/background.css";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 contact-bg pt-5">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Contact Us</h3>

        {/* General Info */}
        <h5 className="mt-3">General Information</h5>
        <p><strong>Hospital Name:</strong> Aster Hospital</p>
        <p><strong>Address:</strong> 123 Health Street, Kochi, Kerala, India</p>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+911234567890">+91 1234 567 890</a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@asterhospital.com">
            contact@asterhospital.com
          </a>
        </p>

        <p><strong>Working Hours:</strong> Mon – Fri, 8:00 AM – 6:00 PM</p>

        <hr />

        {/* Emergency */}
        <h5 className="text-danger">
          <i className="bi bi-hospital"></i> Emergency Services
        </h5>
        <p>
          <strong>24/7 Emergency:</strong>{" "}
          <a href="tel:+919876543210">+91 9876 543 210</a>
        </p>

        <hr />

        {/* Departments with Icons */}
        <h5 className="mt-3">Key Departments</h5>
        <div className="row">
          <div className="col-md-6">
            <p><i className="bi bi-heart-pulse text-danger"></i> Cardiology</p>
            <p><i className="bi bi-brain text-primary"></i> Neurology</p>
            <p><i className="bi bi-bone text-secondary"></i> Orthopedics</p>
          </div>
          <div className="col-md-6">
            <p><i className="bi bi-bandaid text-success"></i> General Surgery</p>
            <p><i className="bi bi-activity text-warning"></i> Diagnostics</p>
            <p><i className="bi bi-emoji-smile text-info"></i> Pediatrics</p>
          </div>
        </div>

        <hr />

        {/* Locations + Map */}
        <h5 className="mt-3">Our Location</h5>
        <p>Kochi, Kerala</p>

        <div className="map-container mb-4">
          <iframe
            title="Aster Hospital Location"
            src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <hr />

        {/* Contact Form */}
        <h5 className="mt-3">Send Us a Message</h5>

        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        <p className="text-center mt-4 text-muted">
          We care for you, every step of the way.
        </p>
      </div>
    </div>
  );
};
export default Contact;