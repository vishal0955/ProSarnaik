import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function AddEmployee() {
  const initialEmployees = [
    {
      employeeId: "E001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Project Manager",
      reportingTo: "Jane Smith",
      status: "Active",
    },
    {
      employeeId: "E002",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Designer",
      reportingTo: "Mark Wilson",
      status: "Inactive",
    },
  ];
  return (
    <Container className="mt-4">
      
      <Card className="p-4 shadow-sm">
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Employee ID" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control type="text" placeholder="e.g. John Doe" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="e.g. john@example.com"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="••••••••" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control as="select">
         
                  <option>Manager</option>
                  <option>Production</option>
                  <option>Designer</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select">
               
                  <option>Management</option>
                  <option>Production</option>
                  <option>Designer</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select">
                  <option>Albania</option>
                  <option>USA</option>
                  <option>India</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="tel" placeholder="+123 456 7890" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>User Role</Form.Label>
                <Form.Control as="select">
                  <option>Employee</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          {/* Other Details */}
          <h4>Other Details</h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Login Allowed?</Form.Label>
                <div>
                  <Form.Check inline label="Yes" name="login" type="radio" />
                  <Form.Check inline label="No" name="login" type="radio" />
                </div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Receive Email Notifications?</Form.Label>
                <div>
                  <Form.Check inline label="Yes" name="email" type="radio" />
                  <Form.Check inline label="No" name="email" type="radio" />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Skills</Form.Label>
                <Form.Control type="text" placeholder="e.g. ReactJS, Python" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Hourly Rate</Form.Label>
                <Form.Control type="number" placeholder="$" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Employment Type</Form.Label>
                <Form.Control as="select">
                  <option>--Select--</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Slack Member ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-start gap-2">
            <Button variant="primary">Save</Button>
            <Button variant="outline-primary" className="">
              Save & Add More
            </Button>

            <Button variant="outline-secondary">Cancel</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default AddEmployee;
