import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const LogTimeForm = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalHours, setTotalHours] = useState(0);

  // Function to calculate total hours
  const calculateTotalHours = () => {
    if (!startDate || !startTime || !endDate || !endTime) return;
    const start = new Date(`${startDate} ${startTime}`);
    const end = new Date(`${endDate} ${endTime}`);
    const diff = (end - start) / (1000 * 60 * 60); // Convert ms to hours
    setTotalHours(diff > 0 ? diff.toFixed(1) : 0);
  };

  return (
    <Container className="mt-4">
     
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Project</Form.Label>
              <Form.Select>
                <option>Chatbots</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Task *</Form.Label>
              <Form.Select>
                <option>-- Select Task --</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Employee *</Form.Label>
              <Form.Select>
                <option>-- Select Employee --</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Start Date *</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  calculateTotalHours();
                }}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Start Time *</Form.Label>
              <Form.Control
                type="time"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                  calculateTotalHours();
                }}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>End Date *</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  calculateTotalHours();
                }}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>End Time *</Form.Label>
              <Form.Control
                type="time"
                value={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value);
                  calculateTotalHours();
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={8}>
            <Form.Group>
              <Form.Label>Memo *</Form.Label>
              <Form.Control type="text" placeholder="e.g. Working on new logo" />
            </Form.Group>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="mt-4 text-primary">
              Total Hours: <span>{totalHours} hrs</span>
            </h5>
          </Col>
        </Row>

        <div className="d-flex gap-2">
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </Form>
    </Container>
  );
};

export default LogTimeForm;
