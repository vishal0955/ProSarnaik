// import React from "react";
// import { initialEmployees } from "../Admin/EmployeeList";


// const AssignLeave = () => {
//   return (
//     <div className="container mt-4">
//       <h3 className="mb-3">Assign Leave</h3>
//       <form>
//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label className="form-label">Choose Member *</label>
//             <select className="form-select">
//                { initialEmployees.map((employee, index) => (
//                     <option key={index}>{employee.name}</option>
//                 ))}
//               <option>-- Select Member --</option>
//             </select>
//           </div>
//           <div className="col-md-6">
//             <label className="form-label">Leave Type *</label>
//             <div className="d-flex">
//               <select className="form-select me-2">
//                 <option>-- Select Leave Type --</option>
//               </select>
//               <button className="btn btn-primary">Add</button>
//             </div>
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label className="form-label">Select Duration</label>
//             <div className="d-flex flex-wrap">
//               <div className="form-check me-3">
//                 <input className="form-check-input" type="radio" name="duration" />
//                 <label className="form-check-label">Full Day</label>
//               </div>
//               <div className="form-check me-3">
//                 <input className="form-check-input" type="radio" name="duration" />
//                 <label className="form-check-label">Multiple</label>
//               </div>
//               <div className="form-check me-3">
//                 <input className="form-check-input" type="radio" name="duration" />
//                 <label className="form-check-label">First Half</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="duration" />
//                 <label className="form-check-label">Second Half</label>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <label className="form-label">Date</label>
//             <input type="date" className="form-control" />
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Reason for absence *</label>
//           <textarea className="form-control" placeholder="e.g. Feeling not well"></textarea>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Add File</label>
//           <input type="file" className="form-control" />
//         </div>

//         <div className="d-flex">
//           <button type="submit" className="btn btn-primary me-2">Save</button>
//           <button type="button" className="btn btn-secondary">Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AssignLeave;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AssignLeave = () => {
  const [formData, setFormData] = useState({
    member: "",
    leaveType: "",
    status: "Pending",
    duration: "Full Day",
    date: new Date().toISOString().split("T")[0],
    reason: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mt-4">
      <div className=" ">


        <form onSubmit={handleSubmit}>
          {/* Row 1: Member, Leave Type, Status */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Choose Member *</label>
              <select className="form-select" name="member" value={formData.member} onChange={handleChange} required>
                <option value="">-- Select Member --</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Leave Type *</label>
              <select className="form-select" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                <option value="">-- Select Leave Type --</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
              </select>
            </div>
       </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
            </div>
            </div>

          {/* Row 2: Duration & Date */}
          <div className="row mb-3">
            <div className="col-md-12">
              <label className="form-label">Select Duration</label>
              <div className="d-flex gap-5">
                {["Full Day", "Multiple", "First Half", "Second Half"].map((duration) => (
                  <div key={duration} className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="duration"
                      value={duration}
                      checked={formData.duration === duration}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{duration}</label>
                  </div>
                ))}
              </div>
            </div>
            </div>

           
          
          

          {/* Row 3: Reason for Absence */}
          <div className="mb-3">
            <label className="form-label">Reason for absence *</label>
            <textarea
              className="form-control"
              name="reason"
              placeholder="e.g. Feeling not well"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Row 4: File Upload */}
          <div className="mb-3">
            <label className="form-label">Add File</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignLeave;
