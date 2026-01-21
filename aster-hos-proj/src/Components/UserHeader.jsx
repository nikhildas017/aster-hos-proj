import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const UserHeader = ({ isAdminOrDoctor }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Aster Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="user-navbar-nav" />
        <Navbar.Collapse id="user-navbar-nav">
          <Nav className="ms-auto align-items-center">

            {/* Book Appointment */}
            <Button
              variant="danger"
              className="ms-3"
              href="/bookappointment"
            >
              Book Appointment
            </Button>

            {/* Contact */}
            <Nav.Link href="/contact" className="ms-3">
              Contact
            </Nav.Link>

            {/* Optional: Home / Patients for Admin or Doctor */}
            {isAdminOrDoctor && (
              <>
                <Nav.Link href="/home" className="ms-3">Home</Nav.Link>
                <Nav.Link href="/patients" className="ms-3">Patients</Nav.Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserHeader;