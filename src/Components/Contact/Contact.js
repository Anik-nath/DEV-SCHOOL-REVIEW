import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="responsive-height" >
      <Container className="py-5">
        <h2 className="border-bottom border-dark d-inline-block mb-5">
          Contact Us
        </h2>
        <Row xs={1} sm={1} md={2} lg={2} className="g-5">
          <Col>
            <img className="img-fluid"
              src="https://image.freepik.com/free-vector/contact-us-concept-illustration_114360-4779.jpg"
              alt=""
            />
          </Col>
          <Col>
            <Form className="border py-5 px-3 shadow">
              <h5 className="lead">Send your message</h5>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Username"
              />
              <Form.Control className="mb-3" type="email" placeholder="Email" />
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="Password"
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control placeholder="Message" as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
