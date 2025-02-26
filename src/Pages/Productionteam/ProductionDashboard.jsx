import React, {useState} from "react";
import { Container, Row, Col, Card, Table, ProgressBar, Button } from "react-bootstrap";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ClockInModal } from "../../Designer/Dashboard";
import { FaClock } from "react-icons/fa";

Chart.register(...registerables);

const ProductionDashboard = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Jobs Completed",
        data: [4, 10, 20, 25, 28, 35],
        borderColor: "#36a2eb",
        fill: false,
      },
      {
        label: "Ongoing Jobs",
        data: [10, 18, 22, 30, 26, 40],
        borderColor: "#ff6384",
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ["Ongoing", "On Hold", "Completed"],
    datasets: [
      {
        data: [50, 25, 25],
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
      },
    ],
  };
    const [showClockIn, setShowClockIn] = useState(false);
  
    const handleShowClockIn = () => {
      setShowClockIn(true)
    };
    const handleCloseClockIn = () => setShowClockIn(false);

  return (
    <div className="production-dashboard mt-4">
    <Container fluid>

    <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Dashboard</h5>
        <Button variant="primary" className="mt-2" onClick={handleShowClockIn}>
                <FaClock className="me-1" /> {showClockIn ? "Clock Out" : "Clock In"}
              </Button>
              </div>
      <Row className="mt-4 justify-content-center">

        <div className="col-12 col-sm-6 col-md-3">
              <Card className="p-3 mb-4 bg-light shadow-sm">
            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gap-2 p-1">
              <img
                src="https://i.pravatar.cc/300?u=kevin05@example.org5"
                alt="Employee"
                className="rounded-circle me-md-3 mb-2 mb-md-0"
                width={70}
                height={70}
              />
              <div>
                <p className="mb-1 fw-bold">Dr. Martina Champlin</p>
                <p className="mb-0 text-muted">Employee Id: EMP 5</p>
              </div>
            </div>
          </Card>
              </div>


        <Col xs={12} sm={6} md={3}>
          <Card className="text-start p-3 mb-4 bg-light shadow-sm border-primary">
            <div className="d-flex justify-content-between">
              <h5>Total Jobs</h5>
              <i className={`fa-solid fa-briefcase text-primary`}></i>
            </div>
            <h2 style={{color:'blue'}}>45</h2>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="text-start p-3 mb-4 bg-light shadow-sm border-warning">
            <div className="d-flex justify-content-between">
              <h5>Ongoing Jobs</h5>
              <i className={`fa-solid fa-spinner text-warning`}></i>
            </div>
            <h2 className="text-warning">18</h2>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="text-start p-3 mb-4  bg-light shadow-sm border-success">
            <div className="d-flex justify-content-between">
              <h5>Completed Jobs</h5>
              <i className={`fa-solid fa-check-circle text-success`}></i>
            </div>
            <h2 className="text-success">27</h2>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="p-3 mb-4 shadow-sm">
            <h5>Jobs Overview</h5>
            <Line data={lineData} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 mb-4 shadow-sm">
            <h5>Job Status</h5>
            <Doughnut data={doughnutData} />
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="p-3 mb-4 shadow-sm">
            <h5>Job Assignments</h5>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Banner Design</td>
                    <td>2025-09-05</td>
                    <td><span className="badge bg-success">Done</span></td>
                    <td>John Doe</td>
                  </tr>
                  <tr>
                    <td>Product Catalog</td>
                    <td>2024-09-20</td>
                    <td><span className="badge bg-warning">In Progress</span></td>
                    <td>Jane Smith</td>
                  </tr>
                  <tr>
                    <td>Packaging Design</td>
                    <td>2024-08-15</td>
                    <td><span className="badge bg-primary">To Do</span></td>
                    <td>Mike Johnson</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    <ClockInModal show={showClockIn} handleClose={handleCloseClockIn} />
    </div>
  );
};

export default ProductionDashboard;
