import React, { useState } from "react";

const DesignerOvertimeCard = () => {
  const [formData, setFormData] = useState({
    name: "Cordia Rau",
    leaveType: "Sick Leave",
    date: "15-02-2025",
    duration: "Full Day",
    overtimeReason: "Urgent client work, deadline met",
    file: { name: "ExampleDocument.pdf" }, // Random file shown
  });

  const handleApproval = () => {
    alert("Overtime Approved");
  };

  const handleReject = () => {
    alert("Overtime Rejected");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h4 className="text-start mb-4">Designer Overtime Request</h4>
        <div className="mb-3">
          <strong>Designer Name:</strong> {formData.name}
        </div>
        <div className="mb-3">
          <strong>Leave Type:</strong> {formData.leaveType}
        </div>
        <div className="mb-3">
          <strong>Duration:</strong> {formData.duration}
        </div>
        <div className="mb-3">
          <strong>Start Date:</strong> {formData.date}
        </div>
        <div className="mb-3">
          <strong>Due Date:</strong> {formData.date}
        </div>
        <div className="mb-3">
          <strong>Overtime Reason:</strong> {formData.overtimeReason}
        </div>
        <div className="mb-3">
          <strong>File:</strong> <br />
          {formData.file && (
            <a href="#" onClick={(e) => e.preventDefault()}>
              {formData.file.name}
            </a>
          )}
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-success me-2" onClick={handleApproval}>
            Approve Overtime
          </button>
          <button type="button" className="btn btn-danger" onClick={handleReject}>
            Reject Overtime
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignerOvertimeCard;
