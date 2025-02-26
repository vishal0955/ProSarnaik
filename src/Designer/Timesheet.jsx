import React, { useState } from "react";
import { Table, Dropdown, Modal, Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import TableHeader from "../components/Tables/TableHeader";
import TimeSheetDetail from "../components/Admin/TimeSheetDetail";

const initialTasks = [
  {
    id: "T001",
    code: "PROJ-001",
    task: "Design UI for dashboard",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    totalHours: "8h",
  },
  {
    id: "T002",
    code: "PROJ-002",
    task: "Develop API endpoints",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    totalHours: "8h",
  },
  {
    id: "T003",
    code: "PROJ-003",
    task: "Write test cases",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    totalHours: "8h",
  },
];

const TimesheetTable = () => {
  const [tasks] = useState(initialTasks);
  const [assigneModal, setAssigneModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleViewClick = (task) => {
    setSelectedTask(task);
    setAssigneModal(true);
  };

  return (
    <div>
      <Table responsive bordered hover className="tabledown">
        <thead>
          <tr className="table-secondary">
            <th>Id</th>
            <th>Code</th>
            <th>Task</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.code}</td>
              <td>{task.task}</td>
              <td>{task.startTime}</td>
              <td>{task.endTime}</td>
              <td>{task.totalHours}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => handleViewClick(task)}>View</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Viewing Task Details */}
      <Modal show={assigneModal} onHide={() => setAssigneModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Time Log Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTask ? (
            <>
              {/* <p><strong>Task ID:</strong> {selectedTask.id}</p>
              <p><strong>Task Name:</strong> {selectedTask.task}</p>
              <p><strong>Project Code:</strong> {selectedTask.code}</p>
              <p><strong>Start Time:</strong> {selectedTask.startTime}</p>
              <p><strong>End Time:</strong> {selectedTask.endTime}</p>
              <p><strong>Total Hours:</strong> {selectedTask.totalHours}</p>
              <hr /> */}
              <TimeSheetDetail />
            </>
          ) : (
            <p>No task selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAssigneModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const DTimesheet = () => {
  return (
    <div>
      <TableHeader title="Timesheet" buttonText="Add Log" />
      <TimesheetTable />
    </div>
  );
};

export default DTimesheet;
