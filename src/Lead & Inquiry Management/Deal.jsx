import React, { useState } from "react";
import { Container, Table, Button, Dropdown, Pagination, Modal } from "react-bootstrap";
import { FaPlus, FaFileImport, FaFileExport, FaEllipsisV } from "react-icons/fa";
import DealForm from "../components/Forms/DealForm";
import { useNavigate } from "react-router-dom";

const dealsData = [
  { id: 11, name: "Justine Franecki-11", lead: "Justine Franecki", email: "fake@example.com", phone: "+1-281-987-883", value: "$95,824.00", agent: "Martina Nikolaus", stage: "Generated" },
  { id: 10, name: "Mrs. Yesenia Okuneva-10", lead: "Mrs. Yesenia Okuneva", email: "fake@example.com", phone: "(707) 382-2333", value: "$34,911.00", agent: "Martina Nikolaus", stage: "Qualified" },
  { id: 9, name: "Mr. Eddie Jenkins-9", lead: "Mr. Eddie Jenkins", email: "fake@example.com", phone: "1-786-404-7537", value: "$94,724.00", agent: "Maggie Streich", stage: "Schedule Appointment" },
  { id: 8, name: "Justine Franecki-8", lead: "Justine Franecki", email: "fake@example.com", phone: "+1-281-987-883", value: "$83,804.00", agent: "Martina Nikolaus", stage: "Initial Contact" },
  { id: 7, name: "Mrs. Yesenia Okuneva-7", lead: "Mrs. Yesenia Okuneva", email: "fake@example.com", phone: "(707) 382-2333", value: "$92,642.00", agent: "Martina Nikolaus", stage: "Proposal Sent" },
  { id: 6, name: "Ahmed Ankunding-6", lead: "Ahmed Ankunding", email: "fake@example.com", phone: "1-510-852-9970", value: "$36,051.00", agent: "Martina Nikolaus", stage: "Lost" },
];

const Deal = () => {
  const [showModal, setShowModal] = useState(false);
  const [deals, setDeals] = useState(dealsData);
  const handleClick=()=>{
    setShowModal(true);
   }
  const navigate = useNavigate();
  
  const handleJobClick = () => {
    navigate(`/dealDetail`);
  };

  return (
    <>
    <Container-fluid className="mt-4">
      <h5 className="mt-4 mb-4">Deals</h5>
      <div className="d-flex justify-content-between align-items-center mb-3">
       
          <div>
          <Button variant="primary" className="me-2" onClick={handleClick}><FaPlus /> Add Deal</Button>
          </div>
          <div>
          <Button variant="secondary" className="me-2"><FaFileImport /> Import</Button>
          <Button variant="secondary"><FaFileExport /> Export</Button>
          </div>
        
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>ID</th>
            <th >Deal Name</th>
            <th>Lead Name</th>
            <th>Contact Details</th>
            <th>Value</th>
            <th>Deal Agent</th>
            <th>Stage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick()}>{deal.id}</td>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick()}>{deal.name}</td>
              <td >{deal.lead}</td>
              <td>
                <div>Email: {deal.email}</div>
                <div>Phone: {deal.phone}</div>
              </td>
              <td>{deal.value}</td>
              <td>{deal.agent}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" size="sm">
                    {deal.stage}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Generated</Dropdown.Item>
                    <Dropdown.Item>Qualified</Dropdown.Item>
                    <Dropdown.Item>Schedule Appointment</Dropdown.Item>
                    <Dropdown.Item>Initial Contact</Dropdown.Item>
                    <Dropdown.Item>Proposal Sent</Dropdown.Item>
                    <Dropdown.Item>Lost</Dropdown.Item>
                    <Dropdown.Item>Win</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Button variant="light"><FaEllipsisV /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container-fluid>
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            Deal 
          </Modal.Header>
          <Modal.Body>
           <DealForm />
          </Modal.Body>
        </Modal>
    </>

  );
};

export default Deal;
