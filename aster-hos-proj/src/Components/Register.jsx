// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Register(){
//     return (
//         <div className="page-background">
//             <Card className="card" style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }
// export default Register;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Register() {
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
    // Later: send this data to backend
  };

  return (
    <div className="page-background d-flex justify-content-center align-items-center">
      <Card className="card p-3" style={{ width: "26rem" }}>
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
  );
}

export default Register;