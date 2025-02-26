import React, { useState } from "react";

const DesignerLeaveForm = () => {
  const [formData, setFormData] = useState({
    name: "Cordia Rau",
    leaveType: "",
    date: "15-02-2025",
    duration: "Full Day",
    reason: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
   
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" value={formData.name} onChange={(e) => handleChange(e)} name="name" />
          </div>

          {/* Leave Type and Duration */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Leave Type <span className="text-danger">*</span></label>
              <select className="form-select" name="leaveType" onChange={handleChange} required>
                <option value="">-- Select Leave Type --</option>
                <option value="sick">Sick Leave</option>
                <option value="casual">Casual Leave</option>
                <option value="annual">Annual Leave</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Select Duration</label>
              <div className="d-flex align-items-center">
                {["Full Day", "Multiple", "First Half", "Second Half"].map((option) => (
                  <div className="form-check me-3" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="duration"
                      value={option}
                      checked={formData.duration === option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Date Field */}
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="text" className="form-control" value={formData.date} disabled />
          </div>

          {/* Reason for Absence */}
          <div className="mb-3">
            <label className="form-label">Reason for Absence <span className="text-danger">*</span></label>
            <textarea
              className="form-control"
              name="reason"
              placeholder="e.g. Feeling not well"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">Add File <span className="text-muted">(Optional)</span></label>
            <input type="file" className="form-control" name="file" onChange={handleChange} />
          </div>

          {/* Submit & Cancel Buttons */}
          <div className="d-flex">
            <button type="submit" className="btn btn-primary me-2">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesignerLeaveForm;
