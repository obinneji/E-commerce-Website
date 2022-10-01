import React from 'react';
import { useParams } from 'react-router';
import { Data } from '../data/productData';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetails = () => {
    const productList = Data;
    const proId = useParams();
    const proDetail = productList.filter(x=>x.id == proId.id);
    const product =  proDetail[0];

    const dispatch = useDispatch()


    const addToCart = (product) => {
        dispatch(addItem(product));

    }

    const removeFromCart = (product) => {
        dispatch(delItem(product));
    }
  return (
    <>
    <div className='container py-5 my-5 '>
    
        <div className='row'>
            <div className='col-md-6 d-flex'>
                <img src={product.image} alt={product.title} width="300px"   className='mt-5'/>
            </div>
            <div className='col-md-6 py-4 my-0'>
                <h1 className='fw-bold display-5'>{product.title}</h1>
                <h2>${product.price}</h2>
                <p className='py-2 mt-4 mb-4 lead '>{product.description}</p>
                <button onClick={()=>{addToCart(product)}} className='btn btn-success me-2 text-light fw-bold'>Add to Cart</button>
                <button  onClick={()=>{removeFromCart(product)}} className='btn btn-danger me-2 fw-bold'>Remove from Cart</button>
                <Link to="/cart" className='btn btn-warning me-2 text-light fw-bold'>Go to Cart</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails