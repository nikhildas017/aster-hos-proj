import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Aster Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="guest-navbar-nav" />
        <Navbar.Collapse id="guest-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Login Button */}
            <Button as={Link} to="/login" variant="outline-light" className="ms-3">
                Login
            </Button>
            {/* Sign Up Button */}
            <Button as={Link} to="/register" variant="primary">
                Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default GuestHeader;