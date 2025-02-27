import React, { useState } from "react";
import { Table, Dropdown, Modal, Button, Pagination } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChangeDesigner from "../../components/Admin/ChangeDesginer";
import TableHeader from "../../components/Tables/TableHeader";

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
    dateCreated: "2025-02-01",
    targetDate: "2025-02-10",
    packCode: "PK123",
    fgCode: "FG456",
    barcode: "789456123",
    priority: "High",
    status: "InProgress",
    assignee: "John Doe",
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
    dateCreated: "2025-02-02",
    targetDate: "2025-02-15",
    packCode: "PK789",
    fgCode: "FG987",
    barcode: "123456789",
    priority: "Medium",
    status: "Pending",
    assignee: "Jane Smith",
  },
];

const TaskTable = ({ filterStatus }) => {
  const navigate = useNavigate();
  const [assigneModal, setAssigneModal] = useState(false);
  const [jobs, setJobs] = useState(initialJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Fixed state declaration

  const filteredJobs = jobs.filter((job) => !filterStatus || job.status === filterStatus);

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

  // Pagination Logic
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Job Table */}
      <Table responsive bordered hover>
        <thead>
          <tr className="table-secondary">
            <th>Job ID</th>
            <th>Job Name</th>
            <th>Client</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.jobId}</td>
              <td>{job.jobName}</td>
              <td>{job.client}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                  <Dropdown.Toggle variant={priorityColors[job.priority]} id={`dropdown-priority-${index}`}>
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
                  <Dropdown.Toggle variant={statusColors[job.status]} id={`dropdown-status-${index}`}>
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
                  <Dropdown.Toggle variant="light" id={`dropdown-action-${index}`}>
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setAssigneModal(true)}>
                      Assign Designer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredJobs.length)} of {filteredJobs.length} entries
        </span>
        <Pagination>
          <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
        </Pagination>
      </div>

      {/* Assign Designer Modal */}
      <Modal show={assigneModal} onHide={() => setAssigneModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Designer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeDesigner />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAssigneModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Jobs = ({ filterStatus }) => {
  return (
    <div>
      <TableHeader title="All Items" buttonText="Add Item" />
      <TaskTable filterStatus={filterStatus} />
    </div>
  );
};

export default Jobs;
