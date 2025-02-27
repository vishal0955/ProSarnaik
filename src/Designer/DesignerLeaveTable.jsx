import React, { useState } from "react";
import { Table, Button, Badge,Modal ,Pagination} from "react-bootstrap";
import { MoreVertical, List, Grid, User } from "lucide-react";
import DesignerLeaveForm from "./DesignerLeaveForm";
import { useNavigate } from "react-router-dom";


const DesignerLeaveTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const navigate = useNavigate();
    
  const leaveData = [
    {
      id: 1,
      employee: { name: "Cordia Rau", role: "Trainee", avatar: "https://via.placeholder.com/40" },
      leaveDate: "15-02-2025 (Saturday)",
      duration: "Full Day",
      status: "Pending",
      type: "Sick",
      paid: true,
    },
  ];
   const handleClick=()=>{
    setShowModal(true);
   }
   const totalPages = Math.ceil(leaveData.length / itemsPerPage);
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem = currentPage * itemsPerPage;
    const displayedJobs = leaveData.slice(indexOfFirstItem, indexOfLastItem);

    const handleJobClick = () => {
      navigate(`/designerovertime`);
  };

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid mt-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <Button variant="primary" className="me-2" onClick={handleClick}>
            + New Leave
          </Button>
          <Button variant="outline-secondary">Export</Button>
        </div>
        <div>
          <Button variant="light" className="me-2">
            <List size={18} />
          </Button>
          <Button variant="light" className="me-2">
            <Grid size={18} />
          </Button>
          <Button variant="light">
            <User size={18} />
          </Button>
        </div>
      </div>

      {/* Leave Table */}
      <div className="table-responsive">
        <Table striped bordered hover className="align-middle">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Date</th>
              <th>Duration</th>
              <th>Leave Status</th>
              <th>Leave Type</th>
              <th>Paid</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.id}>
                <td style={{ cursor: "pointer" }} onClick={handleJobClick}>
                  <div className="d-flex align-items-center">
                    <img src="https://i.ibb.co/zWVgTXyB/300.jpg" alt="300" border="0"  className="rounded-circle me-2"
                      width="40"
                      height="40">
                        
                      </img >

                    <div>
                      <strong>{leave.employee.name}</strong>
                      <div className="text-muted small">{leave.employee.role}</div>
                    </div>
                  </div>
                </td>
                <td>{leave.leaveDate}</td>
                <td>{leave.duration}</td>
                <td>
                  <Badge bg="warning" text="dark">
                    ● {leave.status}
                  </Badge>
                </td>
                <td>
                  <Badge bg="danger">{leave.type}</Badge>
                </td>
                <td>
                  <Badge bg="success">{leave.paid ? "Paid" : "Unpaid"}</Badge>
                </td>
                <td>
                  <Button variant="light">
                    <MoreVertical size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
       <div className="d-flex justify-content-between align-items-center mt-3">

            <span>
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, leaveData.length)} of {leaveData.length} entries
                </span>
            <Pagination className="justify-content-between">
                
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />
                {Array.from({ length: totalPages }, (_, page) => (
                    <Pagination.Item
                        key={page + 1}
                        active={page + 1 === currentPage}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
            </Pagination>
            </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            Leave Form
          </Modal.Header>
          <Modal.Body>
    <DesignerLeaveForm />
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default DesignerLeaveTable;
