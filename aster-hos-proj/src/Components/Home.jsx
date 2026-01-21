import { useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors/")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Split doctors into groups of 3 per carousel item
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
      <h2 className="mb-4 text-center">Our Doctors</h2>
      {doctors.length > 0 ? (
        <Carousel>
          {doctorGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((doc) => (
                  <Col md={4} key={doc.id}>
                    <Card className="mb-3">
                      <Card.Img
                        variant="top"
                        src={`http://127.0.0.1:8000${doc.doctor_img}`}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title>{doc.doctor_name}</Card.Title>
                        <Card.Text>{doc.dept_name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No doctors available</p>
      )}
    </Container>
  );
};

export default Home;