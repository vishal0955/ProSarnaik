import React, { useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Table, Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { FaClock } from "react-icons/fa";
import { Attendance } from "../data/Attendance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Designer() {
  const [showClockIn, setShowClockIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [attendanceLog, setAttendanceLog] = useState(Attendance);

  const employeeId = "EMP1"; // Replace with dynamic employee ID based on login

  const handleShowClockIn = () => {
    if (clockInTime) {
      // Clock out
      const now = new Date();
      setClockOutTime(now);
      const diff = now - clockInTime;
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const totalTime = `${hours}h ${minutes}m`;

      const newLog = {
        employeeId,
        date: now.toLocaleDateString("en-GB"),
        clockInTime: clockInTime.toLocaleTimeString("en-GB"),
        clockOutTime: now.toLocaleTimeString("en-GB"),
        totalTime,
      };

      setAttendanceLog([...attendanceLog, newLog]);
      setClockInTime(null);
      setClockOutTime(null);
    } else {
      // Clock in
      setClockInTime(new Date());
    }
    setShowClockIn(false);
  };

  const handleCloseClockIn = () => setShowClockIn(false);

  const lineData = {
    labels: [
      "08-May",
      "09-May",
      "10-May",
      "11-May",
      "12-May",
      "13-May",
      "14-May",
    ],
    datasets: [
      {
        label: "Total Completed Task",
        data: [40, 60, 50, 70, 60, 90, 80],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#17a2b8",
      },
    ],
  };

  const barData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Hours Logged",
        data: [40, 80, 20, 50, 20, 60, 30],
        backgroundColor: "#36a2eb",
      },
    ],
  };

  const doughnutData = {
    labels: ["Ongoing", "Pending", "Complete"],
    datasets: [
      {
        data: [55, 22, 22],
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
      },
    ],
  };

  return (
    <div className="task-over-pro">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Dashboard</h5>
          <Button variant="primary" className="mt-2" onClick={() => setShowClockIn(true)}>
            <FaClock className="me-1" /> {clockInTime ? "Clock Out" : "Clock In"}
          </Button>
        </div>

        <Row className="gy-3 mb-4">
          {/* Employee Card */}
          <Col xs={12} sm={6} md={3}>
            <Card className="p-3 bg-light shadow-sm">
              <div className="d-flex flex-column p-1 flex-md-row align-items-center text-center text-md-start gap-3">
                <img
                  src="https://i.ibb.co/5JkFzc4/300.jpg"
                  alt="Employee"
                  className="rounded-circle"
                  width={70}
                  height={70}
                />
                <div>
                  <p className="mb-1 fw-bold">John Doe</p>
                  <p className="mb-0 text-muted">Employee Id: {employeeId}</p>
                </div>
              </div>
            </Card>
          </Col>

          {/* Task Overview Cards */}
          {[
            { title: "Total Task", count: 12, color: "primary" },
            { title: "Pending", count: 36, color: "warning" },
            { title: "Completed", count: 18, color: "success" },
          ].map((item, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card className={`text-center p-3 shadow-sm border-${item.color}`}>
                <h5 className="text-muted">{item.title}</h5>
                <h2 className={`text-${item.color}`}>{item.count}</h2>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Charts Row */}
        <Row>
          <Col md={6} className="mb-4">
            <Card className="p-3 shadow-sm">
              <h5 className="text-center">Tasks Overview</h5>
              <Line data={lineData} />
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="p-3 shadow-sm">
              <h5 className="text-center">Timesheet Logged Hours</h5>
              <Bar data={barData} />
            </Card>
          </Col>
        </Row>

        {/* Doughnut Chart & Table */}
        <Row>
          <Col md={6}>
            <Card className="p-3 mb-4 shadow-sm">
              <h5 className="text-center">Task Status</h5>
              <div
                className="d-flex justify-content-center"
                style={{ width: "100%", maxWidth: "500px", margin: "auto" }}
              >
                <Doughnut
                  data={doughnutData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: { font: { size: 14 } },
                      },
                    },
                  }}
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-3 mb-4 shadow-sm">
              <h5>Tasks List</h5>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        task: "Dashboard Cards",
                        date: "2025-09-01",
                        status: "Done",
                        project: "Newsletter Templates",
                        badge: "success",
                      },
                      {
                        task: "The Marketplace Strategy",
                        date: "2024-09-15",
                        status: "In Progress",
                        project: "Newsletter Templates",
                        badge: "warning",
                      },
                      {
                        task: "Design Test",
                        date: "2024-08-10",
                        status: "To Do",
                        project: "Payment Integration",
                        badge: "primary",
                      },
                      {
                        task: "Dashboard Cards",
                        date: "2025-09-01",
                        status: "Done",
                        project: "Newsletter Templates",
                        badge: "success",
                      },
                      {
                        task: "The Marketplace Strategy",
                        date: "2024-09-15",
                        status: "In Progress",
                        project: "Newsletter Templates",
                        badge: "warning",
                      },
                      {
                        task: "Design Test",
                        date: "2024-08-10",
                        status: "To Do",
                        project: "Payment Integration",
                        badge: "primary",
                      },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td>{item.task}</td>
                        <td>{item.date}</td>
                        <td>
                          <span className={`badge bg-${item.badge}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.project}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <ClockInModal
        show={showClockIn}
        handleClose={handleCloseClockIn}
        handleClockIn={handleShowClockIn}
        clockInTime={clockInTime}
      />
    </div>
  );
}

export default Designer;

export const ClockInModal = ({ show, handleClose, handleClockIn, clockInTime }) => {
  const [location, setLocation] = useState("Office");
  const [workingFrom, setWorkingFrom] = useState("Home");
  const currentTime = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{clockInTime ? "Clock Out" : "Clock In"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center mb-3">
          <FaClock className="me-2" />
          <span>{currentTime}</span>
          <Button variant="info" size="sm" className="ms-auto">
            General Shift
          </Button>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Office</option>
              <option>Remote</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Working From <span className="text-danger">*</span></Form.Label>
            <Form.Select value={workingFrom} onChange={(e) => setWorkingFrom(e.target.value)}>
              <option>Home</option>
              <option>Office</option>
              <option>Client Site</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleClockIn}>{clockInTime ? "Clock Out" : "Clock In"}</Button>
      </Modal.Footer>
    </Modal>
  );
};