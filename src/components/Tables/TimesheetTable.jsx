import React, { useState } from "react";
import { Table, Dropdown, Modal, Button } from "react-bootstrap";
import { FaEllipsisV, FaEye } from "react-icons/fa";
import TableHeader from "./TableHeader";
import TimeSheetDetail from "../Admin/TimeSheetDetail";

const initialTasks = [
  {
    id: "T001",
    code: "PROJ-001",
    task: "Design UI for dashboard",
    employee: "John Doe",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    totalHours: "8h",
  },
  {
    id: "T002",
    code: "PROJ-002",
    task: "Develop API endpoints",
    employee: "Jane Smith",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    totalHours: "8h",
  },
  {
    id: "T003",
    code: "PROJ-003",
    task: "Write test cases",
    employee: "Mark Lee",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    totalHours: "8h",
  },
];

// Custom Dropdown Toggle Button
const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="p-0 border-0 bg-transparent"
    style={{ background: "none", border: "none" }}
  >
    <FaEllipsisV />
  </button>
));

const TimesheetTable = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [assigneModal, setAssigneModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // ✅ Added missing state

  // Function to handle View Click
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
            <th>Employee</th>
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
              <td>{task.employee}</td>
              <td>{task.startTime}</td>
              <td>{task.endTime}</td>
              <td>{task.totalHours}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle} />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => handleViewClick(task)}>
                      <FaEye /> View
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="fa-solid fa-circle-stop"></i> Stop
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ✅ Fixed Modal */}
      <Modal show={assigneModal} onHide={() => setAssigneModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Time Log Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTask ? (
            <TimeSheetDetail task={selectedTask} /> 
          ) : (
            <p>No task selected.</p>
          )}
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

const Timesheet = () => {
  return (
    <div>
      <TableHeader title="Timesheet" buttonText="Add Log" />
      <TimesheetTable />
    </div>
  );
};

export default Timesheet;
