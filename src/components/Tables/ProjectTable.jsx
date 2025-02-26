
import React, { useState } from "react";
import { Table, Dropdown, Modal, Button, Form } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TaskForm from "../Forms/AddItem";

const priorityColors = {
  High: "danger",
  Medium: "warning",
  Low: "primary",
  Normal: "success",
};

const statusColors = {
  Pending: "warning",
  InProgress: "info",
  "On Hold": "danger",
  "To Start": "info",
  Completed: "success",
  Cancelled: "secondary",
};

export const initialProjects = [
  { id: "BOT", name: "Chatbots", members: 5, startDate: "2024-12-29", deadline: "2025-04-29", client: "Kailee Kuvalis", priority: "Normal", status: "Pending" },
  { id: "ALT", name: "Android Ticketing", members: 6, startDate: "2024-12-29", deadline: "2025-04-29", client: "Laila Gerlach", priority: "High", status: "On Hold" },
  { id: "OMF", name: "Opinion Mining", members: 7, startDate: "2024-12-29", deadline: "2025-04-29", client: "Halie Wilkinson", priority: "Medium", status: "To Start" },
  { id: "WEB", name: "Web Scraper", members: 3, startDate: "2024-11-15", deadline: "2025-03-20", client: "John Doe", priority: "High", status: "InProgress" },
  { id: "AIX", name: "AI Chat Assistant", members: 10, startDate: "2024-10-05", deadline: "2025-07-10", client: "Jane Smith", priority: "Low", status: "Completed" },
];

const ProjectTable = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [sortBy, setSortBy] = useState("");

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
    const sortedProjects = [...projects].sort((a, b) => {
      if (criteria === "nameAsc") return a.name.localeCompare(b.name);
      if (criteria === "nameDesc") return b.name.localeCompare(a.name);
      if (criteria === "dueEarliest") return new Date(a.deadline) - new Date(b.deadline);
      if (criteria === "dueLatest") return new Date(b.deadline) - new Date(a.deadline);
      return 0;
    });
    setProjects(sortedProjects);
  };

  const handlePriorityChange = (index, priority) => {
    const updatedProjects = [...projects];
    updatedProjects[index].priority = priority;
    setProjects(updatedProjects);
  };

  const handleStatusChange = (index, status) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = status;
    setProjects(updatedProjects);
  };

  const filteredProjects = projects.filter((project) =>
    (filters.status ? project.status === filters.status : true) &&
    (filters.priority ? project.priority === filters.priority : true)
  );

  return (
    <div>
      <div className="d-flex gap-3 mb-3 mt-3">
        <Form.Select onChange={(e) => handleFilterChange("status", e.target.value)}>
          <option value=""> Status</option>
          {Object.keys(statusColors).map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </Form.Select>

        <Form.Select onChange={(e) => handleFilterChange("priority", e.target.value)}>
          <option value="">Priority</option>
          {Object.keys(priorityColors).map((priority) => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </Form.Select>

        <Form.Select onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Sort by</option>
          <option value="nameAsc">By Name (A-Z)</option>
          <option value="nameDesc">By Name (Z-A)</option>
          <option value="dueEarliest">By Due Date (Earliest First)</option>
          <option value="dueLatest">By Due Date (Latest First)</option>
        </Form.Select>
      </div>
      
      <Table responsive bordered hover style={{marginTop:'38px'}}>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Members</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Client</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={index}>
              <td onClick={() => navigate("/projectdetails")}>{project.id}</td>
              <td onClick={() => navigate("/projectdetails")}>{project.name}</td>
              <td>{project.members}+</td>
              <td>{project.startDate}</td>
              <td>{project.deadline}</td>
              <td>{project.client}</td>
              <td >
                <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                  <Dropdown.Toggle variant={priorityColors[project.priority]} >{project.priority}</Dropdown.Toggle>
                
                  <Dropdown.Menu>
                    {Object.keys(priorityColors).map((priority) => (
                      <Dropdown.Item key={priority} eventKey={priority}>
                        {priority}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                  <Dropdown.Toggle variant={statusColors[project.status]}>
                    {project.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(statusColors).map((status) => (
                      <Dropdown.Item key={status} eventKey={status}>
                        {status}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light"><FaEllipsisV /></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Post To Production</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowModal(true)}>Add Task</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body><TaskForm /></Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectTable;



