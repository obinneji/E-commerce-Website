import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {delItem} from "../redux/actions/index"

const Cart = () => {
  const state = useSelector((state)=> state.addItems);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  const cartItems = (cartItem) => {
      const handleClose = (item) => {
          dispatch(delItem(item));
      }


      const incrementNumber =  () => {
        setNumber((prevNumber) => {
          return (prevNumber = prevNumber + 1)
         
        })
      }

      const decrementNumber =  () => {
        setNumber((prevNumber) => {
          return (prevNumber = prevNumber - 1)
         
        })
      }
    return (
      <>
      <div className='py-4 bg-light my-4' key={cartItem.id}>
        <div className='container'>
          <button 
          onClick={()=>{handleClose(cartItem)}}
          className='btn-close float-end rounded-4' 
          aria-label='Close'></button>
          <div className='row'>
            <div className='col-md-4'>
              <img src={cartItem.image} alt={cartItem} width="200px" height="200px" />
            </div>

            <div className='col-md-4'>
              <h3 className='display-6 fw-bolder'>{cartItem.title}</h3>
              <p className='fw-bold'>${cartItem.price}</p>
              <p className='fw-bold'>Quantity: {number}</p>
              <p className='fw-bold lead'>Total Price: {cartItem.price * number}</p>
              <button className='btn btn-danger me-3' onClick={decrementNumber}><i className='fa fa-minus'></i></button>
              <button className='btn btn-success me-3' onClick={incrementNumber}><i className='fa fa-plus'></i></button>
            </div>
          </div>
        </div>
      </div>

      </>
    )
  }

  const emptyCart = () => {
    return (
      <>
      <div className='container-fluid py-4 bg-light my-3'>
        <div className='row'>
        <h3 className='py-4 display-4 fw-bold mx-3'>Cart Is Empty</h3>

        </div>
      </div>
      </>
    )
  }

  const checkOutButton = () => {
    return (
      <>
      <div className='d-flex justify-content-center conatiner-fluid mx-5 mb-3'>
      <Link to="/checkout" className='btn btn-success mx-4  fw-bold w-100 text-light' >Proceed to Checkout</Link>

      </div>
      </>
    )
  }

  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && checkOutButton()}
    </>
  )
}

export default Cart