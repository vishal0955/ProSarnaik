import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const designers = [
  { id: 1, name: "Alice", workload: 60 },
  { id: 2, name: "Bob", workload: 80 },
  { id: 3, name: "Charlie", workload: 40 },
  { id: 4, name: "David", workload: 90 },
];

const items = [
  { id: "10001", name: "Item A" },
  { id: "10002", name: "Item B" },
  { id: "10003", name: "Item C" },
];

export default function WorkloadDesigner() {

  const navigate  = useNavigate();

  const [selectedDesigner, setSelectedDesigner] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const assignTask = () => {
    if (selectedDesigner && selectedItem) {
      alert(`Assigned ${selectedItem} to ${selectedDesigner}`);
    }
  };
  

  return (
    <div className="container mt-4 ">
     <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">Assign Task</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <select className="form-select" onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="" disabled selected>Select Item</option>
                {items.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
            
            <div className="col-md-4">
              <select className="form-select" onChange={(e) => setSelectedDesigner(e.target.value)}>
                <option value="" disabled selected>Select Designer</option>
                {designers.map((designer) => (
                  <option key={designer.id} value={designer.name}>{designer.name}</option>
                ))}
              </select>
            </div>
            
            <div className="col-md-4">
              <button className="btn btn-primary" onClick={assignTask} disabled={!selectedDesigner || !selectedItem}>
                Assign Task
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mb-4 pb-2">
        <div className="card-body">
          <h3 className="card-title">Designer Workload</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Designer</th>
                <th>Workload (%)</th>
              </tr>
            </thead>
            <tbody>
              {designers.map((designer) => (
                <tr key={designer.id}>
                  <td    style={{ cursor: 'pointer'}} onClick={() => navigate(`/designertask`)}>{designer.name}</td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: `${designer.workload}%` }}>
                        {designer.workload}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    
    </div>
  );
}
