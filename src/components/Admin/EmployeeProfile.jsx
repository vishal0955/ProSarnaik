import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaLocationDot } from "react-icons/fa6";
import { BsBoxArrowRight, BsDribbble } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmployeeProfile = () => {
  const navigate = useNavigate();

  const chartData = {
    labels: ["Completed Tasks", "Pending Tasks"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#FFC107", "#DC3545"],
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 border shadow-sm p-3 me-3">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <img
              src="https://i.pravatar.cc/300?u=client@example.com"
              className="img-thumbnail mt-3 me-md-4"
              alt="Profile"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div className="text-center text-md-start">
              <h4>Ambrose Jenkins</h4>
              <p className="text-muted">
                Team Lead • Finance | User Role: Employee
              </p>
              <p className="text-muted">Last login at --</p>
              <hr />
              <table className="table table-borderless text-center">
                <thead>
                  <tr>
                    <th onClick={() => navigate("/tasklist")}>Open Tasks</th>
                    <th>Projects</th>
                    <th>Hours Logged</th>
                    <th>Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3</td>
                    <td>7</td>
                    <td>13</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-5 border shadow-sm p-3 me-3 text-center">
          <h3 className="text-start">Appreciation</h3>
          <i
            className="fa-solid fa-medal d-block mx-auto"
            style={{ color: "grey", fontSize: "40px" }}
          />
          <h5 className="text-muted mt-2">- No content found -</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 border shadow-sm p-3 me-3 mt-3">
          <h3>About</h3>
          <p>I am a super human</p>
        </div>

        <div className="col-md-5 border shadow-sm p-3 me-3 mt-3">
          <table className="table table-borderless text-center">
            <thead>
              <tr>
                <th className="text-muted">Reporting Team</th>
                <th className="text-muted">Reporting Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 border shadow-sm p-3 me-3">
          <h3>Profile Secondary</h3>
          <table className="table table-borderless" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    width: "40%",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <strong>Employee ID:</strong>
                </td>
                <td
                  style={{
                    width: "60%",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  EMP-12
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Full Name:</strong>
                </td>
                <td>Ambrose Jenkins</td>
              </tr>
              <tr>
                <td>
                  <strong>Designation:</strong>
                </td>
                <td>Team Lead</td>
              </tr>
              <tr>
                <td>
                  <strong>Department:</strong>
                </td>
                <td>Finance</td>
              </tr>
              <tr>
                <td>
                  <strong>Gender:</strong>
                </td>
                <td>Male</td>
              </tr>
              <tr>
                <td>
                  <strong>Work Anniversary:</strong>
                </td>
                <td>2 months from now</td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td style={{ wordBreak: "break-word" }}>
                  keshawn32@example.com
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hourly Rate:</strong>
                </td>
                <td>$27</td>
              </tr>
              <tr>
                <td>
                  <strong>Address:</strong>
                </td>
                <td style={{ wordBreak: "break-word" }}>
                  22728 Russel Springs Apt. 931, Gwendolynburgh, GA
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-5 p-3 me-3">
          <div className="row">
            <div className="col-md-5 border shadow-sm p-3 me-3">
              <table className="table table-borderless text-center">
                <tbody>
                  <tr>
                    <td>Late Attendance</td>
                    <td>
                      <FaLocationDot />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "blue" }}>0</td>
                    <td>
                      <i className="fa-solid fa-circle-question"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-5 border shadow-sm p-3 me-3">
              <table className="table table-borderless text-center">
                <tbody>
                  <tr>
                    <td>Leaves Taken</td>
                    <td>
                      <BsBoxArrowRight />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "blue" }}>0</td>
                    <td>
                      <i className="fa-solid fa-circle-question"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row border p-3 me-3 mt-3 shadow-sm">
            <div className="col-md-12">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title>Tasks Overview</Card.Title>
                  <Pie
                    data={chartData}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row border shadow-sm p-3 me-3 mt-3 text-center">
              <h3>Tickets</h3>
              <BsDribbble />
              <p className="text-muted">- Not enough data -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
