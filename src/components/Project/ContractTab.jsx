import React , {useState} from "react";
import { Table, Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import ContractForm from "../Forms/ContractForm";


const contracts = [
  { id: "CONT#010", subject: "Sir, With no jury.", client: "Furman Harber", company: "Roberts and Sons", amount: "$260.00", startDate: "03-01-2025", endDate: "01-03-2025" },
  { id: "CONT#009", subject: "So she tucked her.", client: "Furman Harber", company: "Roberts and Sons", amount: "$477.00", startDate: "01-01-2025", endDate: "29-06-2025" },
  { id: "CONT#008", subject: "Mystery,' the Mock.", client: "Cecile Brown", company: "Senger PLC", amount: "$899.00", startDate: "11-01-2025", endDate: "29-04-2025" },
  { id: "CONT#007", subject: "Hatter opened his.", client: "Cecile Brown", company: "Senger PLC", amount: "$386.00", startDate: "19-01-2025", endDate: "01-03-2025" },
  { id: "CONT#006", subject: "CHAPTER VIII. The.", client: "Cecile Brown", company: "Senger PLC", amount: "$628.00", startDate: "10-01-2025", endDate: "29-04-2025" },
  { id: "CONT#005", subject: "Knave, 'I didn't.", client: "Jacey Grimes", company: "Greenfelder-O'Kon", amount: "$503.00", startDate: "08-01-2025", endDate: "01-03-2025" },
  { id: "CONT#004", subject: "WOULD go with the.", client: "Prof. Eloise Labadie IV", company: "Christiansen-Streich", amount: "$761.00", startDate: "06-01-2025", endDate: "29-04-2025" },
  { id: "CONT#003", subject: "I can't see you?'", client: "Jacey Grimes", company: "Greenfelder-O'Kon", amount: "$306.00", startDate: "05-01-2025", endDate: "29-03-2025" },
  { id: "CONT#002", subject: "Some of the hall.", client: "Prof. Eloise Labadie IV", company: "Christiansen-Streich", amount: "$183.00", startDate: "22-01-2025", endDate: "29-06-2025" },
  { id: "CONT#001", subject: "She was looking up.", client: "Cecile Brown", company: "Senger PLC", amount: "$974.00", startDate: "26-01-2025", endDate: "01-03-2025" },
];

const ContractTab = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={() => setShowModal(true)} >+ Create Contract</Button>
        <div>
          <Button variant="secondary" className="me-2">Contract Template</Button>
          <Button variant="outline-secondary">Export</Button>
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Client</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.subject}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={`https://i.pravatar.cc/30?img=${index + 1}`}
                    alt="Avatar"
                    className="rounded-circle me-2"
                    width="30"
                    height="30"
                  />
                  <div>
                    <strong>{contract.client}</strong>
                    <br />
                    <small className="text-muted">{contract.company}</small>
                  </div>
                </div>
              </td>
              <td>--</td>
              <td>{contract.amount}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td>
                <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="⋮" align="end">
                  <Dropdown.Item href="#">Edit</Dropdown.Item>
                  <Dropdown.Item href="#">Delete</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between">
        <span>Showing 1 to {contracts.length} of {contracts.length} entries</span>
        <div>
          <Button variant="outline-secondary" size="sm" disabled>Previous</Button>
          <Button variant="primary" size="sm" className="ms-2">1</Button>
          <Button variant="outline-secondary" size="sm" disabled className="ms-2">Next</Button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ContractForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContractTab;
