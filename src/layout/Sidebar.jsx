import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { LuTreePalm } from "react-icons/lu";
import { FaTrafficLight } from "react-icons/fa6";
import { SiCrayon } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers,         // CRM  
  faUserPlus,      // Lead  
  faHandshake,     // Deal  
  faFileContract,  // Contract  
  faUserCheck,     // Attendance  
  faClock,         // Shift  
  faCalendarCheck ,// Roster  
} from "@fortawesome/free-solid-svg-icons";



const Sidebar = ({ collapsed, menuItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  const isActive = (path) => location.pathname === path;
  const isSubmenuActive = (paths) => paths.some((path) => location.pathname.startsWith(path));

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Admin Section */}
          {role === "admin" && (
            <>
              <li className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
                onClick={() => { navigate("/dashboard"); menuItemClick(); }}>
                <div className="menu-link menu-i">
                <i class="fa-solid fa-chart-column"></i>
                  <span className="menu-text">Dashboard</span>
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <FontAwesomeIcon icon={faUsers} />
                  <span className="menu-text">CRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/lead") ? "active" : ""}`}
                    onClick={() => { navigate("/lead"); menuItemClick(); }}>
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span className="menu-text">Lead</span>
                    
                  </li>
                  <li className={`submenu-item ${isActive("/deal") ? "active" : ""}`}
                    onClick={() => { navigate("/deal"); menuItemClick(); }}>
                       <FontAwesomeIcon icon={faHandshake} />
                      <span className="menu-text">  Deal</span>
                  </li>
                  <li className={`submenu-item ${isActive("/contract") ? "active" : ""}`}
                    onClick={() => { navigate("/contract"); menuItemClick(); }}>
                       <FontAwesomeIcon icon={faFileContract} />
                    <span className="menu-text">Contract</span>
                  </li>
                  <li className={`submenu-item ${isActive("/client") ? "active" : ""}`}
                    onClick={() => { navigate("/client"); menuItemClick(); }}>
                       <FontAwesomeIcon icon={faFileContract} />
                    <span className="menu-text">Client</span>
                  </li>

               
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                  <li className={`submenu-item ${isActive("/department") ? "active" : ""}`}
                    onClick={() => { navigate("/department"); menuItemClick(); }}>
                      <i class="fa-solid fa-file"></i>
                    <span className="menu-text">Department</span>
                  </li>
                  <li className={`submenu-item ${isActive("/designation") ? "active" : ""}`}
                    onClick={() => { navigate("/designation"); menuItemClick(); }}>
                      <i class="fa-solid fa-medal"></i>
                    <span className="menu-text">Designation</span>
                  </li>
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                      <FontAwesomeIcon icon={faUserCheck} />
                    <span className="menu-text">Attendance</span>
                  </li>
                
               

                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-folder"></i>
                  <span className="menu-text">Project</span>
                </div>
                <ul className="submenu expanded">
               
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i class="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/itemlist") ? "active" : ""}`}
                    onClick={() => { navigate("/itemlist"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Item</span>
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
                  </li>
                  

                </ul>
              </li>
            
            </>
          )}

          {/* Project Manager Section */}
          {role === "project manager" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i className="fa-solid fa-folder"></i>
                  <span className="menu-text">Project Owner</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/projectmanagementdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/projectmanagementdashboard"); menuItemClick(); }}>
                      <i className="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i className="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/itemlist") ? "active" : ""}`}
                    onClick={() => { navigate("/itemlist"); menuItemClick(); }}>
                      <i className="fa-solid fa-square-check"></i>
                    <span className="menu-text">Item</span>
                  </li>
                  <li className={`submenu-item ${isActive("/tasks") ? "active" : ""}`}
                    onClick={() => { navigate("/tasks"); menuItemClick(); }}>
                      <i className="fa-solid fa-square-check"></i>
                    <span className="menu-text">Task</span>
                  </li>
                  <li className={`submenu-item ${isActive("/timesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/timesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <FontAwesomeIcon icon={faUsers} />
                <span className="menu-text">CRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/lead") ? "active" : ""}`}
                    onClick={() => { navigate("/lead"); menuItemClick(); }}>
                    <FontAwesomeIcon icon={faUserPlus} />
                     <span className="menu-text">Lead</span>
                  </li>
                  <li className={`submenu-item ${isActive("/deal") ? "active" : ""}`}
                    onClick={() => { navigate("/deal"); menuItemClick(); }}>
                       <FontAwesomeIcon icon={faHandshake} />
                      <span className="menu-text">  Deal</span>
                  </li>
                  <li className={`submenu-item ${isActive("/contract") ? "active" : ""}`}
                    onClick={() => { navigate("/contract"); menuItemClick(); }}>
                     <FontAwesomeIcon icon={faFileContract} />
                     <span className="menu-text">Contract</span>
                  </li>
                  <li className={`submenu-item ${isActive("/quotetable") ? "active" : ""}`}
                    onClick={() => { navigate("/quotetable"); menuItemClick(); }}>
                     <FontAwesomeIcon icon={faFileContract} />
                     <span className="menu-text">Quotes</span>
                  </li>
                  <li className={`submenu-item ${isActive("/projectinvoicetable") ? "active" : ""}`}
                    onClick={() => { navigate("/projectinvoicetable"); menuItemClick(); }}>
                     <FontAwesomeIcon icon={faFileContract} />
                     <span className="menu-text">Invoice</span>
                  </li>
               
               
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                 
                
                      
                  <li className={`submenu-item ${isActive("/overtimelist") ? "active" : ""}`}
                    onClick={() => { navigate("/overtimelist"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">OverTime Approval</span>
                  </li>
                  <li className={`submenu-item ${isActive("/designerleavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/designerleavetable"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">My Leave </span>
                  </li>

                  

                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                     <FontAwesomeIcon icon={faUserCheck} />
                   <span className="menu-text"> Attendance</span>
                  </li>
               
                  




                </ul>
              </li>
            </>
          )}

          {/* Production Team Section */}
          {role === "production team" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
               
                </div>
                <ul className="submenu expanded">
                <li className={`submenu-item ${isActive("/productiondashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/productiondashboard"); menuItemClick(); }}>
                      <i class="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/project") ? "active" : ""}`}
                    onClick={() => { navigate("/project"); menuItemClick(); }}>
                      <i class="fa-solid fa-folder"></i>
                    <span className="menu-text">Project</span>
                  </li>
                  <li className={`submenu-item ${isActive("/jobs") ? "active" : ""}`}
                    onClick={() => { navigate("/jobs"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Tasks</span>
                  </li>
               
                 
                  <li className={`submenu-item ${isActive("/traffic") ? "active" : ""}`}
                    onClick={() => { navigate("/traffic"); menuItemClick(); }}>
                      <FaTrafficLight />
                    <span className="menu-text">Traffic</span>
                  </li>
                  <li className={`submenu-item ${isActive("/workload") ? "active" : ""}`}
                    onClick={() => { navigate("/workload"); menuItemClick(); }}>
                      <FaTrafficLight />
                    <span className="menu-text">Workload</span>
                  </li>
                  

                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/employeelist") ? "active" : ""}`}
                    onClick={() => { navigate("/employeelist"); menuItemClick(); }}>
                      <i class="fa-regular fa-building"></i>
                    <span className="menu-text">Employee Management</span>
                  </li>
                 
                  <li className={`submenu-item ${isActive("/designerleavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/designerleavetable"); menuItemClick(); }}>
                   <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/leavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/leavetable"); menuItemClick(); }}>
                    <LuTreePalm />
                    <span className="menu-text">Leave Approval</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                   <FontAwesomeIcon icon={faUserCheck} />
                     <span className="menu-text"> Attendance</span>
                  </li>
                
                 
                </ul>
              </li>
            </>
          )}

          {/* Designer Section */}
          {role === "designer" && (
            <>
              <li className="menu-item">
                <div className="menu-link menu-i">
           
                </div>
                <ul className="submenu expanded">
                  <li className={`submenu-item ${isActive("/designerdashboard") ? "active" : ""}`}
                    onClick={() => { navigate("/designerdashboard"); menuItemClick(); }}>
                      <i class="fa-solid fa-chart-column"></i>
                    <span className="menu-text">Dashboard</span>
                  </li>
                  <li className={`submenu-item ${isActive("/designdesigneritemsertask") ? "active" : ""}`}
                    onClick={() => { navigate("/designeritems"); menuItemClick(); }}>
                      <i class="fa-solid fa-square-check"></i>
                    <span className="menu-text">Item</span>
                  </li>
                  <li className={`submenu-item ${isActive("/dtimesheet") ? "active" : ""}`}
                    onClick={() => { navigate("/dtimesheet"); menuItemClick(); }}>
                      <i class="fa-duotone fa-solid fa-hourglass"></i>
                    <span className="menu-text">TimeSheet</span>
                  </li>

             
                </ul>

                <li className="menu-item">
                <div className="menu-link menu-i">
                <i class="fa-solid fa-user"></i>
                  <span className="menu-text">HRM</span>
                </div>
                <ul className="submenu expanded">
                  
                 
                  <li className={`submenu-item ${isActive("/designerleavetable") ? "active" : ""}`}
                    onClick={() => { navigate("/designerleavetable"); menuItemClick(); }}>
                   <LuTreePalm />
                    <span className="menu-text">Leave</span>
                  </li>
                  <li className={`submenu-item ${isActive("/attendance") ? "active" : ""}`}
                    onClick={() => { navigate("/attendance"); menuItemClick(); }}>
                    <FontAwesomeIcon icon={faUserCheck} />
                      <span className="menu-text"> Attendance</span>
                  </li>
              
             
                </ul>
              </li>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;




