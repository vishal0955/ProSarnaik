import React from "react";
import { FaCheck } from "react-icons/fa";
import { initialEmployees } from "./EmployeeList";

function AddMembers() {

  return (
    <div>
      <div className="container">
        <div className="add-member-main">
          <h5> Add Project Member</h5>
          <hr />
          <div className="d-flex flex-wrap gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Choose Member
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Choose Department
              </label>
            </div>
          </div>

          <div className="mt-3">
            <h6>Add Project Member</h6>
            <select
              className="form-select w-100 w-md-auto"
              style={{ height: "40px", color: "grey" }}
            >
               {initialEmployees.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
          
            </select>
            <hr />
          </div>

          <div className="d-flex justify-content-end gap-2 flex-wrap">
            <button className="btn w-md-auto">
              Close
            </button>
            <button className="btn btn-primary w-md-auto">
              <FaCheck /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMembers;
