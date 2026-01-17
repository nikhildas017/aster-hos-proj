import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Aster Hospital</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left / middle navigation links */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/patients">Patients</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* Login Button (White) */}
            <Button
              variant="outline-light"
              className="ms-3"
              href="/login"
            >
              Login
            </Button>

            {/* Sign Up Button (Blue) */}
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
export default Header;