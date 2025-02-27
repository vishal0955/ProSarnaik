import React, { useState } from "react";
import { Container, Table, Button, Dropdown, Form,Modal } from "react-bootstrap";
import { FaPlus, FaFileExport, FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import LogTimeForm from "./LogTimeForm";

const TimeLogTable = () => {


  const handleClick=()=>{
    console.log(" log time btn clicked");
    setShowModal(true);
   }
  const [showModal, setShowModal] = useState(false);
  const [logs, setLogs] = useState([
    {
      id: 2,
      code: "BOT",
      task: "March Hare. Visit.",
      employee: "Prof. Jared Eichmann",
      role: "Trainee",
      startTime: "29-01-2025 12:04 am",
      endTime: "29-01-2025 04:04 am",
      totalHours: "4h",
      earnings: "$324.00",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 1,
      code: "BOT",
      task: "March Hare. Visit.",
      employee: "Prof. Jared Eichmann",
      role: "Trainee",
      startTime: "31-01-2025 05:30 am",
      endTime: "31-01-2025 06:30 am",
      totalHours: "1h",
      earnings: "$81.00",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ]);

  return (
    <div>
    <Container className="mt-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleClick}>
          <FaPlus className="me-2"  /> Log Time
        </Button>
        <Button variant="light">
          <FaFileExport className="me-2" /> Export
        </Button>
      </div>

      {/* Filters */}
      <div className="d-flex gap-3  mb-3">
        <Form.Select>
          <option>All Employees</option>
        </Form.Select>
        <Form.Select>
          <option>All Status</option>
        </Form.Select>
        <Form.Select>
          <option>All Invoices</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Start typing to search" />
      </div>

      {/* Time Log Table */}
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Task</th>
            <th>Employee</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
            {/* <th>Earnings</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.id}</td>
              <td>{log.code}</td>
              <td>{log.task}</td>
              <td>
                <img
                  src={log.avatar}
                  alt="User"
                  className="rounded-circle me-2"
                  width="30"
                />
                {log.employee}
                <br />
                <small className="text-muted">{log.role}</small>
              </td>
              <td>{log.startTime}</td>
              <td>{log.endTime}</td>
              <td>
                {log.totalHours} <FaCheckCircle className="text-primary" />
              </td>
              {/* <td className="text-success fw-bold">{log.earnings}</td> */}
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
    </Container>
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            Log Time 
          </Modal.Header>
          <Modal.Body>
    <LogTimeForm />
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default TimeLogTable;
