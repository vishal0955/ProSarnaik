import React, { useState } from "react";


const DealForm = () => {
  const [formData, setFormData] = useState({
    dealName: "",
    leadContact: "",
    pipeline: "Sales Pipeline",
    dealStage: "Generated",
    dealValue: 0,
    closeDate: "",
    dealCategory: "Best Case",
    dealAgent: "",
    product: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container" style={{ maxWidth: "900px", margin: "auto", paddingTop: "20px" }}>
     

      <div className="card p-4 shadow-sm" style={{ borderRadius: "10px", background: "white" }}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Lead Contacts */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Lead Contacts *</label>
              <select className="form-select" name="leadContact" onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="lead1">Lead 1</option>
                <option value="lead2">Lead 2</option>
              </select>
            </div>

            {/* Deal Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Deal Name *</label>
              <input
                type="text"
                className="form-control"
                name="dealName"
                placeholder="e.g. John Doe"
                onChange={handleChange}
                required
              />
            </div>

            {/* Pipeline */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Pipeline *</label>
              <select className="form-select" name="pipeline" onChange={handleChange}>
                <option>Sales Pipeline</option>
              </select>
            </div>

            {/* Deal Stages */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Deal Stages *</label>
              <select className="form-select" name="dealStage" onChange={handleChange}>
                <option>Generated</option>
                <option>Negotiation</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Deal Value */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Deal Value *</label>
              <input type="number" className="form-control" name="dealValue" min="0" onChange={handleChange} />
            </div>

            {/* Close Date */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Close Date *</label>
              <input type="date" className="form-control" name="closeDate" onChange={handleChange} required />
            </div>

            {/* Deal Category */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Deal Category</label>
              <select className="form-select" name="dealCategory" onChange={handleChange}>
                <option>Best Case</option>
                <option>Worst Case</option>
              </select>
            </div>

            {/* Deal Agent */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Deal Agent</label>
              <select className="form-select" name="dealAgent" onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="agent1">Agent 1</option>
                <option value="agent2">Agent 2</option>
              </select>
            </div>

            {/* Products */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Products</label>
              <select className="form-select" name="product" onChange={handleChange}>
                <option value="">Select Product</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn" style={{ backgroundColor: "#007bff", color: "white", borderRadius: "6px" }}>
              Save
            </button>
            <button type="button" className="btn" style={{ backgroundColor: "#6c757d", color: "white", borderRadius: "6px" }}>
              Save & Add More
            </button>
            <button type="button" className="btn" style={{ backgroundColor: "#dc3545", color: "white", borderRadius: "6px" }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DealForm;
