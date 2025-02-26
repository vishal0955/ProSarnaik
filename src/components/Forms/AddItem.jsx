import React, { useState, useEffect } from "react";
import { initialEmployees } from "../Admin/EmployeeList";

const TaskForm = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Load employees from initialEmployees array
    setEmployees(initialEmployees);
  }, []);

  return (
    <div className="container mt-4">
      <form>
        <div className="row">
          {/* Left Side Fields */}
          <div className="col-md-6">
            <div className="mb-2">
              <label className="form-label">Job ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Project Id</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Project Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Client</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Promotion</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Brand</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Sub-Brand</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Flavour</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Type</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Size</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          {/* Right Side Fields */}
          <div className="col-md-6">
            <div className="mb-2">
              <label className="form-label">Date Created</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Target Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Pack Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">FG Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Barcode</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">TD No.</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Dimensions</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Trim Size</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">No. of Colours</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Print Process</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        {/* Assigned Members Dropdown */}
        <div className="mb-3">
          <label className="form-label">Assign Members</label>
          <select className="form-select">
            <option>Nothing selected</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.employeeId}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        {/* Instructions & Attachments */}
        <div className="mb-3">
          <label className="form-label">Instructions:</label>
          <div className="d-flex">
            <input type="file" className="form-control me-2" />
          </div>
        </div>

        {/* 3D Files Upload */}
        <div className="mb-3">
          <label className="form-label">3D Files:</label>
          <div className="d-flex">
            <input type="file" className="form-control me-2" multiple />
          </div>
        </div>

        {/* PDF Files Upload */}
        <div className="mb-3">
          <label className="form-label">PDF Files:</label>
          <div className="d-flex">
            <input type="file" className="form-control me-2" multiple />
          </div>
        </div>

        {/* Links */}
        <div className="mb-3">
          <label className="form-label">Links:</label>
          <div className="d-flex">
            <input type="url" className="form-control me-2" placeholder="Add a link" />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-primary">Save & Close</button>
          <button type="submit" className="btn btn-primary">Save & Add...</button>
          <button type="button" className="btn btn-danger">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;