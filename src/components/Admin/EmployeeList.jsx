import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { FaSearch, FaFileImport, FaFileExport, FaFilter } from "react-icons/fa";
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
  const handleButtonClick = () => {
   
      setShowModal(true);

  };

  return (
    <div>
    <div className="d-flex align-items-center p-3">
      {/* Employee Dropdown */}
      <Dropdown className="me-2  btn-primary">
        <Dropdown.Toggle  id="employee-dropdown">
          Employee: All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Item>Active</Dropdown.Item>
          <Dropdown.Item>Inactive</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      {/* Designation Dropdown */}
      <Dropdown className="me-2">
        <Dropdown.Toggle  id="designation-dropdown">
          Designation: All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Item>Project Manager</Dropdown.Item>
          <Dropdown.Item>Production Team</Dropdown.Item>
          <Dropdown.Item>Junior</Dropdown.Item>
          <Dropdown.Item>Designer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      {/* Search Bar */}
      <InputGroup className="me-2" style={{ maxWidth: "250px" }}>
        <Form.Control type="text" placeholder="Start typing to search" />
        <Button variant="secondary">
          <FaSearch />
        </Button>
      </InputGroup>
      
      {/* Buttons */}
     
      
      {/* Filters Button */}
      <Button variant="secondary" className="ms-auto">
        <FaFilter /> Filters
      </Button>
    </div>
    <div className="me-2">
    <Button  className="me-2 btn btn-primary" onClick={handleButtonClick}>+ Add Employee</Button>
      <Button  className="me-2 btn btn-primary">Invite Employee</Button>
      <Button  className="me-2 btn btn-primary">
        <FaFileImport /> Import
      </Button>
      <Button variant="secondary" className="me-2">
        <FaFileExport /> Export
      </Button>
    </div>

    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body>
         <AddEmployee />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export const EmployeeTable = () => {
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
    navigate("/employeeprofile")
  };


  const handleStatusChange = (index, status) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].status = status;
    setEmployees(updatedEmployees);
  };

  return (
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
        {employees.map((employee, index) => (
          <tr key={index}>
            <td  style={{ cursor: 'pointer'}} 
              onClick={handleJobClick}>{employee.employeeId}</td>
            <td
            style={{ cursor: 'pointer'}} 
            onClick={handleJobClick} 
            >{employee.name}</td>
            <td>{employee.email}</td>
            <td>
              <Dropdown onSelect={(eventKey) => handleRoleChange(index, eventKey)}>
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
  );
};

const EmployeePage = () => {
  return (
    <div>
      
       <EmployeeTableHeader title="All Employee" buttonText="Add Employee" />  
      <EmployeeTable  />
    </div>
  );
};

export default EmployeePage;







