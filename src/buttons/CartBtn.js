import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const state = useSelector((state)=> state.addItems)
  return (
    <>
    <Link to="/cart">
    <button className="btn btn-outline-warning me-3 fw-bold text-dark"><i class= "fa fa-regular fa-cart-plus me-1"></i>Cart({state.length})</button>

    </Link>
    </>
  )
}

export default CartBtn