import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const userRoles = ["Project Manager", "Production Team", "Junior", "Designer"];
const statusOptions = ["Active", "Inactive"];

const initialEmployees = [
  {
    Employee: "John Doe",
    Leavedate: "19-01-2025 (Sunday)",
    Duration: "Full Day",
    leavestatus: " Approved",
    leavetype: "Sick",
    paid: "paid",
  },
  {
    Employee: "Alice Johnson",
    Leavedate: "14-01-2025 (Tuesday)",
    Duration: "Full Day",
    leavestatus: " Pending",
    leavetype: "Sick",
    paid: "paid",
  },
];
const Leaves = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [employees, setEmployees] = useState(initialEmployees);
  
    const handleRoleChange = (index, role) => {
      const updatedEmployees = [...employees];
      updatedEmployees[index].role = role;
      setEmployees(updatedEmployees);
    };
    const handleJobClick = () => {
      setShowModal(true);
      navigate("/employeeprofile");
    };
  
    const handleStatusChange = (index, status) => {
      const updatedEmployees = [...employees];
      updatedEmployees[index].status = status;
      setEmployees(updatedEmployees);
    };
  return (
    <>
        <div className="employe-main">
        <div className="container">
          <div className="employe-main-header">
            <div className="employe-main-box">
              <div className="employ-box">
                <div class="dropdown">
                  <span>Duration</span>
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ALL
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" type="button">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="emplo-search-box ms-2">
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Start typing to search"
                    aria-label="Start typing to search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="employe-filter">
              <span>
                <i class="fa fa-filter" aria-hidden="true"></i>
              </span>
              <button
                class="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                Filters
              </button>

              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasRightLabel">
                    Filters
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div className="employe-depart">
                    <label class="f-14 text-dark-grey mb-12 " for="usr">
                      Department
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>All</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="employe-role">
                    <label class="f-14 text-dark-grey mb-12 " for="usr">
                      Role
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>All</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="employe-status">
                    <label class="f-14 text-dark-grey mb-12 " for="usr">
                      Status
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>All</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="employe-gender">
                    <label class="f-14 text-dark-grey mb-12 " for="usr">
                      Gender
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>All</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="employe-type">
                    <label class="f-14 text-dark-grey mb-12 " for="usr">
                      Employment Type
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>All</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="employe-add-btn-section">
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-primary me-3"
              data-bs-toggle="modal"
              data-bs-target="#employformModal">
              + New Leave
            </button>
            
          </div>
          <div
            className="table table-responsive employ-table"
            style={{ height: "100vh", marginTop: "10px" }}>
            <Table bordered hover className="tabledown">
              <thead>
                <tr className="table-secondary">
                  <th>Employee</th>
                  <th>Leave Date</th>
                  <th>Duration</th>
                  <th>Leave Status</th>
                  <th>Leave Type</th>
                  <th>Paid</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.Employee}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.Leavedate}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.Duration}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.leavestatus}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.leavetype}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.paid}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-action">
                          <FaEllipsisV />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Edit</Dropdown.Item>
                          <Dropdown.Item href="#">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leaves