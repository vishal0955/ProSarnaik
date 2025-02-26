import React from "react";
import { Table, Button, Dropdown, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskDashboard = () => {
  const tasks = [
    { id: 1, name: "Software Testing Automation", status: "Backlog", startDate: "14-02-2024", dueDate: "18-05-2024", priority: "Medium" },
    { id: 2, name: "Database Administration", status: "In Progress", startDate: "16-02-2024", dueDate: "18-05-2024", priority: "High" },
    { id: 3, name: "Network Security Analysis", status: "To Be Completed", startDate: "14-02-2024", dueDate: "18-05-2024", priority: "Medium" }
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="primary">+ New Task</Button>
        <Dropdown>
          <Dropdown.Toggle variant="success">Tasks Overview</Dropdown.Toggle>
        </Dropdown>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>
                <Form.Select defaultValue={task.status}>
                  <option>Backlog</option>
                  <option>In Progress</option>
                  <option>To Be Completed</option>
                  <option>Completed</option>
                </Form.Select>
              </td>
              <td>{task.startDate}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskDashboard;
