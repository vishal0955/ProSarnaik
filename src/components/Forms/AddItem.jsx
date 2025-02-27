import React, { useState, useEffect } from "react";
import { initialEmployees } from "../Admin/EmployeeList";

const TaskForm = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Load employees from initialEmployees array
    setEmployees(initialEmployees);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // Add form data handling logic here
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Side Fields */}
          <div className="col-md-6">
            {["Job ID", "Project Id", "Project Name", "Client", "Promotion", "Brand", "Sub-Brand", "Flavour", "Pack Type", "Pack Size"].map((label, index) => (
              <div className="mb-2" key={index}>
                <label className="form-label">{label}</label>
                <input type="text" className="form-control" />
              </div>
            ))}
          </div>

          {/* Right Side Fields */}
          <div className="col-md-6">
            {[
              { label: "Date Created", type: "date" },
              { label: "Target Date", type: "date" },
              { label: "Pack Code", type: "text" },
              { label: "FG Code", type: "text" },
              { label: "Barcode", type: "text" },
              { label: "TD No.", type: "text" },
              { label: "Dimensions", type: "text" },
              { label: "Trim Size", type: "text" },
              { label: "No. of Colours", type: "text" },
              { label: "Print Process", type: "text" }
            ].map((field, index) => (
              <div className="mb-2" key={index}>
                <label className="form-label">{field.label}</label>
                <input type={field.type} className="form-control" />
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Members Dropdown */}
        <div className="mb-3">
          <label className="form-label">Assign Members</label>
          <select className="form-select" defaultValue="">
            <option value="" disabled>
              Select a member
            </option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.employeeId}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        {/* File Uploads and Links */}
        {[
          { label: "Instructions", type: "file", multiple: false },
          { label: "3D Files", type: "file", multiple: true },
          { label: "PDF Files", type: "file", multiple: true }
        ].map((fileInput, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{fileInput.label}:</label>
            <input type={fileInput.type} className="form-control" multiple={fileInput.multiple} />
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label">Links:</label>
          <input type="url" className="form-control" placeholder="Add a link" />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-primary">
            Save & Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save & Add...
          </button>
          <button type="button" className="btn btn-danger">
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
