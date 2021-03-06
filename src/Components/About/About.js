import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
    <div className="responsive-height" >
      <Container className="py-5">
      <h2 className="border-bottom border-dark d-inline-block mb-5">About Us</h2>
        <Row xs={1} sm={1} md={2} lg={2} className="g-5">
          <Col style={{textAlign : "justify"}}>
            <div className="mt-5">
                <h2>I will stay with you until you pass your exam.</h2>
                <h6 className="text-primary py-3">Who else do you know who'll do that for you?</h6>
                <p className="lead">Service Centers are operated by and for school administrative units to provide support, improve educational services, increase student achievement, provide resources, and create efficiencies through a cooperative structure.</p>
                <Button variant="primary" type="submit">
                 See More
                </Button>
            </div>
          </Col>
          <Col>
            <img className="img-fluid" src="https://image.freepik.com/free-vector/tiny-hr-specialist-looking-recruits-job-flat-illustration_74855-15541.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default About;