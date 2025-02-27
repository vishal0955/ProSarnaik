import React, { useState } from "react";
import { Container, Table, Button, Dropdown, Form, Modal } from "react-bootstrap";
import { FaPlus, FaFileExport, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TaskForm from "../Forms/AddItem";
import TaskNewForm from "../Tables/TaskNewForm";

const TableTask = ({ tag }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(true);
  };

  const priorityColors = {
    High: { bg: "#dc3545", text: "white" },
    Medium: { bg: "#ffc107", text: "black" },
    Low: { bg: "#28a745", text: "white" }
  };

  const [tasks, setTasks] = useState([
    { code: "BOT-5", task: "March Hare. Visit.", priority: "High", startDate: "19-01-2025", dueDate: "27-01-2025", hours: "5h", assignedTo: "User1", status: "Doing" },
    { code: "BOT-4", task: "As soon as look at.", priority: "Low", startDate: "06-01-2025", dueDate: "13-01-2025", hours: "0s", assignedTo: "User2", status: "Completed" },
    { code: "BOT-2", task: "As she said these.", priority: "High", startDate: "10-01-2025", dueDate: "11-01-2025", hours: "0s", assignedTo: "User3", status: "Cancelled" },
    { code: "BOT-1", task: "White Rabbit; 'in.", priority: "Medium", startDate: "19-01-2025", dueDate: "21-01-2025", hours: "0s", assignedTo: "User3", status: "On Hold" },
    { code: "BOT-5", task: "March Hare. Visit.", priority: "High", startDate: "19-01-2025", dueDate: "27-01-2025", hours: "5h", assignedTo: "User1", status: "Doing" },
    { code: "BOT-4", task: "As soon as look at.", priority: "Low", startDate: "06-01-2025", dueDate: "13-01-2025", hours: "0s", assignedTo: "User2", status: "Completed" },
    { code: "BOT-2", task: "As she said these.", priority: "High", startDate: "10-01-2025", dueDate: "11-01-2025", hours: "0s", assignedTo: "User3", status: "Cancelled" },
    { code: "BOT-1", task: "White Rabbit; 'in.", priority: "Medium", startDate: "19-01-2025", dueDate: "21-01-2025", hours: "0s", assignedTo: "User3", status: "On Hold" }
  ]);

  if(tag === "History") {
    setTasks(filteredTasks);
  }
  // Filter tasks if tag is "History"
  const filteredTasks = tag === "History"
    ? tasks.filter(task => ["Completed", "Cancelled", "On Hold"].includes(task.status))
    : tasks;

  const handleTaskClick = () => {
    navigate(`/taskdetails`);
  };

  return (
    <div>
      <Container-fluid className="mt-4">
        <div className="d-flex justify-content-between mb-3">
          <Button variant="primary" onClick={handleClick}>
            <FaPlus className="me-2" /> Add Task
          </Button>
          <Button variant="light">
            <FaFileExport className="me-2" /> Export
          </Button>
        </div>

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Code</th>
              <th>Task</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Hours Logged</th>
              {/* <th>Assigned To</th> */}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={index}>
                <td onClick={handleTaskClick}>{task.code}</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: priorityColors[task.priority]?.bg,
                      color: priorityColors[task.priority]?.text
                    }}
                    onClick={handleTaskClick}
                  >
                    {task.priority}
                  </span>{" "}
                  {task.task}
                </td>
                <td>{task.startDate}</td>
                <td className="text-danger">{task.dueDate}</td>
                <td>{task.hours}</td>
                {/* <td>
                  <img
                    src={`https://i.pravatar.cc/40?img=${index + 1}`}
                    alt="User"
                    className="rounded-circle"
                  />
                </td> */}
                <td>
                  <Form.Select defaultValue={task.status}>
                    <option>Doing</option>
                    <option>Incomplete</option>
                    <option>To Do</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                    <option>On Hold</option>
                  </Form.Select>
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" size="sm">
                      <FaEllipsisV />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container-fluid>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <TaskNewForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableTask;
