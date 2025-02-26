import React from 'react';

function TimeSheetDetail() {
  return (
    <div className="container-fluid mt-4">
      <h4 className="fw-bold"></h4>
      <div className="row g-3">
        {/* Left Column: TimeLog Details */}
        <div className="col-md-8">
          <div className="card p-4" style={{ borderRadius: 10, border: "none", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <h5 className="fw-bold">Time Log Details</h5>
            <hr />
            <div className="table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr><td className="text-muted">Start Time:</td> <td className="fw-bold">17-01-2025 07:56 AM</td></tr>
                  <tr><td className="text-muted">End Time:</td> <td className="fw-bold">17-01-2025 11:56 AM</td></tr>
                  <tr><td className="text-muted">Total Hours:</td> <td className="fw-bold">4h</td></tr>
                  <tr><td className="text-muted">Earnings:</td> <td className="fw-bold">$396.00</td></tr>
                  <tr><td className="text-muted">Memo:</td> <td className="fw-bold">Working on project tasks</td></tr>
                  <tr><td className="text-muted">Project:</td> <td className="fw-bold">Email marketing and newsletter service</td></tr>
                  <tr><td className="text-muted">Task:</td> <td className="fw-bold">Alice: 'Allow me.'</td></tr>
                  <tr>
                    <td className="text-muted">Employee:</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://i.pravatar.cc/300"
                          className="rounded-circle me-3"
                          style={{ width: 50, height: 50, objectFit: "cover" }}
                          alt="Employee"
                        />
                        <div>
                          <strong>Tyreek Auer</strong> <br />
                          <span className="badge bg-secondary">It's you</span>
                          <p className="small text-muted mb-0">Senior Developer</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: History */}
        <div className="col-md-4">
          <div className="card p-4" style={{ borderRadius: 10, border: "none", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <h6 className="fw-bold">History</h6>
            <hr />
            <div className="table-responsive">
              <table className="table border">
                <tbody>
                  <tr>
                    <td className="text-muted"><i className="fas fa-clock me-2"></i>Start Time</td>
                    <td className="fw-bold text-end">17-01-2025 07:56 AM</td>
                  </tr>
                  <tr>
                    <td className="text-muted"><i className="fas fa-briefcase me-2"></i>Task</td>
                    <td className="fw-bold text-end">Alice: 'Allow me.'</td>
                  </tr>
                  <tr>
                    <td className="text-muted"><i className="fas fa-clock me-2"></i>End Time</td>
                    <td className="fw-bold text-end">17-01-2025 11:56 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSheetDetail;
