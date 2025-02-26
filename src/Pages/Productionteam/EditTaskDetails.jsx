import React, { useState } from "react";
import { FaClock, FaPlay, FaFileUpload,FaCheck } from "react-icons/fa";


const assignees = ["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"];

const TaskDetailsForm = () => {
    const statuses = ["Pending", "Completed", "In Progress", "To Start", "On Hold", "Cancelled"];
  const [formData, setFormData] = useState({
    project: "Transcription of Obey Me!",
    priority: "Medium",
    assignee: assignees[0],
    milestones: "Transcribe First 10 Lessons",
    assignedBy: "Tyreek Auer (Senior)",
    description: "Transcribe lesson 2.",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Task #2 - Transcribe Lesson 2</h4>
        <form>
        <div className="d-flex align-items-center mb-3">
                       <button type="button" className="btn btn-primary btn-sm ms-3">
           <FaCheck className="me-2 text-white" /> <span className="fw-bold">Mark as Completed</span>
            </button>
             <button type="button" className="btn btn-primary btn-sm ms-3">
                < span>Post For Review</span>
             </button>
           </div>

          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <label className="form-label fw-semibold">Project</label>
                <input type="text" className="form-control" name="project" value={formData.project} onChange={handleChange} />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold">Priority</label>
                <select className="form-select" name="priority" value={formData.priority} onChange={handleChange}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Assignee</label>
                <select className="form-select" name="assignee" value={formData.assignee} onChange={handleChange}>
                  {assignees.map((assignee, index) => (
                    <option key={index} value={assignee}>{assignee}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Milestones</label>
                <input type="text" className="form-control" name="milestones" value={formData.milestones} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Assigned By</label>
                <input type="text" className="form-control" name="assignedBy" value={formData.assignedBy} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea className="form-control" name="description" rows="2" value={formData.description} onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 bg-light border rounded">
              <label className="form-label fw-semibold">Status</label>
                <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
                <p className="mb-1"><b>Created On:</b> 10-02-2025 10:26 PM</p>
                <p className="mb-1"><b>Start Date:</b> 10-02-2025</p>
                <p className="mb-1"><b>Hours Logged:</b> 25m</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#files">Files</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#subtask">Sub Task</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#timesheet">Timesheet</a>
              </li>
            </ul>
            <div className="tab-content mt-3">
              <div className="tab-pane fade show active" id="files">
                <p>No file uploaded.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">
                  <FaFileUpload className="me-1" /> Upload File
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-success">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetailsForm;



// import React, { useState } from "react";
// import { FaClock, FaPlay, FaFileUpload, FaCheck } from "react-icons/fa";


// const assignees = ["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"];

// const TaskDetailsForm = () => {
//   const [selectedAssignee, setSelectedAssignee] = useState(assignees[0]);

//   const handleAssigneeChange = (event) => {
//     setSelectedAssignee(event.target.value);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="card shadow-sm p-4">
//         <h4 className="mb-3">Task #2 - Design Lesson</h4>
//         <form>
//           <div className="d-flex align-items-center mb-3">
           
//             <button type="button" className="btn btn-primary btn-sm ms-3">
//             <FaCheck className="me-2 text-white" /> <span className="fw-bold">Mark as Completed</span>
//             </button>
//             <button type="button" className="btn btn-primary btn-sm ms-3">
//                < span>Post For Review</span>
//             </button>
//           </div>

//           <div className="row">
//             <div className="col-md-8">
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Project</label>
//                 <input type="text" className="form-control" value="Transcription of Obey Me!" readOnly />
//               </div>
              
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Priority</label>
//                 <select className="form-select">
//                   <option value="High">High</option>
//                   <option value="Medium" selected>Medium</option>
//                   <option value="Low">Low</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Assignee</label>
//                 <select className="form-select" value={selectedAssignee} onChange={handleAssigneeChange}>
//                   {assignees.map((assignee, index) => (
//                     <option key={index} value={assignee}>{assignee}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Milestones</label>
//                 <input type="text" className="form-control" value="Transcribe First 10 Lessons" readOnly />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Assigned By</label>
//                 <input type="text" className="form-control" value="Tyreek Auer (Senior)" readOnly />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Description</label>
//                 <textarea className="form-control" rows="2" readOnly>Transcribe lesson 2.</textarea>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card p-3 bg-light border rounded">
//                 <h6 className="text-primary">Doing</h6>
//                 <p className="mb-1"><b>Created On:</b> 10-02-2025 10:26 PM</p>
//                 <p className="mb-1"><b>Start Date:</b> 10-02-2025</p>
//                 <p className="mb-1"><b>Hours Logged:</b> 25m</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4">
//             <ul className="nav nav-tabs" role="tablist">
//               <li className="nav-item">
//                 <a className="nav-link active" data-bs-toggle="tab" href="#files">Files</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#subtask">Sub Task</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#timesheet">Timesheet</a>
//               </li>
//             </ul>
//             <div className="tab-content mt-3">
//               <div className="tab-pane fade show active" id="files">
//                 <p>No file uploaded.</p>
//                 <button type="button" className="btn btn-outline-primary btn-sm">
//                   <FaFileUpload className="me-1" /> Upload File
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-3 d-flex justify-content-end">
//             <button type="submit" className="btn btn-success">Save Changes</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TaskDetailsForm;
