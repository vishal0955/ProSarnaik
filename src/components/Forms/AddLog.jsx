import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock, FaCalendarAlt, FaSave, FaTimes, FaTasks, FaProjectDiagram } from 'react-icons/fa';

const TimeLogForm = () => {
  const [formData, setFormData] = useState({
    project: '',
    task: '',
    projectStartDate: '',
    memo: '',
    searchTime: '',
    taskEndDate: '',
    totalHours: '',
    employeeEndTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="container mt-4">
      <div className="">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Log Time</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Project Selection */}
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Project</option>
                    <option value="Project A">Project A</option>
                    <option value="Project B">Project B</option>
                    <option value="Project C">Project C</option>
                  </select>
                  <label htmlFor="project"><FaProjectDiagram className="me-2" /> Project *</label>
                </div>
              </div>

              {/* Task Selection */}
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="task"
                    name="task"
                    value={formData.task}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Task</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Testing">Testing</option>
                  </select>
                  <label htmlFor="task"><FaTasks className="me-2" /> Task *</label>
                </div>
              </div>

              {/* Start Date */}
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="projectStartDate"
                    name="projectStartDate"
                    value={formData.projectStartDate}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="projectStartDate"><FaCalendarAlt className="me-2" /> Start Date *</label>
                </div>
              </div>

              {/* End Date */}
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="taskEndDate"
                    name="taskEndDate"
                    value={formData.taskEndDate}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="taskEndDate"><FaCalendarAlt className="me-2" /> End Date *</label>
                </div>
              </div>

              {/* Search Time */}
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="time"
                    className="form-control"
                    id="searchTime"
                    name="searchTime"
                    value={formData.searchTime}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="searchTime"><FaClock className="me-2" /> Search Time *</label>
                </div>
              </div>

              {/* End Time */}
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="time"
                    className="form-control"
                    id="employeeEndTime"
                    name="employeeEndTime"
                    value={formData.employeeEndTime}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="employeeEndTime"><FaClock className="me-2" /> End Time *</label>
                </div>
              </div>

              {/* Total Hours */}
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="totalHours"
                    name="totalHours"
                    value={formData.totalHours}
                    onChange={handleChange}
                  />
                  <label htmlFor="totalHours"><FaClock className="me-2" /> Total Hours</label>
                </div>
              </div>

              {/* Memo */}
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="memo"
                    name="memo"
                    value={formData.memo}
                    onChange={handleChange}
                    required
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="memo">Memo *</label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-primary me-2">
                <FaSave className="me-1" /> Submit
              </button>
              <button type="button" className="btn btn-secondary">
                <FaTimes className="me-1" /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TimeLogForm;
