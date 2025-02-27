import React, { useState } from "react";
import { Table, Dropdown, Pagination, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { FaEllipsisV, FaSearch, FaFileImport, FaFileExport, FaFilter } from "react-icons/fa";
import AddEmployee from "./AddEmployee";
import EmployeeTableHeader from "./EmployeeTableHeader";
import { useNavigate } from "react-router-dom";

const userRoles = ["Project Manager", "Production Team", "Junior", "Designer"];
const statusOptions = ["Active", "Inactive"];

export const initialEmployees = [
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

export const EmployeeToolbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center p-3">
        {/* Employee Dropdown */}
        <Dropdown className="me-2 btn-primary">
          <Dropdown.Toggle id="employee-dropdown">Employee: All</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>All</Dropdown.Item>
            <Dropdown.Item>Active</Dropdown.Item>
            <Dropdown.Item>Inactive</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Designation Dropdown */}
        <Dropdown className="me-2">
          <Dropdown.Toggle id="designation-dropdown">Designation: All</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>All</Dropdown.Item>
            {userRoles.map((role) => (
              <Dropdown.Item key={role}>{role}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Search Bar */}
        <InputGroup className="me-2" style={{ maxWidth: "250px" }}>
          <Form.Control type="text" placeholder="Start typing to search" />
          <Button variant="secondary">
            <FaSearch />
          </Button>
        </InputGroup>

        {/* Filters Button */}
        <Button variant="secondary" className="ms-auto">
          <FaFilter /> Filters
        </Button>
      </div>

      <div className="me-2">
        <Button className="me-2 btn btn-primary" onClick={() => setShowModal(true)}>
          + Add Employee
        </Button>
        <Button className="me-2 btn btn-primary">Invite Employee</Button>
        <Button className="me-2 btn btn-primary">
          <FaFileImport /> Import
        </Button>
        <Button variant="secondary" className="me-2">
          <FaFileExport /> Export
        </Button>
      </div>

      {/* Add Employee Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEmployee />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(initialEmployees);

  const handleRoleChange = (index, role) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].role = role;
    setEmployees(updatedEmployees);
  };

  const handleStatusChange = (index, status) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].status = status;
    setEmployees(updatedEmployees);
  };

  const handleJobClick = () => {
    navigate("/employeeprofile");
  };

  // Pagination Logic
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, employees.length);
  const paginatedEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Table responsive bordered hover className="tabledown">
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
          {paginatedEmployees.map((employee, index) => (
            <tr key={index}>
              <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                {employee.employeeId}
              </td>
              <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                {employee.name}
              </td>
              <td>{employee.email}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handleRoleChange(index, eventKey)}>
                  <Dropdown.Toggle variant="light" id={`dropdown-role-${index}`}>
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
                <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                  <Dropdown.Toggle variant={employee.status === "Active" ? "success" : "secondary"}>
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
                  <Dropdown.Toggle variant="light" id={`dropdown-action-${index}`}>
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {employees.length} entries
        </span>
        <Pagination>
          <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
        </Pagination>
      </div>
    </>
  );
};

const EmployeePage = () => (
  <div>
    <EmployeeTableHeader title="All Employees" buttonText="Add Employee" />
    <EmployeeTable />
  </div>
);

export default EmployeePage;
