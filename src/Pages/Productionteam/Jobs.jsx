import React, { useState } from "react";
import { Table, Dropdown, Modal, Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import TableHeader from "../../components/Tables/TableHeader";
import { useNavigate } from "react-router-dom";
import TaskDetailsForm from "./EditTaskDetails";
import ChangeDesigner from "../../components/Admin/ChangeDesginer";

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
    flavour: "N/A",
    dateCreated: "2025-02-02",
    targetDate: "2025-02-15",
    packCode: "PK789",
    fgCode: "FG987",
    barcode: "123456789",
    instructions: "Follow branding guidelines.",
    priority: "Medium",
    status: "Pending",
    assignee: "Jane Smith",
  },
];

export const TaskTable = ({ filterStatus }) => {
  const navigate = useNavigate();

  const [assigneModal, setAssigneModal] = useState(false);
  const [jobs, setJobs] = useState(initialJobs);

  const handleJobClick = () => {
    navigate(`/taskdetails`);
  };

  const filteredJobs = jobs.filter((job) => job.status === filterStatus || !filterStatus);

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

  return (
    <div>
      <Table responsive bordered hover className="tabledown">
        <thead>
          <tr className="table-secondary">
            <th>Job ID</th>
            <th>Job Name</th>
            <th>Project</th>
            <th>Client</th>
            <th>Promotion</th>
            <th>Brand</th>
            <th>Assignee</th>
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
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td style={{ cursor: 'pointer' }} onClick={handleJobClick}>{job.jobId}</td>
              <td style={{ cursor: 'pointer' }} onClick={handleJobClick}>{job.jobName}</td>
              <td>{job.projectName} ({job.projectId})</td>
              <td>{job.client}</td>
              <td>{job.promotion}</td>
              <td>{job.brand} - {job.subBrand}</td>
              <td>{job.assignee}</td>
              <td>{job.dateCreated}</td>
              <td>{job.targetDate}</td>
              <td>{job.packCode}</td>
              <td>{job.fgCode}</td>
              <td>{job.barcode}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handlePriorityChange(index, eventKey)}>
                  <Dropdown.Toggle variant={priorityColors[job.priority]} id="dropdown-priority" style={{ width: '90px' }}>
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
                  <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status" style={{ width: '110px' }}>
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
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                    <Dropdown.Item href="#">View</Dropdown.Item>
                    <Dropdown.Item onClick={() => setAssigneModal(true)}>Assigned To</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Task Details Modal */}
      {/* <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskDetailsForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal> */}

      {/* Assign Designer Modal */}
      <Modal show={assigneModal} onHide={() => setAssigneModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Assign Designer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeDesigner />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAssigneModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Jobs = ({ filterStatus }) => {
  return (
    <div>
      <TableHeader title="All Tasks" buttonText="Add Task" />
      <TaskTable filterStatus={filterStatus} />
    </div>
  );
};

export default Jobs;
