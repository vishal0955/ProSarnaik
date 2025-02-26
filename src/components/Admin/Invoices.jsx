import React, { useState } from "react";
import { Table, Dropdown, Button, Form, InputGroup, Modal } from "react-bootstrap";
import InvoiceForm from "./InvoiceForm";
import CreateTimeInvoice from "./CreateTimeInvoice (1)";

const InvoiceTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState(false);

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

  // ✅ Corrected function for handling modal states
  const handleShowModal = (type) => {
    if (type === "createInvoice") {
      setShowModal(true);
    } else if (type === "createTime") {
      setDataModal(true);
    }
  };

  
 const handleClick=({createInvoice})=>{
   setShowModal(true);
    

 }
  return (
    <div className="container-fluid p-3">
      {/* Top Controls */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" onClick={() => handleShowModal("createInvoice")}>
            + Create Invoice
          </Button>
          <Button variant="primary" onClick={() => handleShowModal("createTime")}>
            + Create TimeLog Invoice
          </Button>
          <Button variant="outline-secondary">📁 Export</Button>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <Form.Select className="w-auto">
            <option>All</option>
            <option>Paid</option>
            <option>Unpaid</option>
          </Form.Select>
          <InputGroup className="w-auto">
            <Form.Control placeholder="Start typing to search" />
          </InputGroup>
        </div>
      </div>

      {/* Invoice Table */}
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
            {invoices.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td className="fw-bold">{item.invoice}</td>
                <td>{item.project}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.pravatar.cc/300?u=myrl.yundt@example.net9"
                      alt="client"
                      className="rounded-circle me-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <strong>{item.client}</strong>
                      <br />
                      <small>{item.company}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <strong>Total:</strong> {item.total}
                  </div>
                  <div className="text-success">Paid: {item.paid}</div>
                  <div className="text-danger">Unpaid: {item.unpaid}</div>
                </td>
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

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          Show{" "}
          <Form.Select size="sm" className="d-inline w-auto">
            <option>10</option>
            <option>20</option>
          </Form.Select>{" "}
          entries
        </div>
        <div>
          <Button variant="light" size="sm">
            Previous
          </Button>
          <Button variant="primary" size="sm" className="mx-1">
            1
          </Button>
          <Button variant="light" size="sm">
            Next
          </Button>
        </div>
      </div>

      {/* Create Invoice Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InvoiceForm />
        </Modal.Body>
      </Modal>

      {/* Create TimeLog Invoice Modal */}
      <Modal show={dataModal} onHide={() => setDataModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create TimeLog Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTimeInvoice />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InvoiceTable;
