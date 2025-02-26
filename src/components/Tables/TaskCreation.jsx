import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const TaskCreation = () => {
  const [tasks, setTasks] = useState([{ id: 1, name: "", description: "" }]);

  // Handle Change
  const handleChange = (id, event) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, [event.target.name]: event.target.value };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Add Task
  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, name: "", description: "" }]);
  };

  // Remove Task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tasks Created:", tasks);
    alert("Tasks Created Successfully!");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div className="task-form p-4 rounded shadow bg-white w-100" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Task Creation</h3>
        <Form onSubmit={handleSubmit}>
          {tasks.map((task, index) => (
            <div key={task.id} className="mb-3 p-3 border rounded">
              <h5>Task {index + 1}</h5>
              <Form.Group className="mb-2">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter task name"
                  value={task.name}
                  onChange={(e) => handleChange(task.id, e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="description"
                  placeholder="Enter task description"
                  value={task.description}
                  onChange={(e) => handleChange(task.id, e)}
                  required
                />
              </Form.Group>

              {tasks.length > 1 && (
                <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>
                  Remove Task
                </Button>
              )}
            </div>
          ))}

          <Button variant="primary" className="w-100 mb-2" onClick={addTask}>
            + Add More Task
          </Button>

          <Button variant="success" type="submit" className="w-100">
            Submit Tasks
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TaskCreation;
