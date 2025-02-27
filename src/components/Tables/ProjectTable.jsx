import React, { useState } from "react";
import { Table, Dropdown, Modal, Button, Form, Pagination } from "react-bootstrap";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredProjects = projects.filter((project) =>
    (filters.status ? project.status === filters.status : true) &&
    (filters.priority ? project.priority === filters.priority : true)
  );

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <div>
      {/* Existing Filters and Table Code */}
      <Table responsive bordered hover style={{ marginTop: "38px" }}>
        <tbody>
          {paginatedProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.members}+</td>
              <td>{project.startDate}</td>
              <td>{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <span>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredProjects.length)} of {filteredProjects.length} entries
          </span>
        </div>
        <Pagination>
          <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
        </Pagination>
      </div>
    </div>
  );
};

export default ProjectTable;
