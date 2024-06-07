import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            {"book_title":"The Alchemist","author":"Paulo Coelho","publisher":"Xyz Publications","price":250},
            {"book_title":"Harry Potter","author":"JK Rowling","publisher":"cherry blossom","price":399},
            {"book_title":"The Jungle Book","author":"Rudyard Kipling","publisher":"h&h Publications","price":650},
            {"book_title":"The Goat life","author":"Benyamin","publisher":"abc Publications","price":350},
            {"book_title":"Oliver Twist","author":"Charles Dickens","publisher":"h&p Publications","price":199}
            
        ]
    )
    return (
        <div>
           <Navbar/>

            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                   return <tbody>
                                   <tr>
                                       <th scope="row">{value.book_title}</th>
                                       <td>{value.author}</td>
                                       <td>{value.publisher}</td>
                                       <td>{value.price}</td>
                                   </tr>
                                  
                               </tbody> 
                                }
                            )}
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll