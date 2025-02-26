import React, { useState } from "react";
import { Table, Button, Dropdown, Form, Modal } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import AddClient from "./AddClient";
import AddDesignation from "./AddDesignation";

const DesignationTable = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick=()=>{
    setShowModal(true);
   }
  const [designations] = useState([
    { id: 1, name: "Trainee", parent: "-" },
    { id: 2, name: "Senior", parent: "-" },
    { id: 3, name: "Junior", parent: "-" },
    { id: 4, name: "Team Lead", parent: "-" },
    { id: 5, name: "Project Manager", parent: "-" },
  ]);

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleClick}>
          <i className="bi bi-plus"></i> Add Designation
        </Button>
        <Button variant="light">
          <i className="bi bi-file-earmark-arrow-down"></i> Export
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead className="bg-light">
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Name</th>
            <th>Parent Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {designations.map((designation) => (
            <tr key={designation.id}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{designation.name}</td>
              <td>{designation.parent}</td>
              <td>
                <div className="d-flex align-items-center gap-2">
                  {/* <Button  size="sm">
                    View
                  </Button> */}

                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="border-0 bg-transparent p-0"
                    >
                      <FaEllipsisV />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          Show{" "}
          <Form.Select size="sm" style={{ width: "60px", display: "inline" }}>
            <option>5</option>
            <option>10</option>
          </Form.Select>{" "}
          entries
        </div>
        <div>
          <Button variant="light" size="sm">
            Previous
          </Button>
          <Button variant="primary" size="sm" className="ms-2">
            1
          </Button>
          <Button variant="light" size="sm" className="ms-2">
            Next
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <AddDesignation />
          </Modal.Body>
        </Modal>

    </div>
  );
};

export default DesignationTable;
