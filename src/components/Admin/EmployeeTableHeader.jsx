// import React, { useState } from "react";
// import AddEmployee from "./AddEmployee";
// import { useNavigate } from "react-router-dom";
// import { Dropdown, Modal } from "react-bootstrap";
// import AddClient from "./AddClient";

// const EmployeeTableHeader = ({ title, buttonText }) => {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const formButton = (buttonText) =>
//     buttonText.toLowerCase().replace(/\s+/g, "");

//   const handleButtonClick = () => {
//     if (
//       buttonText === "Add Employee" ||
//       buttonText === "Add Client" ||
//       buttonText === "Add Log"
//     ) {
//       setShowModal(true);
//     } else {
//       navigate(`/${formButton(buttonText)}`);
//     }
//   };

//   return (
//     <div className="container-fluid bg-light shadow-sm p-3">
//      <div className="row align-items-center g-2">
    
//     {/* Left Section - Title & Button */}
//     <div className="col-md-6 col-12 d-flex flex-wrap align-items-center gap-2">
//       <a className="navbar-brand fw-bold text-primary" href="#">
//         {title}
//       </a>
//       <button className="btn btn-primary" onClick={handleButtonClick}>
//         {buttonText}
//       </button>
//     </div>

//     {/* Right Section - Dropdowns (Aligns Right on Large Screens, Wraps on Small) */}
//     <div className="col-md-6 col-12 d-flex flex-wrap justify-content-md-end justify-content-between gap-2">
//       <Dropdown>
//         <Dropdown.Toggle id="employee-dropdown">
//           {title}: All
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item>All</Dropdown.Item>
//           <Dropdown.Item>Active</Dropdown.Item>
//           <Dropdown.Item>Inactive</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {buttonText === "Add Employee" && (
//         <Dropdown>
//           <Dropdown.Toggle id="designation-dropdown">
//             Designation: All
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item>All</Dropdown.Item>
//             <Dropdown.Item>Project Manager</Dropdown.Item>
//             <Dropdown.Item>Production Team</Dropdown.Item>
//             <Dropdown.Item>Junior</Dropdown.Item>
//             <Dropdown.Item>Designer</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       )}
//     </div>

//   </div>

//       {/* Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>{buttonText}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {buttonText === "Add Employee" ? (
//             <AddEmployee />
//           ) : buttonText === "Add Client" ? (
//             <AddClient />
//           ) : null}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default EmployeeTableHeader;
import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import AddClient from "./AddClient";

const EmployeeTableHeader = ({ title, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const formButton = (buttonText) =>
    buttonText.toLowerCase().replace(/\s+/g, "");

  const handleButtonClick = () => {
    if (
      buttonText === "Add Employee" ||
      buttonText === "Add Client" ||
      buttonText === "Add Log"
    ) {
      setShowModal(true);
    } else {
      navigate(`/${formButton(buttonText)}`);
    }
  };

  return (
    <div className="container-fluid bg-light shadow-sm p-3">
      <div className="row align-items-center g-2">
        {/* Left Section - Title & Button */}
        <div className="col-md-6 col-12 d-flex flex-wrap align-items-center gap-2">
          <a className="navbar-brand fw-bold text-primary text-truncate" href="#">
            {title}
          </a>
          <button className="btn btn-primary btn-sm" onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>

        {/* Right Section - Dropdowns */}
        <div className="col-md-6 col-12 d-flex flex-wrap justify-content-md-end justify-content-start gap-2">
          <Dropdown>
            <Dropdown.Toggle id="employee-dropdown" className="btn-sm">
              {title}: All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>Active</Dropdown.Item>
              <Dropdown.Item>Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {buttonText === "Add Employee" && (
            <Dropdown>
              <Dropdown.Toggle id="designation-dropdown" className="btn-sm">
                Designation: All
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Project Manager</Dropdown.Item>
                <Dropdown.Item>Production Team</Dropdown.Item>
                <Dropdown.Item>Junior</Dropdown.Item>
                <Dropdown.Item>Designer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{buttonText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {buttonText === "Add Employee" ? (
            <AddEmployee />
          ) : buttonText === "Add Client" ? (
            <AddClient />
          ) : null}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeeTableHeader;

