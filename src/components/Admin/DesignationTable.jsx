import React, { useState } from "react";
import { Table, Button, Dropdown, Form, Modal, Pagination  } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import AddClient from "./AddClient";
import AddDesignation from "./AddDesignation";

const DesignationTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = designations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(designations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

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

      <div className="d-flex justify-content-between align-items-center mt-3">
        
        <div>
          <span>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, designations.length)} of{" "}
            {designations.length} entries
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
