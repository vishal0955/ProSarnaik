import React, { useState } from 'react';
import { Button, Table, Pagination } from 'react-bootstrap';
import { HiDotsVertical } from 'react-icons/hi';
import { Dropdown } from 'react-bootstrap';

const ProjectInvoiceTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const invoices = [
    { code: 'EMA', invoice: 'INV#020', project: 'Email marketing and newsletter service', client: 'Blaze Haag (Luelwitz PLC)', total: '$11,267.00', date: '17-12-2024', status: 'Paid' },
    { code: 'EPA', invoice: 'INV#019', project: 'Event planning and coordination service', client: 'Kailee Kuvalis (Langworth-Miller)', total: '$33,048.00', date: '20-12-2024', status: 'Unpaid' },
    { code: 'EPA', invoice: 'INV#018', project: 'Event planning and coordination service', client: 'Kailee Kuvalis (Langworth-Miller)', total: '$39,795.00', date: '11-12-2024', status: 'Paid' },
    { code: 'WAF', invoice: 'INV#016', project: 'Workout and fitness tracking app', client: 'Jacey Grimes (Greenfelder-O Kon)', total: '$37,275.00', date: '08-12-2024', status: 'Unpaid' },
    { code: 'JBF', invoice: 'INV#013', project: 'Job board for remote job listings', client: 'Mr. Gaylord Hyatt I (Blick, Zieme and Hand)', total: '$16,734.00', date: '14-12-2024', status: 'Unpaid' }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid my-5">
      <h2>Invoices</h2>
      <Table striped bordered hover responsive>
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
          {currentInvoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.code}</td>
              <td>{invoice.invoice}</td>
              <td>{invoice.project}</td>
              <td>{invoice.client}</td>
              <td>{invoice.total}</td>
              <td>{invoice.date}</td>
              <td className={invoice.status === 'Paid' ? 'text-success' : 'text-danger'}>
                {invoice.status}
              </td>
              <td>
                <Dropdown align="end">
                  <Dropdown.Toggle as={Button} variant="link" size="sm">
                    <HiDotsVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>View</Dropdown.Item>
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
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, invoices.length)} of {invoices.length} entries
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
    </div>
  );
};

export default ProjectInvoiceTable;
