import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const UserHeader = ({ isAdminOrDoctor }) => {

  // Logout function
  const handleLogout = () => {
    // Remove login-related data
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    // Redirect to Aster page (index route "/")
    window.location.href = "/";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Aster Hospital</Navbar.Brand>

        <Navbar.Toggle aria-controls="user-navbar-nav" />
        <Navbar.Collapse id="user-navbar-nav">
          <Nav className="ms-auto align-items-center">

            {/* Contact FIRST */}
            <Nav.Link href="/contact" className="ms-3">
              Contact
            </Nav.Link>

            {/* Book Appointment SECOND */}
            <Button
              variant="danger"
              className="ms-3"
              href="/bookappointment"
            >
              Book Appointment
            </Button>

            {/* Only for Admin or Doctor */}
            {isAdminOrDoctor && (
              <>
                <Nav.Link href="/home" className="ms-3">
                  Home
                </Nav.Link>
                <Nav.Link href="/patients" className="ms-3">
                  Patients
                </Nav.Link>
              </>
            )}

            {/* Logout Button */}
            <Button
              variant="outline-light"
              className="ms-3"
              onClick={handleLogout}
            >
              Logout
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserHeader;