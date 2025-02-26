import React from "react";
import { Container, Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import { FaCheckCircle, FaUpload } from "react-icons/fa";
import { ClockInModal } from "./Dashboard";

const TaskDetails = () => {
  return (
    <div className="task-detail-section mt-4 mb-4">
      <Container fluid>
        <div className="d-flex justify-content-between">
        <h4 className="fw-bold">Task # EMA-50</h4>
        <Button variant="primary"> </Button>
        </div>
        <p>
          <strong>Alice:</strong> 'allow me.'
        </p>
        <Row>
          {/* Task Details Left Column */}
          <Col lg={8} md={12}>
            <Card className="p-4 shadow-sm">
              <Button
                variant="primary"
                className="mb-3 "
                style={{ width: "180px" }}
              >
                <FaCheckCircle /> Mark As Complete
              </Button>
              <hr />
              <Row>
                <Col md={6}>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Project:&nbsp;</strong> Email marketing and
                    newsletter service
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Priority:&nbsp;</strong>
                    <span className="text-success">Low</span>
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Assigned To:&nbsp;</strong> Mr. Bertram Roberta Sr.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Milestones:&nbsp;</strong> --
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Label:&nbsp;</strong> --
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Task category:&nbsp;</strong> --
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Short Code:&nbsp;</strong> EMA-50
                  </p>
                  <p>
                    <strong>Description:&nbsp;</strong> Heads below! (a loud
                    crash)...
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Task Status Right Column */}
          <Col lg={4} md={12}>
            <Card className="p-4 shadow-sm">
              <h6 className="fw-bold text-warning">To Do</h6>
              <p>
                <strong>Created On: </strong> 29-01-2025 10:56 am
              </p>
              <p>
                <strong>Start Date: </strong> 01-01-2025
              </p>
              <p>
                <strong>Due Date: </strong> 08-01-2025
              </p>
              <p>
                <strong>Hours Logged: </strong> 4h
              </p>
            </Card>
          </Col>
        </Row>

        {/* Tabs Section */}
        <Card className="mt-4 shadow-sm">
          <Tab.Container defaultActiveKey="files">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="files">Files</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="subtask">Sub Task</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">Comment</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">TimeSheet </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">Notes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">History</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="p-3 mb-3">
              <Tab.Pane eventKey="files">
                <Button>
                  <FaUpload /> Upload File
                </Button>
                <p className="mt-3 text-muted">- No file uploaded. -</p>
              </Tab.Pane>
              <Tab.Pane eventKey="subtask">No Subtasks Added</Tab.Pane>
              <Tab.Pane eventKey="comment">No Comments Yet</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>

          
      </Container>
    </div>
  );
};

export default TaskDetails;
