import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';

function Home(){
    // const[doctorData,setDoctorData]=useState()
    // useEffect

    const doctors = [
        { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiology", img: "https://via.placeholder.com" },
        { id: 2, name: "Dr. James Wilson", specialty: "Neurology", img: "https://via.placeholder.com" },
        { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrics", img: "https://via.placeholder.com" },
        // Add more doctors as needed
    ];

    // Grouping doctors into sets of 3 for desktop view
    const groupedDoctors = [];
    for (let i = 0; i < doctors.length; i += 3) {
        groupedDoctors.push(doctors.slice(i, i + 3));
    }
    
    return (
        <div className="page-background">
            <h1>Welcome to Home Page</h1>
            <Link to="/">Go Back</Link> 
            <Container className="mt-5 pt-5 mb-5 ms-0 ps-0 text-start" fluid="md">
                <h2 className="text-center mb-4">Our Medical Specialists</h2>
                <Carousel indicators={true} interval={5000} variant="dark">
                    {groupedDoctors.map((group, idx) => (
                    <Carousel.Item key={idx}>
                        <Row className="justify-content-center">
                        {group.map((doc) => (
                            <Col md={4} key={doc.id} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem', border: 'none', textAlign: 'center' }}>
                                <Card.Img variant="top" src={doc.img} className="rounded-circle mx-auto mt-3" style={{width: '120px', height: '120px'}} />
                                <Card.Body>
                                <Card.Title>{doc.name}</Card.Title>
                                <Card.Text className="text-muted">{doc.specialty}</Card.Text>
                                <button className="btn btn-outline-primary btn-sm">View Profile</button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                        </Row>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            {/* <Carousel>
                <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
}
export default Home;