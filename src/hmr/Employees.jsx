import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const userRoles = ["Project Manager", "Production Team", "Junior", "Designer"];
const statusOptions = ["Active", "Inactive"];

const initialEmployees = [
  {
    employeeId: "E001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Project Manager",
    reportingTo: "Jane Smith",
    status: "Active",
  },
  {
    employeeId: "E002",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Designer",
    reportingTo: "Mark Wilson",
    status: "Inactive",
  },
];

const Employees = () => {
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
                  <span>Employee</span>
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
              <div className="designa-box ms-2">
                <span>Designation</span>
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
                      Trainee
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Senior
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Junior
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Team Lead
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Project Manager
                    </button>
                  </li>
                </ul>
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
              + Add Employee
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#inviteemployemodal"
              data-bs-whatever="@mdo">
              + Invite Employee
            </button>
          </div>
          <div
            className="table table-responsive employ-table"
            style={{ height: "100vh", marginTop: "10px" }}>
            <Table bordered hover className="tabledown">
              <thead>
                <tr className="table-secondary">
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Role</th>
                  <th>Reporting To</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.employeeId}
                    </td>
                    <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                      {employee.name}
                    </td>
                    <td>{employee.email}</td>
                    <td>
                      <Dropdown
                        onSelect={(eventKey) =>
                          handleRoleChange(index, eventKey)
                        }>
                        <Dropdown.Toggle variant="light" id="dropdown-role">
                          {employee.role}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {userRoles.map((role) => (
                            <Dropdown.Item key={role} eventKey={role}>
                              {role}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>{employee.reportingTo}</td>
                    <td>
                      <Dropdown
                        onSelect={(eventKey) =>
                          handleStatusChange(index, eventKey)
                        }>
                        <Dropdown.Toggle
                          variant={
                            employee.status === "Active"
                              ? "success"
                              : "secondary"
                          }>
                          {employee.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {statusOptions.map((status) => (
                            <Dropdown.Item key={status} eventKey={status}>
                              {status}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
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

      {/* <!--form--Modal --> */}
      <div
        class="modal fade"
        id="employformModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Employee
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Card className="p-4 shadow-sm">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Employee ID"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="e.g. John Doe" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="e.g. john@example.com"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control as="select">
                          <option>--Select--</option>
                          <option>Manager</option>
                          <option>Production</option>
                          <option>Designer</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Control as="select">
                          <option>--Select--</option>
                          <option>--Select--</option>
                          <option>Admin</option>
                          <option>Management</option>
                          <option>Production</option>
                          <option>Designer</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select">
                          <option>Albania</option>
                          <option>USA</option>
                          <option>India</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="tel" placeholder="+123 456 7890" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>User Role</Form.Label>
                        <Form.Control as="select">
                          <option>Employee</option>
                          <option>Admin</option>
                          <option>Manager</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Other Details */}
                  <h4>Other Details</h4>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Login Allowed?</Form.Label>
                        <div>
                          <Form.Check
                            inline
                            label="Yes"
                            name="login"
                            type="radio"
                          />
                          <Form.Check
                            inline
                            label="No"
                            name="login"
                            type="radio"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Receive Email Notifications?</Form.Label>
                        <div>
                          <Form.Check
                            inline
                            label="Yes"
                            name="email"
                            type="radio"
                          />
                          <Form.Check
                            inline
                            label="No"
                            name="email"
                            type="radio"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g. ReactJS, Python"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Hourly Rate</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Employment Type</Form.Label>
                        <Form.Control as="select">
                          <option>--Select--</option>
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Slack Member ID</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Buttons */}
                  <div className="d-flex justify-content-start gap-2">
                    <Button variant="primary">Save</Button>
                    <Button variant="outline-primary">Save & Add More</Button>
                    <Button variant="outline-secondary">Cancel</Button>
                  </div>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* invite employees */}
      <div
        class="modal fade"
        id="inviteemployemodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Invite member to Worksuite
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Email:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
