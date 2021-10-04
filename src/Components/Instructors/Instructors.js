import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Instructors = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container className="py-5">
        <h2 className="border-bottom border-dark d-inline-block mb-5">
          Our Instructors
        </h2>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <div className="mt-5">
              <h2>We have good instructors for your best take care.</h2>
              <h6 className="text-primary py-3">
                Classes Taught by Real Creators{" "}
              </h6>
              <p className="lead">
                Instructors are responsible for
                providing accurate and timely information about their courses to
                prospective students, current students, and relevant members of
                the University community. Instructors must provide academic
                units and students with accurate course descriptions in a timely
                fashion.
              </p>
              <Button variant="primary" type="submit">
                See More
              </Button>
            </div>
          </Col>
          <Col>
            <img
              style={{ height: "400px" }}
              src="https://image.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Instructors;
