import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#e6f2ff", // light blue background
        minHeight: "100vh",
      }}
    >
      <Container className="mt-5">
        {/* Title */}
        <h1 className="text-center mb-5">Welcome to Aster Hospital</h1>

        {/* Intro Paragraphs */}
        <p className="text-center mb-4">
          At Aster Hospital, we are committed to providing exceptional healthcare services
          to every patient. Our team of skilled doctors, nurses, and specialists work tirelessly
          to ensure you receive the highest quality care in a compassionate and safe environment.
        </p>

        <p className="text-center mb-4">
          With state-of-the-art medical technology and modern facilities, we offer comprehensive
          treatments ranging from routine check-ups to advanced surgeries. Our patient-centric approach
          guarantees personalized treatment plans tailored to your needs.
        </p>

        <p className="text-center mb-5">
          We believe in continuous improvement, staying up-to-date with the latest medical advancements,
          and providing an experience that ensures comfort, trust, and transparency. Your health is our priority,
          and we are dedicated to helping you achieve the best outcomes possible.
        </p>

        {/* Button */}
        <Row className="justify-content-center mb-5">
          <Col md={4} className="d-grid">
            <Button as={Link} to="/doctors" variant="primary">
              View Our Doctors
            </Button>
          </Col>
        </Row>

        <hr className="my-5" />

        {/* Why Choose Us Section */}
        <h2 className="text-center mt-5 mb-4">Why Choose Us?</h2>
        <Row className="text-center">
          <Col md={4} className="mb-3">
            <h5>Expert Care</h5>
            <p>Our highly trained specialists provide personalized treatment for every patient.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Advanced Technology</h5>
            <p>We use cutting-edge medical equipment to ensure accurate diagnosis and effective treatment.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Patient Focused</h5>
            <p>We prioritize comfort, safety, and outcomes for every individual we care for.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;