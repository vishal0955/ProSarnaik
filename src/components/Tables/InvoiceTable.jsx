import React from 'react';
import { Button, Table  } from 'react-bootstrap';
import { HiDotsVertical } from "react-icons/hi";
import { Dropdown, DropdownButton } from 'react-bootstrap';


const ProjectInvoiceTable = () => {
  const invoices = [
    { code: 'EMA', invoice: 'INV#020', project: 'Email marketing and newsletter service', client: 'Blaze Haag (Luelwitz PLC)', total: '$11,267.00', date: '17-12-2024', status: 'Paid' },
    { code: 'EPA', invoice: 'INV#019', project: 'Event planning and coordination service', client: 'Kailee Kuvalis (Langworth-Miller)', total: '$33,048.00', date: '20-12-2024', status: 'Unpaid' },
    { code: 'EPA', invoice: 'INV#018', project: 'Event planning and coordination service', client: 'Kailee Kuvalis (Langworth-Miller)', total: '$39,795.00', date: '11-12-2024', status: 'Paid' },
    { code: 'EPA', invoice: 'INV#017', project: 'Event planning and coordination service', client: 'Kailee Kuvalis (Langworth-Miller)', total: '$51,306.00', date: '12-12-2024', status: 'Unpaid' },
    { code: 'WAF', invoice: 'INV#016', project: 'Workout and fitness tracking app', client: 'Jacey Grimes (Greenfelder-O\'Kon)', total: '$37,275.00', date: '08-12-2024', status: 'Unpaid' },
    { code: 'WAF', invoice: 'INV#015', project: 'Workout and fitness tracking app', client: 'Jacey Grimes (Greenfelder-O\'Kon)', total: '$14,376.00', date: '30-12-2024', status: 'Paid' },
    { code: 'WAF', invoice: 'INV#014', project: 'Workout and fitness tracking app', client: 'Jacey Grimes (Greenfelder-O\'Kon)', total: '$49,179.00', date: '10-12-2024', status: 'Paid' },
    { code: 'JBF', invoice: 'INV#013', project: 'Job board for remote job listings', client: 'Mr. Gaylord Hyatt I (Blick, Zieme and Hand)', total: '$16,734.00', date: '14-12-2024', status: 'Unpaid' },
    { code: 'JBF', invoice: 'INV#012', project: 'Job board for remote job listings', client: 'Mr. Gaylord Hyatt I (Blick, Zieme and Hand)', total: '$13,484.00', date: '16-12-2024', status: 'Paid' },
    { code: 'JBF', invoice: 'INV#011', project: 'Job board for remote job listings', client: 'Mr. Gaylord Hyatt I (Blick, Zieme and Hand)', total: '$39,180.00', date: '06-12-2024', status: 'Paid' }
  ];

  return (
    <div className="container my-5">
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
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.code}</td>
              <td>{invoice.invoice}</td>
              <td>{invoice.project}</td>
              <td>{invoice.client}</td>
              <td>{invoice.total}</td>
              <td>{invoice.date}</td>
              <td>
                <span className={invoice.status === 'Paid' ? 'text-success' : 'text-danger'}>
                  {invoice.status}
                </span>
              </td>
              <td>
      <Dropdown align="end">
        <Dropdown.Toggle as={Button} variant="link" size="sm">
          <HiDotsVertical />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => alert('View clicked')}>View</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Delete clicked')}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectInvoiceTable;
