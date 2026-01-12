import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>Providing quality healthcare since 2026.</p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-white">Terms of Service</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contact</h5>
            <p>123 Medical Lane, Kochi</p>
          </Col>
        </Row>
        <hr className="bg-white" />
        <p className="mb-0">&copy; 2026 Aster Hospital Group</p>
      </Container>
    </footer>
  );
};

export default Footer;