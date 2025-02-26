import React from "react";
import { Container, Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaUpload } from "react-icons/fa";

const DealDetails = () => {
  return (
    <div className="deal-detail-section mt-4 mb-4">
      <Container fluid>
        <h5>Justine Franecki-11</h5>
        <Row className="mt-4">
          {/* Left Section - Deal Info */}
          <Col lg={8} md={12}>
            <Card className="p-4 shadow-sm">
              <h5 className="fw-bold">Deal Info</h5>
              <p>
                <strong className="text-primary">Sales Pipeline</strong> ➝{" "}
                <span className="text-warning">Generated</span>
              </p>
              <hr />
              <Row>
              <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td><strong>Deal Name:</strong></td>
                  <td>Justine Franecki-11</td>
                </tr>
                <tr>
                  <td><strong>Lead Contact:</strong></td>
                  <td>Justine Franecki</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>fake@example.com</td>
                </tr>
                <tr>
                  <td><strong>Company Name:</strong></td>
                  <td>Sipes, Terry and Predovic</td>
                </tr>
                <tr>
                  <td><strong>Deal Category:</strong></td>
                  <td>--</td>
                </tr>
                <tr>
                  <td><strong>Deal Agent:</strong></td>
                  <td>Martina Nikolaus : Project Manager</td>
                </tr>
                <tr>
                  <td><strong>Deal Watcher:</strong></td>
                  <td>--</td>
                </tr>
                <tr>
                  <td><strong>Close Date:</strong></td>
                  <td>--</td>
                </tr>
                <tr>
                  <td><strong>Deal Value:</strong></td>
                  <td className="fw-bold text-success">$95,824.00</td>
                </tr>
                <tr>
                  <td><strong>Products:</strong></td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
              </Row>
            </Card>
          </Col>

          {/* Right Section - Lead Contact Details */}
          <Col lg={4} md={12}>
            <Card className="p-4 shadow-sm">
            <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td><strong>Lead Contact:</strong></td>
                  <td>Justine Franecki</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>fake@example.com</td>
                </tr>
                <tr>
                  <td><strong>Mobile:</strong></td>
                  <td>+1-281-987-8833</td>
                </tr>
                <tr>
                  <td><strong>Company Name:</strong></td>
                  <td>Sipes, Terry and Predovic</td>
                </tr>
              </tbody>
            </table>
          </div>
              <div>
                <Button variant="outline-primary" className="me-2" style={{width:'90px', height: "40px"
                }}>
                  <FaEnvelope /> Email
                </Button>
                <Button variant="outline-secondary">
                  <FaPhone /> Mobile
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Tabs Section */}
        <Card className="mt-4 shadow-sm">
          <Tab.Container defaultActiveKey="files">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="files">Files</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="followup">Follow Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="proposal">Proposal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notes">Notes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="history">History</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="p-3 mb-3">
              {/* File Upload Section */}
              <Tab.Pane eventKey="files">
                <Button variant="outline-primary">
                  <FaUpload /> Upload File
                </Button>
                <p className="mt-3 text-muted">- No file uploaded. -</p>
              </Tab.Pane>
              <Tab.Pane eventKey="followup">No Follow-ups yet</Tab.Pane>
              <Tab.Pane eventKey="proposal">No Proposals added</Tab.Pane>
              <Tab.Pane eventKey="notes">No Notes available</Tab.Pane>
              <Tab.Pane eventKey="history">No History found</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Container>
    </div>
  );
};

export default DealDetails;
