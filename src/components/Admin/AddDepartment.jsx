import React from 'react';

function AddDepartment() {
  return (
    <div>
      <div className="container">
        <div className="add-designa-main">

          <div className='bg-white rounded-5 p-3 p-md-4 shadow-sm'>
            <div className="row">
              <h5 className="text-center text-md-start">Add Department</h5>
              <hr />
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Name</label>
                <input
                  type='text'
                  placeholder='e.g. Team Lead'
                  className="form-control"
                  style={{ height: '45px', borderRadius: '5px' }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Parent</label>
                <select
                  className="form-select"
                  style={{ height: '45px', borderRadius: '5px' }}
                >
                  <option>--</option>
                </select>
              </div>
            </div>
            <hr />
            <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-md-start'>
              <button className='btn btn-primary rounded'>
                <i className="fa-solid fa-check"></i> Save
              </button>
              <button className='btn btn-light border-0'>Cancel</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddDepartment;
