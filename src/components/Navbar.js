import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../buttons/Login'
import Signup from '../buttons/Signup'
import CartBtn from '../buttons/CartBtn'



const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder logo" to="/"><img src='..\Images\fortmat-logo.png' height="50px"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse " id="navbarNav ">
      <ul className="navbar-nav mx-5 ">
        <li className="nav-item">
          <Link className="nav-link active mx-4 fw-bold " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4 fw-bold " to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4 fw-bold  " to="/about">About</Link>
        </li>
        <li className="nav-item mx-4 fw-bold ">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Login />
    <Signup />
    <CartBtn />
  </div>
</nav>
    </>
  )
}

export default Navbar