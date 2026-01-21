import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const GuestHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Aster Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="guest-navbar-nav" />
        <Navbar.Collapse id="guest-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Login Button */}
            <Button
              variant="outline-light"
              className="ms-3"
              href="/login"
            >
              Login
            </Button>

            {/* Sign Up Button */}
            <Button
              variant="primary"
              className="ms-2"
              href="/register"
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestHeader;