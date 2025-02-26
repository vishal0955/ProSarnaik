import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaPlusCircle, FaTimes } from "react-icons/fa";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 text-center shadow-sm">
        <h5 className="text-start">Files</h5>

        <div className="d-flex align-items-center">
          <label className="text-primary cursor-pointer d-flex align-items-center">
            <FaPlusCircle className="me-2" />
            <input
              type="file"
              className="d-none"
              onChange={handleFileChange}
            />
            Upload File
          </label>
        </div>

        <div className="mt-3">
          {file ? (
            <div className="d-flex align-items-center justify-content-center border p-3">
              <FaTimes className="text-danger me-2 cursor-pointer" onClick={handleRemoveFile} />
              <span>{file.name}</span>
            </div>
          ) : (
            <p className="text-muted">- No file uploaded. -</p>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default FileUpload;
