import React, { useState } from "react";
import { Table, Button, Dropdown, Form, Modal } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { BsPlus, BsFileEarmarkArrowDown } from "react-icons/bs";
import AddDepartment from "./AddDepartment";

const Department = () => {
  const [showModal, setShowModal] = useState(false);
  const [designations] = useState([
    { id: 1, name: "Project Owner", parent: "-" },
    { id: 2, name: "Producation Team", parent: "-" },
    { id: 3, name: "Design", parent: "-" },
    { id: 4, name: "Human Resources", parent: "-" },
    { id: 5, name: "Finance", parent: "-" },
  ]);
 const handleClick=()=>{
  setShowModal(true);
 }
  return (
    <div className="container-fluid mt-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleClick}>
          <BsPlus className="me-1"  /> Add Department
        </Button>
        <Button variant="light">
          <BsFileEarmarkArrowDown className="me-1" /> Export
        </Button>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Name</th>
              <th>Parent Department</th>
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
                    <Button variant="" size="sm">
                      View
                    </Button>

                    <Dropdown>
                      <Dropdown.Toggle
                        as={Button}
                        variant=""
                        size="sm"
                        className="p-0 border-0"
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
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
    <AddDepartment />
          </Modal.Body>
        </Modal>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Show{" "}
          <Form.Select size="sm" style={{ width: "60px", display: "inline" }}>
            <option>5</option>
            <option>10</option>
          </Form.Select>{" "}
          entries
        </div>
        <div className="d-flex gap-2">
          <Button variant="light" size="sm">
            Previous
          </Button>
          <Button variant="primary" size="sm">
            1
          </Button>
          <Button variant="light" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Department;
