import React, { useState } from 'react';
import { Table, Button, Pagination, Dropdown, Modal } from 'react-bootstrap';
import QuoteCreation from '../Forms/QuoteCreation';

const QuoteTable = () => {
  const [quotes, setQuotes] = useState([
    { id: 1, quote: 'murtaza rasool', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 2, quote: 'Abdul', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 3, quote: 'Mujtaba', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' },
    { id: 4, quote: 'Khair', amount: '300$', status: 'Pending', owner: 'rose joy', createDate: '12-02-2025 12:23 GMT' },
    { id: 5, quote: 'Punnet', amount: '300$', status: 'Pending', owner: 'rony roy', createDate: '12-02-2025 12:23 GMT' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const quotesPerPage = 5;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const filteredQuotes = quotes.filter(
    (quote) => quote.quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredQuotes.length / quotesPerPage);
  const indexOfFirstQuote = (currentPage - 1) * quotesPerPage;
  const indexOfLastQuote = Math.min(indexOfFirstQuote + quotesPerPage, filteredQuotes.length);
  const currentQuotes = filteredQuotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid mt-4">
      <div className='d-flex flex-wrap justify-content-between align-items-center mb-3'>
        <h4 className='mb-0'>Quotes</h4>
        <Button variant="primary" onClick={handleModalOpen}>Create Quotes</Button>
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

      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Showing {indexOfFirstQuote + 1} to {indexOfLastQuote} of {filteredQuotes.length} entries
        </span>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePaginationClick(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePaginationClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePaginationClick(currentPage + 1)}
          />
        </Pagination>
      </div>

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
