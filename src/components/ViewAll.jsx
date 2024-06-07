import React from 'react'
import Navbar from './Navbar'

function ViewAll() {
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
                            <tbody>
                                <tr>
                                    <th scope="row">Harry Potter</th>
                                    <td>J.K Rowling</td>
                                    <td>Cherry Blossom</td>
                                    <td>Rs.450</td>
                                </tr>
                                <tr>
                                    <th scope="row">The Jungle Book</th>
                                    <td>Rudyard Kipling</td>
                                    <td>XyZ publications</td>
                                    <td>Rs.399</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sherlock Holmes</th>
                                    <td>Sir Arthur Conan Doyle</td>
                                    <td>Hz publications</td>
                                    <td>Rs.399</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll