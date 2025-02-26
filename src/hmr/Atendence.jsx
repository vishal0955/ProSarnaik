import React, { useState } from "react";
import { Modal,    } from 'react-bootstrap';
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Form,
  Badge,
  
} from "react-bootstrap";
import dayjs from "dayjs";

const Atendence = () => {
  const [currentDate, setCurrentDate] = useState(dayjs("2024-08-01"));
  const [view, setView] = useState("month");

  const employees = [
    { name: "Jane Doe (you)", profile: "👩", leaves: ["2024-08-06"] },
    { name: "Alfredo Vetrov", profile: "🧑", leaves: [] },
    {
      name: "Serenity Bellamy",
      profile: "👩",
      leaves: ["2024-08-09", "2024-08-10"],
    },
    {
      name: "Jerrod Halbert",
      profile: "🧑",
      leaves: ["2024-08-11", "2024-08-12"],
    },
    { name: "Richard Simmons", profile: "🧑", leaves: ["2024-08-13"] },
    { name: "Dianne Russell", profile: "👩", leaves: [] },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const leavesByDate = {
    "2024-08-06": "approved",
    "2024-08-09": "pending",
    "2024-08-10": "pending",
    "2024-08-11": "restricted",
    "2024-08-12": "restricted",
    "2024-08-13": "approved",
  };

  const getDatesForView = () => {
    const days = [];
    let start, end;

    if (view === "week") {
      start = currentDate.startOf("week");
      end = currentDate.endOf("week");
    } else if (view === "month") {
      start = currentDate.startOf("month");
      end = currentDate.endOf("month");
    } else if (view === "year") {
      start = currentDate.startOf("year");
      end = currentDate.endOf("year");
    }

    for (
      let date = start;
      date.isBefore(end) || date.isSame(end);
      date = date.add(1, "day")
    ) {
      days.push(date);
    }

    return days;
  };

  const handlePrev = () => {
    setCurrentDate((prev) => {
      if (view === "week") return prev.subtract(1, "week");
      if (view === "month") return prev.subtract(1, "month");
      if (view === "year") return prev.subtract(1, "year");
      return prev;
    });
  };

  const handleNext = () => {
    setCurrentDate((prev) => {
      if (view === "week") return prev.add(1, "week");
      if (view === "month") return prev.add(1, "month");
      if (view === "year") return prev.add(1, "year");
      return prev;
    });
  };

  const getCellStatus = (date, employee) => {
    const formattedDate = date.format("YYYY-MM-DD");
    if (employee.leaves.includes(formattedDate)) {
      return leavesByDate[formattedDate];
    }
    return null;
  };
  return (
    <>
      <div className="atendence-section">
        <Container
          fluid
          className="p-4 bg-light text-dark"
          style={{ minHeight: "100vh" }}>
          {/* Header Section */}
          <div className="atendence-main-header d-flex justify-content-between ">
            <div class="d-flex ">
              <div class="">
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
                        All
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Designer
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Project Manager
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
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
              </div>
              <div class="">
                <div className="emplo-search-box ms-4">
                  <div class="input-group mb-3">
                    
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Start typing to search"
                      aria-label="Start typing to search"
                      aria-describedby="basic-addon1"
                    />
                    <span class="input-group-text">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <>
            <Button className="primary" style={{height: "40px"}} onClick={handleShow}>
             + Mark Attendance
             </Button>
             </>
          </div>
          {/* Leave Request */}
          <div className="employe-add-btn-section mb-3">
            {/* <!-- Button trigger modal --> */}
           
            {/* ///////////////////// */}
            <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mark Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Department</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>Employees</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Location</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Mark Attendance By" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Year</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="2026" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Month</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>February</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Week in</Form.Label>
              <Col sm={10}>
              <Form.Control type="time" defaultValue="08:00 AM" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Check Out</Form.Label>
              <Col sm={10}>
                <Form.Control type="time" defaultValue="08:00 AM" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Late</Form.Label>
              <Col sm={10}>
                <Form.Check type="checkbox" label="Yes" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Half Day</Form.Label>
              <Col sm={10}>
                <Form.Check type="checkbox" label="Yes" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Working From</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>Office</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Attendance Ownership</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Attendance Ownership" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {/* ///////////////////// */}
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#inviteemployemodal"
              data-bs-whatever="@mdo">
              + Invite Employee
            </button> */}
          </div>
          {/* Calendar */}
          <Row>
            <Col>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="outline-dark" onClick={handlePrev}>
                  &#8249;
                </Button>
                <h5>
                  {view === "week"
                    ? `Week of ${currentDate.format("DD MMM YYYY")}`
                    : currentDate.format("MMMM YYYY")}
                </h5>
                <Button variant="outline-dark" onClick={handleNext}>
                  &#8250;
                </Button>
              </div>

              <div className="table table-responsive">
                <Table bordered className="table-light">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      {getDatesForView().map((date, index) => (
                        <th key={index} className="text-center">
                          {view === "year"
                            ? date.format("MMM")
                            : date.format("D")}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, empIndex) => (
                      <tr key={empIndex}>
                        <td>
                          <span className="me-2">{employee.profile}</span>
                          {employee.name}
                        </td>
                        {getDatesForView().map((date, dateIndex) => {
                          const status = getCellStatus(date, employee);
                          return (
                            <td key={dateIndex} className="text-center">
                              {status === "approved" && (
                                <Badge bg="success">✔</Badge>
                              )}
                              {status === "pending" && (
                                <Badge bg="warning">⏳</Badge>
                              )}
                              {status === "restricted" && (
                                <Badge bg="danger">🚫</Badge>
                              )}
                              {!status && "×"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Atendence;
