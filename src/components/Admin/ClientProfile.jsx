import React from "react";
import { useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-3 py-3">
      <div className="row g-3">
        {/* Left Section */}
        <div className="col-lg-8 col-md-12">
          {/* Profile Card */}
          <div className="p-3 border rounded bg-white d-flex flex-column flex-md-row align-items-center">
            <div className="me-0 me-md-3 mb-2 mb-md-0 text-center text-md-start">
              <img
                src="https://i.pravatar.cc/300?u=modesta.johnson@example.net2"
                alt="Profile Picture"
                className="rounded-circle img-fluid"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            </div>
            <div className="flex-grow-1 text-center text-md-start mt-4">
              <h5>Giles Conn</h5>
              <p className="mb-1 text-muted">
                Senior - Research | User Role: Employee
              </p>
              <small className="text-muted">Last Login: --</small>
              <div className="row mt-3 text-center">
                <div
                  className="col-6 col-sm-3"
                  onClick={() => navigate("/tasklist")}
                >
                  <h6 className="mb-1">Open Tasks</h6>
                  <p className="fw-bold mb-0">4</p>
                </div>
                <div
                  className="col-6 col-sm-3"
                  onClick={() => navigate("/project")}
                >
                  <h6 className="mb-1">Projects</h6>
                  <p className="fw-bold mb-0">2</p>
                </div>
                <div className="col-6 col-sm-3 mt-3 mt-sm-0">
                  <h6 className="mb-1">Hours Logged</h6>
                  <p className="fw-bold mb-0">0</p>
                </div>
                <div className="col-6 col-sm-3 mt-3 mt-sm-0">
                  <h6 className="mb-1">Tickets</h6>
                  <p className="fw-bold mb-0">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white border rounded p-3 mt-3">
            <h5>About</h5>
            <p>I am superhuman</p>
          </div>

          {/* Profile Info */}
          <div className="bg-white border rounded p-3 mt-3">
            <h5>Profile Info</h5>
            <div className="table-responsive">
              {" "}
              {/* Add this wrapper */}
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <strong>Employee ID</strong>
                    </td>
                    <td>EMP-3</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Full Name</strong>
                    </td>
                    <td>Giles Conn</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Designation</strong>
                    </td>
                    <td>Senior</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Department</strong>
                    </td>
                    <td>Research</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gender</strong>
                    </td>
                    <td>♂ Male</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Work Anniversary</strong>
                    </td>
                    <td>2 months from now</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td>modesta.johnson@example.net2</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hourly Rate</strong>
                    </td>
                    <td>$74</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address</strong>
                    </td>
                    <td>11960 Kyleigh Cove Suite 484 Octaviaborgh, AL 75404</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language</strong>
                    </td>
                    <td>English</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Marital Status</strong>
                    </td>
                    <td>Single</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Joining Date</strong>
                    </td>
                    <td>29-04-2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-4 col-md-12">
          <div className="bg-white border rounded p-3 mb-3">
            <h6>Appreciation</h6>
            <p>
              <i className="fa-regular fa-thumbs-up"></i>
            </p>
          </div>

          <div className="row g-2 bg-white border rounded p-3">
            <div className="col-6">
              <h6>Reporting To</h6>
              <p>--</p>
            </div>
            <div className="col-6">
              <h6>Reporting Team</h6>
              <p>--</p>
            </div>
          </div>

          <div className="row g-2 mt-2">
            <div className="col-6">
              <div className="bg-white border rounded p-3">
                <h6>Late Attendance</h6>
                <p>0</p>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-white border rounded p-3">
                <h6>Leaves Taken</h6>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded p-3 mt-2">
            <h6>Tasks</h6>
            <p>--</p>
          </div>

          <div className="bg-white border rounded p-3 mt-2">
            <h6>Tickets</h6>
            <p>- Not enough data -</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
