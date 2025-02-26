import React,{ useState} from "react";
import { Container, Row, Col, Card, Table, ProgressBar,Button } from "react-bootstrap";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaClock } from "react-icons/fa";
import { ClockInModal } from "../Designer/Dashboard";

Chart.register(...registerables);

const ProjectManagementDashboard = () => {
  const [showClockIn, setShowClockIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowClockIn = () => {
    setShowClockIn(true)
  };
  const handleCloseClockIn = () => setShowClockIn(false);

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [5, 15, 25, 20, 30, 40],
        borderColor: "#36a2eb",
        fill: false,
      },
      {
        label: "Ongoing Tasks",
        data: [8, 12, 18, 28, 22, 35],
        borderColor: "#ff6384",
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ["Ongoing", "On Hold", "Finished"],
    datasets: [
      {
        data: [55, 22, 22],
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"],
      },
    ],
  };

  return (
    <div className="pro-manage-section mt-4">
      <Container-fluid> 

        {/* <h5>Project Manager DashBoard</h5> */}
         <Row className="mt-4 justify-content-center">
          {/* <div className="col-12 col-sm-6 col-md-3">
            <Card className="p-3 mb-4 bg-light shadow-sm">
              <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gap-2 p-1">
                <img
                  src="https://i.ibb.co/5JkFzc4/300.jpg"
                  alt="Employee"
                  className="rounded-circle me-md-3 mb-2 mb-md-0"
                  width={70}
                  height={70}
                />
                <div>
                  <p className="mb-1 fw-bold">Project Manager</p>
                  <p className="mb-0 text-muted">Employee Id: EMP 1</p>
                </div>
              </div>
            </Card>
          </div>  */}
 
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Dashboard</h5>
        <Button variant="primary" className="mt-2" onClick={handleShowClockIn}>
                <FaClock className="me-1" /> {showClockIn ? "Clock Out" : "Clock In"}
              </Button>
      </div>
      </Row>
      <Row className="mt-4 justify-content-center">
        <div className="col-12 col-sm-6 col-md-3">
        <Card className="p-3 mb-4  bg-light shadow-sm">
      <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gap-2 p-1">
        <img
          src="https://i.ibb.co/5JkFzc4/300.jpg"
          alt="Employee"
          className="rounded-circle me-md-3 mb-2 mb-md-0"
          width={70}
          height={70}
        />
        <div>
          <p className="mb-1 fw-bold">Project Manager</p>
          <p className="mb-0 text-muted">Employee Id: EMP 1</p>
        </div>
      </div>
    </Card>
        </div>

          <Col xs={12} sm={6} md={3}>
            <Card className="text-start p-3 mb-4 bg-light shadow-sm border-primary">
              <div className="d-flex justify-content-between">
                <h5>Total Projects</h5>
                <i className="fa-solid fa-layer-group text-primary fs-4"></i>
              </div>
              <h2 className="text-primary">12</h2>
            </Card>
          </Col>

          {/* Total Tasks */}
          <Col xs={12} sm={6} md={3}>
            <Card className="text-start p-3 mb-4 bg-light shadow-sm border-warning">
              <div className="d-flex justify-content-between">
                <h5>Total Tasks</h5>
                <i className="fa-solid fa-address-book text-warning fs-4"></i>
              </div>
              <h2 className="text-warning">36</h2>
            </Card>
          </Col>

          {/* Total Users */}
          <Col xs={12} sm={6} md={3}>
            <Card className="text-start p-3 mb-4 bg-light shadow-sm border-success">
              <div className="d-flex justify-content-between">
                <h5>Total Users</h5>
                <i className="fa-solid fa-user text-success fs-4"></i>
              </div>
              <h2 className="text-success">18</h2>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={8}>
            <Card className="p-3 mb-4 shadow-sm">
              <h5>Tasks Overview</h5>
              <Line data={lineData} />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <h5>Project Status</h5>
              <Doughnut data={doughnutData} />
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card className="p-3 shadow-sm">
              <h5>Tasks</h5>
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
                    <tr>
                      <td>Dashboard Cards</td>
                      <td>2025-09-01</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td>Newsletter Templates</td>
                    </tr>
                    <tr>
                      <td>The Marketplace Strategy</td>
                      <td>2024-09-15</td>
                      <td>
                        <span className="badge bg-warning">In Progress</span>
                      </td>
                      <td>Newsletter Templates</td>
                    </tr>
                    <tr>
                      <td>Design Test</td>
                      <td>2024-08-10</td>
                      <td>
                        <span className="badge bg-primary">To Do</span>
                      </td>
                      <td>Payment Integration</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
         <ClockInModal show={showClockIn} handleClose={handleCloseClockIn} setShowClockIn={setShowClockIn}/>
      </Container-fluid>
    </div>
   
  );
};

export default ProjectManagementDashboard;
 