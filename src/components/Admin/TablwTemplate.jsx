import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";

const TableTemplate = () => {
  // Dummy data for the table
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", members: "Alice, Bob", category: "Web Development" },
    { id: 2, name: "Mobile App", members: "Charlie, Dave", category: "Mobile Development" },
  ]);

  // Function to add a new dummy project
  const addProject = () => {
    const AddProjectTemplate = {
      
    };
    setProjects([...projects, addProjectTemplate]);
  };

  return (
    <Container className="mt-4">
      <Button variant="primary" className="mb-3" >
        + Add Project Template
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Members</th>
            <th>Project Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.members}</td>
                <td>{project.category}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => setProjects(projects.filter(p => p.id !== project.id))}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableTemplate;
