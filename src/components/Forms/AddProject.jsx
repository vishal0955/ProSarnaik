import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";

const AddProject = () => {
  const [projectData, setProjectData] = useState({
    shortCode: "",
    projectName: "",
    startDate: "",
    deadline: "",
    category: "",
    department: "",
    client: "",
    summary: "",
    notes: "",
    ganttChart: false,
    taskBoard: true,
    approvalNeeded: false,
    members: ""
  });

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
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data Submitted:", projectData);
  };

  return (

    <Container fluid >
   
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Project Code</Form.Label>
              <Form.Control type="text" name="shortCode" value={projectData.shortCode} onChange={handleChange} placeholder="Project unique short code" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Project Name *</Form.Label>
              <Form.Control type="text" name="projectName" value={projectData.projectName} onChange={handleChange} placeholder="Write a project name" required />
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Start Date *</Form.Label>
              <Form.Control type="date" name="startDate" value={projectData.startDate} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Deadline *</Form.Label>
              <Form.Control type="date" name="deadline" value={projectData.deadline} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Project Category</Form.Label>
              <Form.Control type="text" name="category" value={projectData.category} onChange={handleChange} placeholder="Enter category" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" name="department" value={projectData.department} onChange={handleChange} placeholder="Select department" />
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Project Summary</Form.Label>
              <Form.Control as="textarea" rows={3} name="summary" value={projectData.summary} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} name="notes" value={projectData.notes} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="mb-3">
          {/* <Col md={4}>
            <Form.Group>
              <Form.Label>Public Gantt Chart</Form.Label>
              <div>
                <Form.Check inline label="Enable" type="radio" name="ganttChart" checked={projectData.ganttChart} onChange={() => setProjectData({...projectData, ganttChart: true})} />
                <Form.Check inline label="Disable" type="radio" name="ganttChart" checked={!projectData.ganttChart} onChange={() => setProjectData({...projectData, ganttChart: false})} />
              </div>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Public Task Board</Form.Label>
              <div>
                <Form.Check inline label="Enable" type="radio" name="taskBoard" checked={projectData.taskBoard} onChange={() => setProjectData({...projectData, taskBoard: true})} />
                <Form.Check inline label="Disable" type="radio" name="taskBoard" checked={!projectData.taskBoard} onChange={() => setProjectData({...projectData, taskBoard: false})} />
              </div>
            </Form.Group>
          </Col> */}
          <Col md={4}>
            <Form.Group>
              <Form.Label>Approval Required</Form.Label>
              <div>
                <Form.Check inline label="Enable" type="radio" name="approvalNeeded" checked={projectData.approvalNeeded} onChange={() => setProjectData({...projectData, approvalNeeded: true})} />
                <Form.Check inline label="Disable" type="radio" name="approvalNeeded" checked={!projectData.approvalNeeded} onChange={() => setProjectData({...projectData, approvalNeeded: false})} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        
        {/* <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Add Project Members *</Form.Label>
              <Form.Control type="text" name="members" value={projectData.members} onChange={handleChange} placeholder="Enter team members" required />
            </Form.Group>
          </Col>
        </Row> */}
        <Row className="mb-3">
  <Col md={12}>
    <Form.Group>
      <Form.Label>Add Project Members *</Form.Label>
      <Form.Select name="members" value={projectData.members} onChange={handleChange} required>
        <option value="">Select team members</option>
        {initialEmployees.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  </Col>
</Row>

        
        <Button type="submit" variant="primary">Save</Button>
        <Button variant="secondary" className="ms-2">Cancel</Button>
      </Form>
    </Container>

  );
};

export default AddProject;