
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Clock, CheckCircle, List, Users, FileText, Folder } from 'lucide-react';

const DashBoard = () => {
  // Sample data for tasks
  const [tasks] = useState([
    { id: 1, title: "Design UI Dashboard", status: "In Progress", project: "Web App", timeSpent: "4h", dueDate: "2025-02-10" },
    { id: 2, title: "API Integration", status: "Completed", project: "Mobile App", timeSpent: "8h", dueDate: "2025-02-09" },
    { id: 3, title: "Database Setup", status: "Pending", project: "Web App", timeSpent: "2h", dueDate: "2025-02-12" }
  ]);

  // Sample data for project status
  const projectStatus = [
    { name: "Completed", value: 8 },
    { name: "In Progress", value: 5 },
    { name: "Pending", value: 3 }
  ];

  // Sample data for time tracking
  const timelineData = [
    { name: "Mon", hours: 6 },
    { name: "Tue", hours: 8 },
    { name: "Wed", hours: 7 },
    { name: "Thu", hours: 5 },
    { name: "Fri", hours: 9 }
  ];

  const statusColors = ["#4CAF50", "#2196F3", "#FFC107"];

  return (
    <div className="container-fluid p-4 sidebar-home-section ">
      {/* Top Navigation */}

      <nav className=" navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Task Manager</span>
          <div className="d-flex align-items-center">
            <input type="search" className="form-control me-2" placeholder="Search tasks..." />
            <img src="/api/placeholder/40/40" alt="Profile" className="rounded-circle" />
          </div>
        </div>
      </nav>
    








        <nav className='designer-navbar'>
            <input type="" />


        </nav>



      {/* Main Content */}
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                  <List className="me-2" /> My Tasks
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                  <Folder className="me-2" /> Projects
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                  <Calendar className="me-2" /> Calendar
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                  <Clock className="me-2" /> Time Log
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                  <FileText className="me-2" /> Notes
                </a>
              </div>
            </div>
          </div>

          {/* Project Status */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project Status</h5>
              <div style={{ height: "200px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectStatus}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {projectStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={statusColors[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-6">
          {/* Timeline Chart */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Weekly Time Spent</h5>
              <div style={{ height: "200px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#2196F3" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Tasks</h5>
              <div className="list-group">
                {tasks.map(task => (
                  <div key={task.id} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">{task.title}</h6>
                      <small className={`badge ${
                        task.status === "Completed" ? "bg-success" : 
                        task.status === "In Progress" ? "bg-primary" : "bg-warning"
                      }`}>{task.status}</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Project: {task.project}</small>
                      <div>
                        <Clock className="me-1" size={14} />
                        <small className="text-muted">{task.timeSpent}</small>
                        <Calendar className="ms-2 me-1" size={14} />
                        <small className="text-muted">{task.dueDate}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3">
          {/* Calendar */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Calendar</h5>
              <div className="text-center">
                {/* Add your preferred calendar component here */}
                <div className="alert alert-info">Calendar Component</div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Quick Notes</h5>
              <div className="form-group">
                <textarea 
                  className="form-control mb-2" 
                  rows="3" 
                  placeholder="Add a note..."
                ></textarea>
                <button className="btn btn-primary btn-sm">Save Note</button>
              </div>
              <div className="mt-3">
                <div className="alert alert-light">
                  Meeting with team at 3 PM
                  <small className="d-block text-muted">2 hours ago</small>
                </div>
                <div className="alert alert-light">
                  Review API documentation
                  <small className="d-block text-muted">5 hours ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};






export default DashBoard;



