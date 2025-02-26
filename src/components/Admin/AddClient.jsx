import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddClient = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    password: "",
    country: "",
    mobile: "",
    gender: "Male",
    companyName: "",
    website: "",
    taxName: "",
    gstNumber: "",
    city: "",
    state: "",
    postalCode: "",
    companyAddress: "",
    shippingAddress: "",
    note: "",
    profilePicture: null,
    companyLogo: null,
    receiveNotifications: "Yes",
    loginAllowed: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  return (
    <div className="container mt-4">
     
      <Form className="p-3 p-md-4 bg-light shadow-sm rounded">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Client Name *</Form.Label>
              <Form.Control type="text" placeholder="e.g. John Doe" name="clientName" value={formData.clientName} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="e.g. john@example.com" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Minimum 8 characters" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="tel" placeholder="e.g. +1234567890" name="mobile" value={formData.mobile} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="India">India</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mt-4 text-center text-md-start">Company Details</h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. Acme Corporation" name="companyName" value={formData.companyName} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Official Website</Form.Label>
              <Form.Control type="url" placeholder="e.g. https://www.example.com" name="website" value={formData.website} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tax Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. GST/VAT" name="taxName" value={formData.taxName} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>GST/VAT Number</Form.Label>
              <Form.Control type="text" placeholder="e.g. 18AABCU960000XX" name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Company Address</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="e.g. 132, My Street, New York" name="companyAddress" value={formData.companyAddress} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="e.g. 132, My Street, Kingston" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mt-4 text-center text-md-start">Uploads</h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" name="profilePicture" onChange={handleFileChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Company Logo</Form.Label>
              <Form.Control type="file" name="companyLogo" onChange={handleFileChange} />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="primary" type="submit" className="w-100 w-md-auto">
            Save
          </Button>
          <Button variant="light" className="ms-2 w-100 w-md-auto">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddClient;
