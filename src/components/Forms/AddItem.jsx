// // import React from "react";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // const TaskForm = () => {
// //   return (
// //     <div className="container mt-4">
// //       <h4>Add Task</h4>
// //       <div className="card p-4">
// //         <h5>Task Info</h5>
// //         <form>
// //           <div className="mb-3">
// //             <label className="form-label">Title <span className="text-danger">*</span></label>
// //             <input type="text" className="form-control" placeholder="Enter a task title" />
// //           </div>
          
// //           <div className="row">
// //             <div className="col-md-6 mb-3">
// //               <label className="form-label">Project</label>
// //               <select className="form-select">
// //                 <option>--</option>
// //               </select>
// //             </div>
// //             <div className="col-md-6 mb-3">
// //               <label className="form-label">Task category</label>
// //               <div className="input-group">
// //                 <select className="form-select">
// //                   <option>--</option>
// //                 </select>
// //                 <button className="btn btn-outline-secondary">Add</button>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="row">
// //             <div className="col-md-6 mb-3">
// //               <label className="form-label">Start Date <span className="text-danger">*</span></label>
// //               <input type="date" className="form-control" defaultValue="2025-02-08" />
// //             </div>
// //             <div className="col-md-6 mb-3">
// //               <label className="form-label">Due Date <span className="text-danger">*</span></label>
// //               <input type="date" className="form-control" defaultValue="2025-02-08" />
// //             </div>
// //           </div>
          
// //           <div className="mb-3">
// //             <label className="form-label">Assigned To</label>
// //             <select className="form-select">
// //               <option>Nothing selected</option>
// //             </select>
// //           </div>
          
// //           <div className="mb-3">
// //             <label className="form-label">Description</label>
// //             <textarea className="form-control" rows="3"></textarea>
// //           </div>
          
// //           <div className="d-flex justify-content-between">
// //             <button type="submit" className="btn btn-primary">Save</button>
// //             <button type="button" className="btn btn-secondary">Save & Add More</button>
// //             <button type="button" className="btn btn-light">Cancel</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskForm;

// import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// const TaskForm = () => {
//   return (
//     <div className="container mt-4">
//       <h4 className="text-primary"></h4>
//       <div className="card p-4 shadow">
//         <h5 className="text-secondary">Job Information</h5>
//         <form>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Job ID</label>
//               <input type="text" className="form-control" placeholder="Enter Job ID" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Job Name</label>
//               <input type="text" className="form-control" placeholder="Enter Job Name" />
//             </div>
//           </div>
          
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Project ID</label>
//               <input type="text" className="form-control" placeholder="Enter Project ID" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Project Name</label>
//               <input type="text" className="form-control" placeholder="Enter Project Name" />
//             </div>
//           </div>
          
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Client</label>
//               <input type="text" className="form-control" placeholder="Enter Client Name" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Promotion</label>
//               <input type="text" className="form-control" placeholder="Enter Promotion" />
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Brand</label>
//               <input type="text" className="form-control" placeholder="Enter Brand" />
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Sub-Brand</label>
//               <input type="text" className="form-control" placeholder="Enter Sub-Brand" />
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Flavour</label>
//               <input type="text" className="form-control" placeholder="Enter Flavour" />
//             </div>
//           </div>

//           <h5 className="text-secondary">Date Information</h5>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Date Created</label>
//               <input type="date" className="form-control" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Target Date</label>
//               <input type="date" className="form-control" />
//             </div>
//           </div>

//           <h5 className="text-secondary">Product Details</h5>
//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Pack Code</label>
//               <input type="text" className="form-control" placeholder="Enter Pack Code" />
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">FG Code</label>
//               <input type="text" className="form-control" placeholder="Enter FG Code" />
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Barcode</label>
//               <input type="text" className="form-control" placeholder="Enter Barcode" />
//             </div>
//           </div>

//           <h5 className="text-secondary">Instructions</h5>
//           <div className="mb-3">
//             <label className="form-label">Instructions</label>
//             <textarea className="form-control" rows="3" placeholder="Enter Instructions"></textarea>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Attachments</label>
//             <input type="file" className="form-control" multiple />
//           </div>

