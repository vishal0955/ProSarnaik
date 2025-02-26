import React, { useState } from 'react';
import { Table, Button, Pagination, Dropdown, Modal } from 'react-bootstrap';
import QuoteCreation from '../Forms/QuoteCreation';


const QuoteTable = () => {
  const [quotes, setQuotes] = useState([
    { id: 1, quote: 'murtaza rasool', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 2, quote: 'Abdul', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 3, quote: 'Mujtaba', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 4, quote: 'Khair', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 5, quote: 'Punnet', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 1, quote: 'murtaza rasool', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 2, quote: 'Abdul', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 3, quote: 'Mujtaba', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 4, quote: 'Khair', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 5, quote: 'Punnet', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' }
  
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const quotesPerPage = 15;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const filteredQuotes = quotes.filter(
    (quote) => quote.quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredQuotes.length / quotesPerPage);
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = filteredQuotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className='d-flex flex-wrap justify-content-between align-items-center mb-3'>
        <h4 className='mb-0'>Quotes</h4>
        <Button variant="primary" onClick={handleModalOpen}>Create Quotes</Button>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
        <input
          className="form-control flex-grow-1 w-50"
          type="search"
          placeholder="Search all quotes"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="statusDropdown">
            Status All
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Pending</Dropdown.Item>
            <Dropdown.Item>Completed</Dropdown.Item>
            <Dropdown.Item>Archived</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="ownerDropdown">
            Owners
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Rony Roy</Dropdown.Item>
            <Dropdown.Item>Rose Joy</Dropdown.Item>
            <Dropdown.Item>Other Owner</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="archiveStatusDropdown">
            Archive Status
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Active</Dropdown.Item>
            <Dropdown.Item>Archived</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Quote Amount</th>
            <th>Status</th>
            <th>Quote Owner</th>
            <th>Create Date</th>
          </tr>
        </thead>
        <tbody>
          {currentQuotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.quote}</td>
              <td>{quote.amount}</td>
              <td>{quote.status}</td>
              <td>{quote.owner}</td>
              <td>{quote.createDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePaginationClick(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QuoteCreation />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default QuoteTable;
