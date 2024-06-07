import React from 'react'
import Navbar from './Navbar'

function AddBook() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Book Title:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Category:</label>
              <select name="" id="" className="form-control">
                <option value="">Thriller</option>
                <option value="">Fantasy</option>
                <option value="">Science Fiction</option>
                <option value="">Mystery</option>
                <option value="">Comic</option>
                <option value="">Classic</option>
              </select>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Published year:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Author name:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <label htmlFor="" className="form-label">Description:</label>
              <textarea name="" id="" className="form-control"></textarea>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Distributer Name:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Publisher Name:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Price:</label>
              <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <button className="btn btn-success">Add Book</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddBook