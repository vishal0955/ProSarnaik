import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import JoditEditor from "jodit-react";

const AddProjectTemplate = () => {
  const [projectName, setProjectName] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [allowManualTime, setAllowManualTime] = useState(false);
  const [projectSummary, setProjectSummary] = useState("");
  const [notes, setNotes] = useState("");

  const editorSummary = useRef(null);
  const editorNotes = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      projectName,
      projectCategory,
      allowManualTime,
      projectSummary,
      notes,
    });
    alert("Project Template Saved!");
  };

  return (
    <Container className="mt-4">
      <h2>Add Project Template</h2>
      <Form onSubmit={handleSubmit}>
        {/* Project Name and Category */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="projectName">
              <Form.Label>Project Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write a project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
          <Form.Label>Project Category</Form.Label>
            <div class="input-group">
            
              <select
                class="form-select"
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
              >
                <option selected>--.</option>
                <option value="1">Laravel</option>
                <option value="2">Vue.js</option>
                <option value="3">React</option>
                <option value="4">Zend</option>
                <option value="">Cakephp</option>
              </select>
              <button class="btn btn-outline-secondary" type="button">
            Add
              </button>
            </div>

           
          </Col>
        </Row>

        {/* Allow Manual Time Logs */}
        <Form.Group controlId="allowManualTime">
          <Form.Check
            type="checkbox"
            label="Allow manual time logs"
            checked={allowManualTime}
            onChange={() => setAllowManualTime(!allowManualTime)}
          />
        </Form.Group>

        {/* Project Summary */}
        <Form.Group controlId="projectSummary" className="mt-3">
          <Form.Label>Project Summary</Form.Label>
          <JoditEditor
            ref={editorSummary}
            value={projectSummary}
            onChange={setProjectSummary}
          />
        </Form.Group>

        {/* Notes */}
        <Form.Group controlId="notes" className="mt-3">
          <Form.Label>Notes</Form.Label>
          <JoditEditor ref={editorNotes} value={notes} onChange={setNotes} />
        </Form.Group>

        {/* Buttons */}
        <div className="mt-4">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" className="ms-2">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProjectTemplate;
