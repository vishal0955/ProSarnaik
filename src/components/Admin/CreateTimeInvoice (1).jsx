import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table, Card } from "react-bootstrap";

const CreateTimeInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "INV#40",
    project: "Chatbots",
    client: "Kailee Kuvalis",
    invoiceDate: "2026-02-11",
    dueDate: "2026-02-26",
    timeLogFrom: "2026-02-04",
    timeLogTo: "2026-02-11",
    currency: "USD ($)",
    exchangeRate: 1,
    taxCalculation: "After Discount",
    generatedBy: "Worksuite",
    discount: 0,
    tax: 0,
    subTotal: 0,
    total: 0,
    note: "Thank you for your business",
  });

  const [items, setItems] = useState([
    { id: 1, name: "", description: "", quantity: 1, unitPrice: 0, tax: 0, amount: 0 },
  ]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  // Handle invoice items change
  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    let newItems = [...items];
    newItems[index][name] = value;
    newItems[index].amount = newItems[index].quantity * newItems[index].unitPrice;
    setItems(newItems);
  };

  // Add new item row
  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: "", quantity: 1, unitPrice: 0, tax: 0, amount: 0 }]);
  };

  // Remove item row
  const removeItem = (index) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow-sm">


        {/* Invoice Details */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Invoice Number *</Form.Label>
              <Form.Control type="text" name="invoiceNumber" value={invoiceData.invoiceNumber} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Project</Form.Label>
              <Form.Control type="text" name="project" value={invoiceData.project} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Client</Form.Label>
              <Form.Control type="text" name="client" value={invoiceData.client} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control type="date" name="invoiceDate" value={invoiceData.invoiceDate} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>

        {/* Date & Currency Details */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" value={invoiceData.dueDate} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Time Log From</Form.Label>
              <Form.Control type="date" name="timeLogFrom" value={invoiceData.timeLogFrom} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Time Log To</Form.Label>
              <Form.Control type="date" name="timeLogTo" value={invoiceData.timeLogTo} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Select name="currency" value={invoiceData.currency} onChange={handleInputChange}>
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>INR (₹)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Invoice Items */}
        <Table  responsive striped bordered hover variant="" className="mt-3">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Control type="text" name="name" value={item.name} onChange={(e) => handleItemChange(index, e)} />
                </td>
                <td>
                  <Form.Control type="number" name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} />
                </td>
                <td>
                  <Form.Control type="number" name="unitPrice" value={item.unitPrice} onChange={(e) => handleItemChange(index, e)} />
                </td>
                <td>
                  <Form.Control type="number" name="tax" value={item.tax} onChange={(e) => handleItemChange(index, e)} />
                </td>
                <td>{item.amount.toFixed(2)}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => removeItem(index)}>X</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={addItem} style={{width:'125px',height:'45px'}}>+ Add Item</Button>

        {/* Totals */}
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Note for Recipient</Form.Label>
              <Form.Control as="textarea" name="note" value={invoiceData.note} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <Table bordered variant="">
              <tbody>
                <tr>
                  <td>Sub Total</td>
                  <td>{invoiceData.subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td><Form.Control type="number" name="discount" value={invoiceData.discount} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td><Form.Control type="number" name="tax" value={invoiceData.tax} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{invoiceData.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* Save Button */}
        
      </Card>
      <div className="d-flex gap-2">
      <Button variant="success mt-4">Save </Button>
      <Button variant=" mt-4 me-4">Cancel</Button>
      </div>
    </Container>
  );
};

export default CreateTimeInvoice;
