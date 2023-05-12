import React, { useState } from "react";
import {
  Form, FormGroup, Label, Input, Button, Row,Col
} from "reactstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Row>
            <Col md= {6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md= {6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col md= {6}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
            </FormGroup>
          </Col>

          <Col md= {6}>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Row>

        <Row>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="subscribe"
                id="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
              />{" "}
              Subscribe to our newsletter
            </Label>
          </FormGroup>
        </Row>

        <Row className="d-flex justify-content-center">
        <Button color="primary" type="submit">
              Submit
            </Button>
        </Row>
            
            
       </Form>
    </>
  );
};

export default ContactForm;
