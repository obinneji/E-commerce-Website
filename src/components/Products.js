import React, { useState } from 'react';
import { Data } from '../data/productData';
import { Link } from 'react-router-dom';


const Products = () => {
  const [filter, setFilter] = useState(Data);
  const productList = Data;

  const filterProduct = (cat) => {
    const updatedList = productList.filter((x) =>x.category === cat);
    setFilter(updatedList);
}

  const ShowProduct = () => {
    return (
      <>
        <div className='buttons py-5 d-flex justify-content-center'>
          <button className='btn btn-warning me-3 fw-bold' onClick={() =>{setFilter(productList)}}>All</button>
          <button className='btn btn-warning me-3 fw-bold' onClick={()=> filterProduct("men's clothing")}> Men Clothings</button>
          <button className='btn btn-warning me-3 fw-bold' onClick={()=> filterProduct("women's clothing")}>Women's Clothings</button>
          <button className='btn btn-warning me-3 fw-bold' onClick={()=> filterProduct("jewelery")}>Jewelery</button>
          <button className='btn btn-warning me-3 fw-bold'onClick={()=> filterProduct("electronics")}>Electronics</button>
        </div>
        <main className='container'>
        <div className='row row-md-cols-4 '>
        {filter.map((product)  => {
          return (
            
              <div className='mb-0 col'>
                <div className="card h-70 text-center py-4 my-5" key={product.id} style={{width: "18rem"}} >
                  <img src={product.image} className="card-img-top px-4" alt={product.title} height="250px"/>
                    <div className="card-body">
                      <h5 className="card-title mt-3">{product.title.substring(0,25)}..</h5>
                      <p className="card-text fw-bold lead">${product.price}</p>
                      <Link to={`/product/${product.id}`} className="btn btn-warning mt-5 fw-bold text-light">Buy Now</Link>
                    </div>
                </div>
              </div>
            
          )
        })}
        </div>
        </main>
      </>
    ) 
  }

  return (
    <>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='display-1 fw-bolder'>Products</h1>
            <hr />
          </div>
        </div>
        <ShowProduct />
      </div>

    </>
  )
}

export default Products