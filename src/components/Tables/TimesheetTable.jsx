import React, { useState } from "react";
import { Table, Dropdown, Modal, Button, Pagination } from "react-bootstrap";
import { FaEllipsisV, FaEye } from "react-icons/fa";
import TableHeader from "./TableHeader";
import TimeSheetDetail from "../Admin/TimeSheetDetail";

const initialTasks = [
  { id: "T001", code: "PROJ-001", task: "Design UI for dashboard", employee: "John Doe", startTime: "09:00 AM", endTime: "05:00 PM", totalHours: "8h" },
  { id: "T002", code: "PROJ-002", task: "Develop API endpoints", employee: "Jane Smith", startTime: "10:00 AM", endTime: "06:00 PM", totalHours: "8h" },
  { id: "T003", code: "PROJ-003", task: "Write test cases", employee: "Mark Lee", startTime: "08:00 AM", endTime: "04:00 PM", totalHours: "8h" },
  { id: "T004", code: "PROJ-004", task: "Update documentation", employee: "Sara Khan", startTime: "09:00 AM", endTime: "05:00 PM", totalHours: "8h" },
  { id: "T005", code: "PROJ-005", task: "UI Testing", employee: "Alex Brown", startTime: "11:00 AM", endTime: "07:00 PM", totalHours: "8h" },
];

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
  const [tasks] = useState(initialTasks);
  const [assigneModal, setAssigneModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handleViewClick = (task) => {
    setSelectedTask(task);
    setAssigneModal(true);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          {currentTasks.map((task, index) => (
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

      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0">
          Showing {indexOfFirstTask + 1} to {Math.min(indexOfLastTask, tasks.length)} of {tasks.length} entries
        </p>
        <Pagination className="mb-0">
          <Pagination.Prev
            onClick={() => handlePaginationClick(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePaginationClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePaginationClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>

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
