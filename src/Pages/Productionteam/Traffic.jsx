import React, { useState } from "react";
import { Table, Dropdown, Form, Pagination } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

const initialJobs = [
  {
    jobId: "J001",
    jobName: "Banner Design",
    projectId: "P1001",
    projectName: "Summer Campaign",
    client: "ABC Corp",
    promotion: "Discount Offer",
    brand: "XYZ",
    subBrand: "Premium",
    flavour: "N/A",
    dateCreated: "2025-02-01",
    targetDate: "2025-02-10",
    packCode: "PK123",
    fgCode: "FG456",
    barcode: "789456123",
    instructions: "Use brand colors.",
    priority: "High",
    status: "InProgress",
  },
  {
    jobId: "J002",
    jobName: "Social Media Ad",
    projectId: "P1002",
    projectName: "Winter Campaign",
    client: "DEF Ltd",
    promotion: "Holiday Special",
    brand: "LMN",
    subBrand: "Budget",
    flavour: "N/A",
    dateCreated: "2025-02-02",
    targetDate: "2025-02-15",
    packCode: "PK789",
    fgCode: "FG987",
    barcode: "123456789",
    instructions: "Follow branding guidelines.",
    priority: "Medium",
    status: "Pending",
  },
];

const Traffic = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const handlePriorityChange = (index, priority) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].priority = priority;
    setJobs(updatedJobs);
  };

  const handleStatusChange = (index, status) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = status;
    setJobs(updatedJobs);
  };

  const handleJobClick = (jobId) => {
    navigate(`/taskdetails/${jobId}`);
  };

  // Pagination Logic
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid">
      {/* Filters Section */}
      <div className="d-flex gap-3 mb-3">
        <Form.Select>
          <option>Designer</option>
          <option>Ambrose Jenkins</option>
          <option>Jared Eichmann</option>
          <option>Alice</option>
        </Form.Select>
        <Form.Select>
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
        </Form.Select>
        <Form.Select>
          <option>All</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Start typing to search" />
      </div>

      {/* Jobs Table */}
      <Table responsive bordered hover>
        <thead>
          <tr className="table-secondary">
            <th>Job ID</th>
            <th>Job Name</th>
            <th>Project</th>
            <th>Client</th>
            <th>Promotion</th>
            <th>Brand</th>
            <th>Date Created</th>
            <th>Target Date</th>
            <th>Pack Code</th>
            <th>FG Code</th>
            <th>Barcode</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedJobs.map((job, index) => (
            <tr key={job.jobId}>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick(job.jobId)}>
                {job.jobId}
              </td>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick(job.jobId)}>
                {job.jobName}
              </td>
              <td>{job.projectName} ({job.projectId})</td>
              <td>{job.client}</td>
              <td>{job.promotion}</td>
              <td>{job.brand} - {job.subBrand}</td>
              <td>{job.dateCreated}</td>
              <td>{job.targetDate}</td>
              <td>{job.packCode}</td>
              <td>{job.fgCode}</td>
              <td>{job.barcode}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                  <Dropdown.Toggle variant={priorityColors[job.priority]} id="dropdown-priority">
                    {job.priority}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(priorityColors).map((priority) => (
                      <Dropdown.Item key={priority} eventKey={priority} className={`text-${priorityColors[priority]}`}>
                        {priority}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                  <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status">
                    {job.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(statusColors).map((status) => (
                      <Dropdown.Item key={status} eventKey={status} className={`text-${statusColors[status]}`}>
                        {status}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Post To Production</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, jobs.length)} of {jobs.length} entries
        </span>
        <Pagination>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default Traffic;
