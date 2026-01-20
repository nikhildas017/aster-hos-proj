import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctor data");
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
        console.log(doctors);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <div className="page-background">
      <h1>Welcome to Home Page</h1>
      <Link to="/">Go Back</Link>

      <Container className="mt-5 pt-5 mb-5 text-start">
        <h2 className="text-center mb-4">Our Medical Specialists</h2>

        <Carousel indicators interval={5000} variant="dark">
          <Carousel.Item>
            <Row className="justify-content-center">
              {doctors.map((doc) => (
                <Col
                  md={4}
                  key={doc.id}
                  className="d-flex justify-content-center"
                >
                  <Card
                    style={{
                      width: "18rem",
                      border: "none",
                      textAlign: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={doc.img}
                      className="rounded-circle mx-auto mt-3"
                      style={{ width: "120px", height: "120px" }}
                    />
                    <Card.Body>
                      <Card.Title>{doc.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {doc.specialty}
                      </Card.Text>
                      <button className="btn btn-outline-primary btn-sm">
                        View Profile
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Home;