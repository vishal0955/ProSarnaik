import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";
import { Doughnut } from "react-chartjs-2";
import { FaClock } from "react-icons/fa";
import { ClockInModal } from "../../Designer/Dashboard";
    

// Chart Data
const data = [
  { name: "Mon", Todo: 5, InProgress: 1, Review: 3, Done: 2 },
  { name: "Tue", Todo: 15, InProgress: 5, Review: 8, Done: 3 },
  { name: "Wed", Todo: 30, InProgress: 7, Review: 20, Done: 5 },
  { name: "Thu", Todo: 25, InProgress: 12, Review: 15, Done: 7 },
  { name: "Fri", Todo: 10, InProgress: 20, Review: 10, Done: 9 },
  { name: "Sat", Todo: 35, InProgress: 8, Review: 25, Done: 10 },
];

const proData = [
  { name: "Week 1", completion: 10 },
  { name: "Week 2", completion: 25 },
  { name: "Week 3", completion: 40 },
  { name: "Week 4", completion: 60 },
  { name: "Week 5", completion: 80 },
  { name: "Week 6", completion: 100 },
];

// Doughnut Chart Data
const doughnutData = {
  labels: ["Ongoing", "On Hold", "Finished"],
  datasets: [
    {
      data: [55, 22, 22],
      backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
    },
  ],
};

function AdminDashboard() {

  const [showClockIn, setShowClockIn] = useState(false);

  const handleShowClockIn = () => {
    setShowClockIn(true)
  };
  const handleCloseClockIn = () => setShowClockIn(false);

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Dashboard</h5>
        <Button variant="primary" className="mt-2" onClick={handleShowClockIn}>
                <FaClock className="me-1" /> {showClockIn ? "Clock Out" : "Clock In"}
              </Button>
              </div>

     

      {/* Cards Section */}
      <Row>
  {[
    { title: "Total Clients", icon: "fa-users", count: 11, color: "secondary" },
    { title: "Total Projects", icon: "fa-layer-group", count: 12, color: "primary" },
    { title: "Total Employees", icon: "fa-user", count: 15, color: "warning" },
    { title: "Due Invoices", icon: "fa-address-book", count: 10, color: "success" },
  ].map((item, index) => (
    <Col xs={12} sm={6} md={6} lg={3} key={index} className="mb-3">
      <Card className={`shadow-sm text-start p-3 border border-${item.color} bg-light d-flex flex-column`}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className={`mb-0 text-${item.color}`}>{item.title}</h5>
          <i className={`fa-solid ${item.icon} fs-4 text-${item.color}`}></i>
        </div>
        <p className={`mb-0 text-${item.color} fs-4 fw-bold`}>{item.count}</p>
      </Card>
    </Col>
  ))}
</Row>

      {/* Charts Section */}
      <Row className="mt-4">
        <Col xs={12} md={6} className="mb-3">
          <Card className="p-3 shadow-sm">
            <h5>Project Status</h5>
            <div style={{ width: "100%", height: "300px" }} className="d-flex justify-content-center">
              <Doughnut
                data={doughnutData}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card className="shadow-sm">
            <Card.Header className="bg-white border-0">
              <h5 className="m-0">📊 Project Overview</h5>
            </Card.Header>
            <Card.Body>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Todo" stroke="#0088FE" strokeWidth={2} />
                  <Line type="monotone" dataKey="InProgress" stroke="#00C49F" strokeWidth={2} />
                  <Line type="monotone" dataKey="Review" stroke="#FFBB28" strokeWidth={2} />
                  <Line type="monotone" dataKey="Done" stroke="#FF69B4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tasks Table & Progress Chart */}
      <Row className="mt-4">
        <Col xs={12} md={6} className="mb-3">
          <Card className="p-4 shadow-sm">
            <h5>Project</h5>
            <div className="table-responsive">
              <Table striped bordered hover className="overflow-auto">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Dashboard Cards", "2025-09-01", "Done", "John Sonh"],
                    ["The Marketplace Strategy", "2024-09-15", "In Progress", "jocksan"],
                    ["Design Test", "2024-08-10", "To Do", "sarnik"],
                    ["Dashboard Cards", "2025-09-01", "Done", "John Sonh"],
                    ["The Marketplace Strategy", "2024-09-15", "In Progress", "jocksan"],
                    ["Design Test", "2024-08-10", "To Do", "sarnik"],
                  ].map(([name, date, status, client], index) => (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{date}</td>
                      <td>
                        <span className={`badge bg-${status === "Done" ? "success" : status === "In Progress" ? "warning" : "primary"}`}>
                          {status}
                        </span>
                      </td>
                      <td>{client}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card className="p-4 shadow-sm">
            <h5>Project Completion Progress</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={proData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="completion" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

        <ClockInModal show={showClockIn} handleClose={handleCloseClockIn} />
    </div>
  );
}

export default AdminDashboard;