import React, { useState } from "react";
import { Table, Form, Button, Image, Card, Container,Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddMembers from "../Admin/AddMembers";

const ProjectMembers = () => {
  const [showModal, setShowModal] = useState(false);
  // State for members list
  const [members, setMembers] = useState([
    { id: 1, name: "Prof. Jared Eichmann", role: "Trainee", rate: 81, img: "https://i.pravatar.cc/50?img=1" },
    { id: 2, name: "Giles Conn", role: "Senior", rate: 74, img: "https://i.pravatar.cc/50?img=2" },
    { id: 3, name: "Martina Nikolaus", role: "Project Manager", rate: 18, img: "https://i.pravatar.cc/50?img=3" },
    { id: 4, name: "Cordia Rau", role: "Trainee", rate: 100, img: "https://i.pravatar.cc/50?img=4" },
    { id: 5, name: "Meggie Streich", role: "Junior", rate: 27, img: "https://i.pravatar.cc/50?img=5" },
  ]);

  // Function to handle rate change
  const handleRateChange = (event, id) => {
    const newRate = event.target.value;
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, rate: newRate } : member
      )
    );
  };
  
 const handleClick=()=>{
  setShowModal(true);
 }

  // Function to delete a member
  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div>
    <Container className="mt-4">
 
       <Button  className="btn btn-primary mb-3" onClick={handleClick}>+ Add Project Members</Button>
    
      <Card className="p-3 shadow-sm  text-white">
        <h5>Members</h5>
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Hourly Rate</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Image src={member.img} roundedCircle width="40" height="40" className="me-2" />
                    <div>
                      <strong>{member.name}</strong>
                      <p className="mb-0 text-muted">{member.role}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <Form.Control
                    type="number"
                    value={member.rate}
                    onChange={(e) => handleRateChange(e, member.id)}
                  />
                </td>
                <td>
                  <Form.Check type="radio" label="Project Admin" />
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(member.id)}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddMembers />
        </Modal.Body>
      </Modal>
    
    </div>
  );
};

export default ProjectMembers;
