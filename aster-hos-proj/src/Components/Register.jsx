import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Register() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    fullName: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    illness: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Registered:", patient);
    // Later: send to backend
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start min-vh-100 pt-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="page-background position-relative">
        <Card className="p-3" style={{ width: "26rem", marginTop: "-200px"}}>
          
          {/* Close Button */}
          <span
            className="close"
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "10px",
              right: "14px",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ×
          </span>

          <Card.Body>
            <Card.Title className="text-center mb-3">
              Patient Registration
            </Card.Title>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={patient.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={patient.age}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Select
                  name="gender"
                  value={patient.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={patient.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  placeholder="Address"
                  value={patient.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="illness"
                  placeholder="Illness / Symptoms"
                  value={patient.illness}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register Patient
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Register;