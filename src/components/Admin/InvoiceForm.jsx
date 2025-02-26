import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "INV#002",
    invoiceDate: "2024-12-01",
    dueDate: "2024-12-11",
    currency: "USD ($)",
    exchangeRate: 1,
    client: "Kailee Kuvalis",
    project: "Chatbots",
    taxCalculation: "After Discount",
    bankAccount: "Primary Account | Bayer, Lueilwitz and Von",
    paymentDetails: "--",
    billingAddress: "571 Borer Extensions Suite 416, South Jaylinside, DC 67528",
    shippingAddress: "",
    generatedBy: "Worksuite",
  });

  // Function to update input fields dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow-sm ">
        <h5 className="mb-3">Invoice Details</h5>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Invoice Number *</Form.Label>
              <Form.Control 
                type="text" 
                name="invoiceNumber" 
                value={invoiceData.invoiceNumber} 
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control 
                type="date" 
                name="invoiceDate" 
                value={invoiceData.invoiceDate} 
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Due Date</Form.Label>
              <Form.Control 
                type="date" 
                name="dueDate" 
                value={invoiceData.dueDate} 
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Select 
                name="currency" 
                value={invoiceData.currency} 
                onChange={handleInputChange}
              >
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>INR (₹)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Exchange Rate *</Form.Label>
              <Form.Control 
                type="number" 
                name="exchangeRate" 
                value={invoiceData.exchangeRate} 
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Client *</Form.Label>
              <Form.Control 
                type="text" 
                name="client" 
                value={invoiceData.client} 
                onChange={handleInputChange} 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Project</Form.Label>
              <Form.Select 
                name="project" 
                value={invoiceData.project} 
                onChange={handleInputChange}
              >
                <option>Chatbots</option>
                <option>Web Development</option>
                <option>AI Integration</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Calculate Tax</Form.Label>
              <Form.Select 
                name="taxCalculation" 
                value={invoiceData.taxCalculation} 
                onChange={handleInputChange}
              >
                <option>Before Discount</option>
                <option>After Discount</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Bank Account</Form.Label>
              <Form.Select 
                name="bankAccount" 
                value={invoiceData.bankAccount} 
                onChange={handleInputChange}
              >
                <option>Primary Account | Bayer, Lueilwitz and Von</option>
                <option>Secondary Account | XYZ Bank</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Payment Details</Form.Label>
              <Form.Select 
                name="paymentDetails" 
                value={invoiceData.paymentDetails} 
                onChange={handleInputChange}
              >
                <option>--</option>
                <option>Credit Card</option>
                <option>Bank Transfer</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Billing Address</Form.Label>
              <Form.Control 
                as="textarea" 
                name="billingAddress" 
                value={invoiceData.billingAddress} 
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control 
                as="textarea" 
                name="shippingAddress" 
                value={invoiceData.shippingAddress} 
                onChange={handleInputChange}
                placeholder="Enter Shipping Address"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Generated By</Form.Label>
              <Form.Select 
                name="generatedBy" 
                value={invoiceData.generatedBy} 
                onChange={handleInputChange}
              >
                <option>Worksuite</option>
                <option>Admin Panel</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Button variant="primary">Save Invoice</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default InvoiceForm;
