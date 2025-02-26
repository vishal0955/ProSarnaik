import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const ContractForm = () => {
  return (
    <Container className="mt-4">
   
      <Form>
        
        <Row>
          <Col md={6} >
            <Form.Group controlId="contractNumber mt-4">
              <Form.Label>Contract Number *</Form.Label>
              <Form.Control type="text" placeholder="CONTF00" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="subject">
              <Form.Label>Subject *</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date *</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="contractValue">
              <Form.Label>Contract Value *</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="currency">
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>INR (₹)</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        
        <h5 className="mt-3">Client Details</h5>
        <Row>
          <Col md={6}>
            <Form.Group controlId="client">
              <Form.Label>Client *</Form.Label>
              <Form.Control type="text" placeholder="Client Name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="+1 9876543210" />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="New York, Jaipur, Dubai" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="California, Rajasthan" />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="90250" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="USA, India" />
            </Form.Group>
          </Col>
        </Row>
        
        <Button variant="primary" className="mt-3" type="submit">
          Save
        </Button>
        <Button variant="" className="mt-3 ml-2 me-2">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default ContractForm;
