import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const StopTimerModal = ({ show, handleClose, startTime, endTime }) => {
  const [memo, setMemo] = useState("");
  const [totalTime, setTotalTime] = useState("");

  // Function to calculate total time in hours and minutes
  const calculateTotalTime = (start, end) => {
    if (!start || !end) return "0m";

    const startDate = new Date(`2025-01-01 ${start}`);
    const endDate = new Date(`2025-01-01 ${end}`);

    let diff = (endDate - startDate) / 1000 / 60; // Convert to minutes
    if (diff < 0) return "0m"; // Prevent negative time

    const hours = Math.floor(diff / 60);
    const minutes = Math.floor(diff % 60);

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  useEffect(() => {
    if (show && startTime && endTime) {
      setTotalTime(calculateTotalTime(startTime, endTime));
      setMemo(""); // Reset memo field when modal opens
    }
  }, [show, startTime, endTime]);

  // Handle Save
  const handleSave = () => {
    if (!memo.trim()) {
      alert("Memo is required!");
      return;
    }
    console.log("Timer Data Saved:", { startTime, endTime, totalTime, memo });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Stop Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label><strong>Start Time</strong></Form.Label>
          <Form.Control type="text" value={startTime} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>End Time</strong></Form.Label>
          <Form.Control type="text" value={endTime} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>Total Time Logged</strong></Form.Label>
          <Form.Control type="text" value={totalTime} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>Memo <span className="text-danger">*</span></strong></Form.Label>
          <Form.Control
            as="textarea"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Enter work details..."
            required
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StopTimerModal;
