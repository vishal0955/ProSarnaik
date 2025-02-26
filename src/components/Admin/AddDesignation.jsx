import React from 'react';

function AddDesignation() {
  return (
    <div>
      <div className="container">
        <div className="add-designa-main">
       
          <div className='bg-white rounded-5'>
            <div className="row">
              <h5>Add Designation</h5>
              <hr />
              <div className="col-md-6">
                <label>Name</label>
                <br />
                <input
                  type='text'
                  placeholder='e.g. Team Lead'
                  className="form-control" // Bootstrap class for responsiveness
                  style={{ height: '45px', borderRadius: '5px' }}
                />
              </div>
              <div className="col-md-6">
                <label>Parent</label>
                <br />
                <select
                  className="form-select" // Bootstrap class for responsiveness
                  style={{ height: '45px', borderRadius: '5px' }}
                >
                  <option>--</option>
                </select>
              </div>
            </div>
            <hr />
            <div className='d-flex gap-3 flex-wrap '>
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

export default AddDesignation;
