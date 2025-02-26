import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const LeadDetail = () => {
  return (
    <Container fluid>
      <Card className="p-4 mt-4">
        <h5 className="fw-bold">Lead Info</h5>

        <div className="bg-white border rounded p-3 mt-3">
           
            <div className="table-responsive">
              {" "}
              {/* Add this wrapper */}
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <strong>Name:</strong>
                    </td>
                    <td>Alvina Tillman</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email:</strong>
                    </td>
                    <td>
                    fake@example.com</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Lead Owner :</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Source :</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Company Name:</strong>
                    </td>
                    <td>Reynolds-Webe</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <strong>Website :</strong>
                    </td>
                    <td>https://worksuite.biz</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <strong>Mobile :</strong>
                    </td>
                    <td>1-951-627-1151</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Office Phone Number:</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Country:</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>State:</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>City:</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Postal Code:</strong>
                    </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address:</strong>
                    </td>
                    <td> 535 Kunde Street East Emilie, MN 13478-4241</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      
      </Card>
    </Container>
  );
};

export default LeadDetail;
