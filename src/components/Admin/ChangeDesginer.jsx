import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ChangeDesigner = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [task, setTask] = useState({
    title: "",
    category: "",
    project: "",
    startDate: "",
    dueDate: "",
    status: "To Do",
    assignedTo: [],
    description: "",
    priority: "Low",
    private: false,
    billable: true,
    repeat: false,
    timeEstimate: false,
    dependentTask: false,
    file: null,
  });


  const usersList = ["John Doe", "Alice Smith", "Bob Johnson"]; // Sample users

  const handleAddUser = () => {
    if (selectedUser && !task.assignedTo.includes(selectedUser)) {
      setTask({ ...task, assignedTo: [...task.assignedTo, selectedUser] });
      setSelectedUser(""); // Reset dropdown after adding
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTask({ ...task, [name]: checked });
  };

  return (
    <Container className="mt-4">
      <h4>Assigned To</h4>

      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Task Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={task.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Project</Form.Label>
            <Form.Control
              type="text"
              name="project"
              value={task.project}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={task.startDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <div className="d-flex">
              <Form.Control
                as="select"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">Select User</option>
                {usersList.map((user, index) => (
                  <option key={index} value={user}>
                    {user}
                  </option>
                ))}
              </Form.Control>
              <Button
                variant="primary"
                className="ms-2"
                onClick={handleAddUser}
              >
                Add
              </Button>
            </div>
          </Form.Group>

          <div className="mt-2">
            <strong>Assigned Users:</strong>
            <ul>
              {task.assignedTo.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            label="Make Private"
            name="private"
            checked={task.private}
            onChange={handleCheckboxChange}
          />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            label="Billable"
            name="billable"
            checked={task.billable}
            onChange={handleCheckboxChange}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Attach File</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setTask({ ...task, file: e.target.files[0] })}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button className="mt-3" variant="primary">
        Save
      </Button>
    </Container>
  );
};

export default ChangeDesigner;
