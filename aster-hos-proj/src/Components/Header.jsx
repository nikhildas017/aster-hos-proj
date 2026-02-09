import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // FIXED: CHECK THE ACTUAL STORED TOKENS
  const accessToken = localStorage.getItem("access");
  const role = localStorage.getItem("role"); // "admin", "doctor", "user"

  const isLoggedIn = !!accessToken;
  const isAdminOrDoctor = role === "admin" || role === "doctor";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Aster Hospital
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">

            {/* Always visible */}
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {/* Logged-in users */}
            {isLoggedIn && (
              <Button
                as={Link}
                to="/bookappointment"
                variant="danger"
                className="ms-3"
                style={{ whiteSpace: "nowrap" }} // THIS PREVENTS WRAPPING
              >
                Book Appointment
              </Button>
            )}

            {/* Admin / Doctor only */}
            {isLoggedIn && isAdminOrDoctor && (
              <>
                <Nav.Link as={Link} to="/home" className="ms-3">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/patients" className="ms-3">
                  Patients
                </Nav.Link>
              </>
            )}

            {/* Guest */}
            {!isLoggedIn && (
              <>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-light"
                  className="ms-3"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="primary"
                  className="ms-2"
                >
                  Sign Up
                </Button>
              </>
            )}

            {/* Logout */}
            {isLoggedIn && (
              <Button
                variant="outline-light"
                className="ms-3"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;