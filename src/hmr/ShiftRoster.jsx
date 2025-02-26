import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; //
import { Modal,   } from 'react-bootstrap';
import {
 
  Row,
  Col,
  Button,
  
  Form,
  
} from "react-bootstrap";

const ShiftRoster = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-02-12" },
    { title: "Project Deadline", date: "2025-02-15" },
  ]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // Function to add a new event
  const handleDateClick = (info) => {
    const eventTitle = prompt("Enter event title:");
    if (eventTitle) {
      setEvents([...events, { title: eventTitle, date: info.dateStr }]);
    }
  };
  return (
    <>
    <div className="assign-section">
        <div className="container">
                {/* assign head */}
    <div class="row g-0">
              <div class="col-sm-6 col-md-2">
                <div class="dropdown">
                  
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  <span>Employee</span>  ALL
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
              <div class="col-sm-6 col-md-2">
                <div className="designa-box ms-2">
                  
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                  <span>Designation</span>  ALL
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
              <div class="col-sm-6 col-md-4">
              <div className="designa-box ms-2">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                        <span>Weekly View</span>
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
            </div>
    {/* assign btn */}
    <Button variant="primary" onClick={handleShow}>
    + Mark Attendanc
      </Button>
      
      <div
        class="modal fade"
        id="attendformModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="attendformModal">
                Mark Attendance
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Assign Bulk Shifts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Col sm={12}>
                <Form.Check 
                  type="checkbox"
                  label="The existing shift will be overridden."
                  defaultChecked
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Department</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>Employees</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Employee Shift</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>Assign Shift By</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  You can select multiple dates.
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Day Off</Form.Label>
              <Col sm={10}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Date</Form.Label>
              <Col sm={10}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Month</Form.Label>
              <Col sm={10}>
                <Form.Control as="select">
                  <option>Mumps</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Save Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Home" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Save</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Check" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Helping Suggestions</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="1+4:02-2025" />
              </Col>
            </Form.Group>

            {/* Remark Text Area */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Remark</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="Enter your remarks here..." />
              </Col>
            </Form.Group>

            {/* Add File Option */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Add File</Form.Label>
              <Col sm={10}>
                <Form.Control type="file" />
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
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////// */}
      <div className="shiftroster-section">
        <div className="container">
          <div className="shiftroster-mainhead">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              editable={true}
              selectable={true}
              dateClick={handleDateClick} // Function triggers on date click
              height="90vh" // Makes it full screen
            />
          </div>
        </div>
      </div>
        </div>
    </div>
    </>
  );
};

export default ShiftRoster;
