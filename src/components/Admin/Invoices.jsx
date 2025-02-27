import React, { useState } from "react";
import { Table, Dropdown, Button, Form, InputGroup, Modal, Pagination } from "react-bootstrap";
import InvoiceForm from "./InvoiceForm";
import CreateTimeInvoice from "./CreateTimeInvoice (1)";

const InvoiceTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const invoices = [
    {
      code: "BOT",
      invoice: "INV#002",
      project: "Chatbots",
      client: "Kailee Kuvalis",
      company: "Langworth-Miller",
      total: "$14,351.00",
      paid: "$0.00",
      unpaid: "$14,351.00",
      date: "01-12-2024",
      status: "Unpaid",
      statusColor: "text-danger",
    },
    {
      code: "BOT",
      invoice: "INV#001",
      project: "Chatbots",
      client: "Kailee Kuvalis",
      company: "Langworth-Miller",
      total: "$22,462.00",
      paid: "$2,003.00",
      unpaid: "$20,459.00",
      date: "06-12-2024",
      status: "Partially Paid",
      statusColor: "text-primary",
    },
  ];

  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid p-3">
      <div className="table-responsive">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Code</th>
              <th>Invoice</th>
              <th>Project</th>
              <th>Client</th>
              <th>Total</th>
              <th>Invoice Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.invoice}</td>
                <td>{item.project}</td>
                <td>{item.client}</td>
                <td>{item.total}</td>
                <td>{item.date}</td>
                <td className={item.statusColor}>{item.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light">⋮</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>View</Dropdown.Item>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <span>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, invoices.length)} of {invoices.length} entries
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

export default InvoiceTable;