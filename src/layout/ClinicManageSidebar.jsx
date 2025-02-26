import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ClinicalEmrHeader from "../components/ClinicalManagement/ClinicalManagementDashbord/ClinicalEmrHeader";
const ClinicManageSidebar = ({ collapsed, menuItemClick, onBack }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to check if any of the subm enu items are active
  const isSubmenuActive = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };
  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      {/* <ClinicalEmrHeader /> */}
      <div className="sidebar">
        <ul className="menu">
          {/* Dashboard Section */}
          <li className={`menu-item ${isActive("/clinicaldashboard") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/clinicaldashboard");
                menuItemClick();
              }}>
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>

          {/* Patient Management Section */}
          {/* <li className={`menu-item ${isSubmenuActive(["/registration", "/patientprofiles","/appointmentscheduling","/patienthistory","/billingpayments"]) ? "active" : ""}`}>
          <div className="menu-link menu-i" onClick={() => toggleSubmenu("registration")}>
            <i className="fa-solid fa-list-check"></i>
            <span className="menu-text">Patient Management</span>
            <i className={`fa-solid fa-chevron-down submenu-arrow ${openSubmenu === "Registration" ? "rotated" : ""}`}></i>
          </div>
        </li> */}
          {/* <ul className={`submenu ${openSubmenu === "registration" ? "expanded" : "collapsed"}`}>
          <li className={`submenu-item ${isActive("/registration") ? "active" : ""}`}
            onClick={() => {navigate("/registration");setOpenSubmenu(null);menuItemClick();}}>
            <i className="fa-solid fa-arrow-trend-up"></i> Registration
          </li>
          <li className={`submenu-item ${isActive("/patientprofiles") ? "active" : ""}`}
            onClick={() => {
              navigate("/patientprofiles");
              setOpenSubmenu(null);menuItemClick();
            }}>
            <i className="fa-solid fa-arrow-trend-up"></i> Patient Profiles
          </li>
          <li className={`submenu-item ${isActive("/appointmentscheduling") ? "active" : ""}`}
            onClick={() => {
              navigate("/appointmentscheduling");
              setOpenSubmenu(null);menuItemClick();
            }}>
            <i className="fa-solid fa-arrow-trend-up"></i> Appointment Scheduling
          </li>
          <li className={`submenu-item ${isActive("/Patient History") ? "active" : ""}`}
            onClick={() => {
              navigate("/patienthistory");
              setOpenSubmenu(null);menuItemClick();
            }}>
            <i className="fa-solid fa-arrow-trend-up"></i> Patient History
          </li>
          <li className={`submenu-item ${isActive("/billingpayments") ? "active" : ""}`}
            onClick={() => {
              navigate("/billingpayments");
              setOpenSubmenu(null);menuItemClick();
            }}>
            <i className="fa-solid fa-arrow-trend-up"></i> Billing & Payments
          </li>
        </ul> */}
          {/* Patients Section */}
          <li className={`menu-item ${isActive("/patients") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/patients");
                menuItemClick();
              }}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Patients</span>
            </div>
          </li>
          {/* Patients Section */}
          {/* Appointments Section */}
          <li className={`menu-item ${isActive("/appointments") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/appointments");
                menuItemClick();
              }}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Appointments</span>
            </div>
          </li>
          {/* Appointments Section */}
          {/* Reports Section */}
          <li className={`menu-item ${isActive("/reports") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/reports");
                menuItemClick();
              }}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Reports</span>
            </div>
          </li>
          {/* Reports Section */}
          {/* My Profile Section */}
          <li className={`menu-item ${isActive("/myprofile") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/myprofile");
                menuItemClick();
              }}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">My Profile</span>
            </div>
          </li>
          {/* My Profile Section */}

          {/* log out */}
          <li className={`menu-item ${isActive("/logout") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/logout");
                menuItemClick();
              }}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Log out</span>
            </div>
          </li>
          {/* log out */}
        </ul>
      </div>
    </div>
  );
};

export default ClinicManageSidebar;
