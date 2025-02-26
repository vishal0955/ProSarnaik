
import React, { useState } from "react";
import { Table, Dropdown, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEllipsisV, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TableHeader from "./TableHeader";

const statusColors = {
  Pending: "warning",
  InProgress: "info",
  "On Hold": "danger",
  "To Start": "info",
  Completed: "success",
  Cancelled: "secondary",
};

const initialJobs = [
  {
    jobId: "J001",
    brand: "XYZ",
    subBrand: "Premium",
    flavour: "N/A",
    packType: "Bottle",
    size: "500ml",
    packCode: "PK123",
    fgCode: "FG456",
    barcode: "789456123",
    stage: "Home",
    status: "InProgress",
    threeDFiles: ["3dfile1.stl", "3dfile2.stl"],
    files: ["file1.pdf", "file2.pdf"],
    links: ["http://example.com/link1", "http://example.com/link2"],
  },
  {
    jobId: "J002",
    brand: "LMN",
    subBrand: "Budget",
    flavour: "Strawberry",
    packType: "Carton",
    size: "1L",
    packCode: "PK789",
    fgCode: "FG987",
    barcode: "123456789",
    stage: "Production",
    status: "Pending",
    threeDFiles: ["3dfile3.stl"],
    files: ["file3.pdf"],
    links: ["http://example.com/link3"],
  },
];

const stageOptions = ["Home", "Production", "Designer"];

export const TaskTable = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const navigate = useNavigate();

  const handleStatusChange = (index, status) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = status;
    setJobs(updatedJobs);
  };

  const handleStageChange = (index, stage) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].stage = stage;
    setJobs(updatedJobs);
  };

  const handleJobClick = () => {
    navigate(`/itemoverview`);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Table responsive bordered hover className="tabledown">
        <thead>
          <tr className="table-secondary">
            <th>Item #</th>
            <th>Brand</th>
            <th>Sub Brand</th>
            <th>Flavour</th>
            <th>Pack Type</th>
            <th>Size</th>
            <th>Pack Code</th>
            <th>FG Code</th>
            <th>Barcode</th>
            <th>Stage</th>
            <th>Status</th>
            <th>3D Files</th>
            <th>Files</th>
            <th>Links</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick()}>
                {job.jobId}
              </td>
              <td style={{ cursor: "pointer" }} onClick={() => handleJobClick()}>{job.brand}</td>
              <td>{job.subBrand}</td>
              <td>{job.flavour}</td>
              <td>{job.packType}</td>
              <td>{job.size}</td>
              <td>{job.packCode}</td>
              <td>{job.fgCode}</td>
              <td>{job.barcode}</td>
              <td>
                <Dropdown onSelect={(eventKey) => handleStageChange(index, eventKey)}>
                  <Dropdown.Toggle variant="light" id="dropdown-stage" style={{ width: "110px" }}>
                    {job.stage}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {stageOptions.map((stage) => (
                      <Dropdown.Item key={stage} eventKey={stage}>
                        {stage}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
                  <Dropdown.Toggle variant={statusColors[job.status]} id="dropdown-status" style={{ width: "110px" }}>
                    {job.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(statusColors).map((status) => (
                      <Dropdown.Item key={status} eventKey={status} className={`text-${statusColors[status]}`}>
                        {status}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                {job.threeDFiles.map((file, fileIndex) => (
                  <div key={fileIndex}>{file}</div>
                ))}
              </td>
              <td>
                {job.files.map((file, fileIndex) => (
                  <div key={fileIndex}>{file}</div>
                ))}
              </td>
              <td>
                {job.links.map((link, linkIndex) => (
                  <OverlayTrigger
                    key={linkIndex}
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${linkIndex}`}>{link}</Tooltip>}
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <FaLink />
                    </a>
                  </OverlayTrigger>
                ))}
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Post to Production</Dropdown.Item>
                    <Dropdown.Item href="#">Share</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const TaskPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <TableHeader title="All Item" buttonText="Add Item" />
      <TaskTable className="tabledown" />
    </div>
  );
};

export default TaskPage;
