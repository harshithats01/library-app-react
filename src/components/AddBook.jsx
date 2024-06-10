import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBook=()=> {
  const [data,setData]=useState({
    "book_title":" ",
    "category":" ",
    "published_year":" ",
    "author":" ",
    "description":" ",
    "dist_name": " ",
    "publisher":" ",
    "price":" "

  })
  const inputHandler =(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
  }
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Book Title:</label>
              <input type="text" className="form-control" name='book_title' value={data.book_title} onChange={inputHandler} />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Category:</label>
              <select name='category' id="" className="form-control" value={data.category} onChange={inputHandler}>
                <option value="Thriller" >Thriller</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Comic">Comic</option>
                <option value="Classic">Classic</option>
              </select>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Published year:</label>
              <input type="text" className="form-control" name='published_year' value={data.published_year} onChange={inputHandler} />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Author name:</label>
              <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <label htmlFor="" className="form-label">Description:</label>
              <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler} ></textarea>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Distributer Name:</label>
              <input type="text" className="form-control" name='dist_name' value={data.dist_name} onChange={inputHandler} />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Publisher Name:</label>
              <input type="text" className="form-control" name='publisher' value={data.publisher} onChange={inputHandler} />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Price:</label>
              <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />

            </div><br/>
            
             
            
          </div>
          
        </div><br/>
        <button className="btn btn-success" onClick={readValue} >Add Book</button>

      </div>

    </div>
  )
}

export default AddBook