

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import AddItem from "../Forms/AddItem";
import AddProject from "../Forms/AddProject";
import AddLog from "../Forms/AddLog";

import TaskNewForm from "./TaskNewForm";

const TableHeader = ({ title, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [showAddTask, setShowAddTask] = useState(false);

  const formButton = (buttonText) =>
    buttonText.toLowerCase().replace(/\s+/g, "");

  const handleButtonClick = () => {
    if (
      buttonText === "Add Project" ||
      buttonText === "Add Item" ||
      buttonText === "Add Log"
    ) {
      setShowModal(true);
    } else {
      navigate(`/${formButton(buttonText)}`);
    }
  };

 

  return (
    <div className=" navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Section */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a className="navbar-brand fw-bold text-primary me-3" href="#">
              {title}
            </a>
            <button className="btn btn-primary" onClick={handleButtonClick}>
              {buttonText}
            </button>
        
            
          </div>
        {(buttonText === "Add Item") && <button variant="primary" className="btn btn-primary ms-2" onClick={() => setShowAddTask(true)} >Add Task </button>}
          </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-items-center gap-3">
            {/* Search Bar */}
            <li className="nav-item d-flex align-items-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </li>

         { !(buttonText === "Add Project") ? (
           
         <>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="filterDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </a>
              <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                {/* Status Submenu */}
                <li className="dropdown-submenu position-relative">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    By Status
                  </a>
                  <ul className="dropdown-menu submenu">
                    <li>
                      <a className="dropdown-item" href="#">
                        In Progress
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        On Hold
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cancelled
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Not Started
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Completed
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Priority Submenu */}
                <li className="dropdown-submenu position-relative">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    By Priority
                  </a>
                  <ul className="dropdown-menu submenu">
                    <li>
                      <a className="dropdown-item" href="#">
                        High
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Medium
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Low
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        No Priority
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Due Date
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Assignee
                  </a>
                </li>
              </ul>
            </li>

      
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="sortDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </a>
              <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    By Name (A-Z)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Name (Z-A)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Due Date (Earliest First)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Due Date (Latest First)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Priority (High to Low)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    By Priority (Low to High)
                  </a>
                </li>
              </ul>
            </li>
            </>
          ): null
}

            {/* Export Dropdown */}
            <div className="nav-item dropdown">
              <a
                className="btn"
                aria-expanded="false"
              >
                Import
              </a>
            </div>
          </ul>
        </div>

       
      </div>

      {/* ADd Task */}
      <Modal show={showAddTask} onHide={() => setShowAddTask(false)} style={{height: "100vh"}}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
           <TaskNewForm setShowAddTask={setShowAddTask}/>
        </Modal.Body>
      </Modal>


      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{buttonText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {buttonText === "Add Project" ? (
            <AddProject /> 
          ) : buttonText === "Add Item" ? (
            <AddItem />
          ) : (
            <AddLog />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableHeader;
