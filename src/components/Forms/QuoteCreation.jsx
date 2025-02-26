import React, { useState } from 'react';
import { Form, Button, Col, Row, Card, InputGroup } from 'react-bootstrap';

const QuoteCreation = () => {
  const [quoteData, setQuoteData] = useState({
    clientName: '',
    product: '',
    price: '',
    quantity: '1',
    status: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote created:', quoteData);
    // Reset form after submission
    setQuoteData({
      clientName: '',
      product: '',
      price: '',
      quantity: '1',
      status: '',
      date: '',
    });
  };

  return (
    <Card className="p-4">
      <h3 className="mb-4">Create a Quote</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="clientName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                name="clientName"
                value={quoteData.clientName}
                onChange={handleInputChange}
                placeholder="Enter client's name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="product">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                name="product"
                value={quoteData.product}
                onChange={handleInputChange}
                placeholder="Enter product name"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={quoteData.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
                <option value="archived">Archived</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={quoteData.date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <InputGroup>
                <InputGroup.Text>₹</InputGroup.Text>
                <Form.Control
                  type="number"
                  name="price"
                  value={quoteData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  required
                  min="0"
                  step="0.01"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Select
                name="quantity"
                value={quoteData.quantity}
                onChange={handleInputChange}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default QuoteCreation;
