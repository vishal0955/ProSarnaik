import React, { useState } from "react";
import { Table, Button, Dropdown, Form, Modal, Pagination } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { BsPlus, BsFileEarmarkArrowDown } from "react-icons/bs";
import AddDepartment from "./AddDepartment";

const Department = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [designations] = useState([
    { id: 1, name: "Project Owner", parent: "-" },
    { id: 2, name: "Production Team", parent: "-" },
    { id: 3, name: "Design", parent: "-" },
    { id: 4, name: "Human Resources", parent: "-" },
    { id: 5, name: "Finance", parent: "-" },
    { id: 6, name: "Project Owner", parent: "-" },
    { id: 7, name: "Production Team", parent: "-" },
    { id: 8, name: "Design", parent: "-" },
    { id: 9, name: "Human Resources", parent: "-" },
    { id: 10, name: "Finance", parent: "-" },
  ]);

  const handleClick = () => {
    setShowModal(true);
  };

  // Pagination Logic
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = designations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(designations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid mt-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleClick}>
          <BsPlus className="me-1" /> Add Department
        </Button>
        <Button variant="light">
          <BsFileEarmarkArrowDown className="me-1" /> Export
        </Button>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table striped bordered hover>
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
            {paginatedDesignations.map((designation) => (
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
                        variant="light"
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

      {/* Add Department Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AddDepartment />
        </Modal.Body>
      </Modal>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <span>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, designations.length)} of {designations.length} entries
          </span>
        </div>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Department;
