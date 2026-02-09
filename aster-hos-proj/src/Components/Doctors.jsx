import { useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/doctors/")
      .then((res) => {
        const enhancedDoctors = res.data.map((doc) => ({
          ...doc,
          experience: getRandomExperience(),
          qualifications: getRandomQualification(),
          email: generateEmail(doc.doctor_name),
          availability: getRandomAvailability(),
        }));
        setDoctors(enhancedDoctors);
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Helper functions
  const getRandomExperience = () => Math.floor(Math.random() * 20) + 3; // 3-22 years
  const getRandomQualification = () => {
    const quals = [
      "MBBS",
      "MD",
      "MS",
      "DM",
      "MCh",
      "PhD",
      "Diploma in Cardiology",
      "Diploma in Surgery",
    ];
    return quals[Math.floor(Math.random() * quals.length)];
  };
  const generateEmail = (name) => {
    // Remove any 'Dr' or 'Dr.' prefix first
    let cleanName = name.replace(/^Dr\.?\s*/i, ""); 

    // Convert to lowercase and replace spaces with dots
    cleanName = cleanName.toLowerCase().replace(/\s+/g, ".");

    // Add email domain
    return `${cleanName}@medpro.net`;
  };
  const getRandomAvailability = () => {
    const days = ["Mon-Fri", "Tue-Sat", "Mon-Thu", "Wed-Sun"];
    const hours = ["9AM-5PM", "10AM-6PM", "8AM-4PM", "11AM-7PM"];
    return `${days[Math.floor(Math.random() * days.length)]}, ${
      hours[Math.floor(Math.random() * hours.length)]
    }`;
  };

  // Split doctors into groups of 3 for carousel
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const doctorGroups = chunkArray(doctors, 3);

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Meet Our Doctors</h1>

      <p className="text-center mb-5">
        At Aster Hospital, our highly qualified doctors are committed to providing
        personalized care. Explore our team and find the right specialist for you.
      </p>

      {doctors.length > 0 ? (
        <Carousel>
          {doctorGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((doc) => (
                  <Col md={4} key={doc.id}>
                    <Card className="mb-4 shadow-sm">
                      <Card.Img
                        variant="top"
                        src={`http://127.0.0.1:8000${doc.doctor_img}`}
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title>{doc.doctor_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {doc.dept_name}
                        </Card.Subtitle>
                        <Card.Text>
                          <strong>Experience:</strong> {doc.experience} years<br />
                          <strong>Qualifications:</strong> {doc.qualifications}<br />
                          <strong>Email:</strong> {doc.email}
                        </Card.Text>
                        <Card.Footer>
                          <small className="text-muted">
                            Available: {doc.availability}
                          </small>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No doctors available at the moment.</p>
      )}
    </Container>
  );
};
export default Doctors;