//           <div className="d-flex justify-content-between">
//             <button type="submit" className="btn btn-primary">Save & Close</button>
   
//             <button type="button" className="btn btn-danger">Discard</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TaskForm;


// import React, { useState, useEffect } from "react";

// import { initialEmployees } from "../Admin/EmployeeList"; 
// import { initialProjects } from "../Tables/ProjectTable"
// const TaskForm = () => {
//   const [employees, setEmployees] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {

//     setEmployees(initialEmployees);
//   }, []);

//   useEffect(() => {
    
//     setProjects(initialProjects);
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Create Task</h2>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Title *</label>
//           <input type="text" className="form-control" placeholder="Enter a task title" />
//         </div>
        
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Project</label>
//             <select className="form-select">
//             {projects.map((project, index) => (
//               <option key={index} value={project.id}>{project.name}</option>
//             ))}
//             </select>
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Task Category</label>
//             <select className="form-select">
//               <option>--</option>
//             </select>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Start Date *</label>
//             <input type="date" className="form-control" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Due Date *</label>
//             <input type="date" className="form-control" />
//           </div>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Assigned To</label>
//           <select className="form-select">
        
//             {employees.map((employee, index) => (
//               <option key={index} value={employee.employeeId}>{employee.name}</option>
//             ))}
//           </select>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea className="form-control" rows="3"></textarea>
//         </div>
        
//         <div className="mb-3">
//           <h5>Other Details</h5>
//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Label</label>
//               <select className="form-select">
//                 <option>Nothing selected</option>
//               </select>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Milestones</label>
//               <select className="form-select">
//                 <option>--</option>
//               </select>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Priority</label>
//               <select className="form-select">
//                 <option>Medium</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="mb-3">
//           <input type="checkbox" className="form-check-input" id="private" />
//           <label className="form-check-label ms-2" htmlFor="private">Make Private</label>
//         </div>
//         <div className="mb-3">
//           <input type="checkbox" className="form-check-input" id="billable" />
//           <label className="form-check-label ms-2" htmlFor="billable">Billable</label>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Add File</label>
//           <input type="file" className="form-control" />
//         </div>
        
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;
// import React, { useState, useEffect } from "react";

// import { initialEmployees } from "../Admin/EmployeeList"; 

// const TaskForm = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Load employees from initialEmployees array
//     setEmployees(initialEmployees);
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Create Task</h2>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Title *</label>
//           <input type="text" className="form-control" placeholder="Enter a task title" />
//         </div>
        
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Project</label>
//             <select className="form-select">
//               <option>--</option>
//             </select>
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Task Category</label>
//             <select className="form-select">
//               <option>--</option>
//             </select>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Start Date *</label>
//             <input type="date" className="form-control" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Due Date *</label>
//             <input type="date" className="form-control" />
//           </div>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Assigned To</label>
//           <select className="form-select">
//             <option>Nothing selected</option>
//             {employees.map((employee, index) => (
//               <option key={index} value={employee.employeeId}>{employee.name}</option>
//             ))}
//           </select>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea className="form-control" rows="3"></textarea>
//         </div>
        
//         <div className="mb-3">
//           <h5>Other Details</h5>
//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Label</label>
//               <select className="form-select">
//                 <option>Nothing selected</option>
//               </select>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Milestones</label>
//               <select className="form-select">
//                 <option>--</option>
//               </select>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label className="form-label">Priority</label>
//               <select className="form-select">
//                 <option>Medium</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="mb-3">
//           <input type="checkbox" className="form-check-input" id="private" />
//           <label className="form-check-label ms-2" htmlFor="private">Make Private</label>
//         </div>
//         <div className="mb-3">
//           <input type="checkbox" className="form-check-input" id="billable" />
//           <label className="form-check-label ms-2" htmlFor="billable">Billable</label>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Add File</label>
//           <input type="file" className="form-control" />
//         </div>
        
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;

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
        
        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">Save & Close</button>
          <button type="submit" className="btn btn-success">Save & Add...</button>
          <button type="button" className="btn btn-danger">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
