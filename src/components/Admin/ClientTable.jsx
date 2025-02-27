import React, { useState } from "react";
import { Table, Dropdown, Button ,Pagination } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import EmployeeTableHeader from "./EmployeeTableHeader";
import { useNavigate } from "react-router-dom";
 export const ClientTable = () => {
    const navigate = useNavigate();
  const [clients, setClients] = useState([
    {
      clientId: "C001",
      name: "ABC Corp",
      email: "contact@abccorp.com",
      mobile: "123-456-7890",
      status: "Active",
      created: "2024-01-10",
    },
    {
      clientId: "C002",
      name: "XYZ Ltd",
      email: "support@xyzltd.com",
      mobile: "987-654-3210",
      status: "Inactive",
      created: "2023-12-05",
    },
    {
        clientId: "C003",
        name: "DEF Ltd",
        email: "support@xsedyzltd.com",
        mobile: "987-654-3210",
        status: "Inactive",
        created: "2023-12-05",
      },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
 const handleClick=() =>{
     navigate("/clientprofile")
 }
  const handleStatusChange = (index, status) => {
    const updatedClients = [...clients];
    updatedClients[index].status = status;
    setClients(updatedClients);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const paginatedClients = clients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clients.length / itemsPerPage);


  return (
    <>    <Table responsive bordered hover className="tabledown">
      <thead>
        <tr className="table-secondary">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => (
          <tr key={index}>
            <td style={{ cursor: "pointer" }} onClick={handleClick}>{client.clientId}</td>
            <td style={{ cursor: "pointer" }} onClick={handleClick}>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.mobile}</td>
            <td>
              <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                <Dropdown.Toggle variant={client.status === "Active" ? "success" : "secondary"}>
                  {client.status}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                  <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td>{client.created}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-action">
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
    <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, clients.length)} of {clients.length} entries
        </span>
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
    </>

  );
};

const ClientPage = () => {
    return (
      <div style={{height: "100vh"}}>
        <EmployeeTableHeader title="All Clients" buttonText="Add Client" />  
        <ClientTable />
      </div>
    );
  };
  
  export default ClientPage;
