import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddLeadContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dealName: "",
    dealValue: 0,
    pipeline: "Sales Pipeline",
    dealStage: "Generated",
    closeDate: "2025-03-17",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4">
   
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="e.g. johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="leadSource">
              <Form.Label>Lead Source</Form.Label>
              <Form.Select>
                <option>--</option>
                <option>Website</option>
                <option>Referral</option>
                <option>Advertisement</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="leadOwner">
              <Form.Label>Lead Owner</Form.Label>
              <Form.Select>
                <option>Ambrose Jenkins</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Create Deal"
            defaultChecked
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="dealName">
              <Form.Label>Deal Name *</Form.Label>
              <Form.Control
                type="text"
                name="dealName"
                placeholder="e.g. John Doe"
                value={formData.dealName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="pipeline">
              <Form.Label>Pipeline *</Form.Label>
              <Form.Control type="text" value={formData.pipeline} disabled />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="dealValue">
              <Form.Label>Deal Value *</Form.Label>
              <Form.Control
                type="number"
                name="dealValue"
                value={formData.dealValue}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="closeDate">
              <Form.Label>Close Date *</Form.Label>
              <Form.Control
                type="date"
                name="closeDate"
                value={formData.closeDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="dealStage">
              <Form.Label>Deal Stages *</Form.Label>
              <Form.Control type="text" value={formData.dealStage} disabled />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dealCategory">
              <Form.Label>Deal Category</Form.Label>
              <Form.Select>
                <option>Best Case</option>
                <option>Worst Case</option>
                <option>Average</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-start gap-2">
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Save & Add More</Button>
          <Button variant="light">Cancel</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddLeadContact;
