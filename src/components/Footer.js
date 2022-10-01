import React from 'react'
import "../Css/footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section class="footer bg-dark py-5 ">
        <Link to="/"><img src='..\Images\fortmat-logo.png' height="70px" className='mx-5'></img></Link>
        <div class="container footer-content  text-white">
            <div class=" footer address ">
              <div class="location">
                <i className='fa fa-map-marker ' width="500px"></i>
                <p > No 14  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua</p>
              </div>
              <div class="email-phone">
                <div class="address-phone">
                  <i className='fa fa-phone footer-icons'></i>
                  <p className="my-2">+243-5755-99</p>
                </div>
                <div class="address-email">
                  <i className='fa fa-envelope footer-icons'></i>
                  
                  <p className='my-2'>Fortmart@email.com</p>
                </div>
              </div>

              <div class="footer-about">
                <Link to="/about">About us</Link>
                <a href="">Jobs</a>
                <a href="">Press</a>
                <a href="">Blog</a>

              </div>
              <div class="footer-about">
                <Link to="/contact">Contact us</Link>
                <a href="">Terms</a>
                <a href="">Privacy</a>

              </div>

              <div class="icons">
                <i class="fa fa-facebook footer-icons"></i>
                <i class="fa fa-twitter footer-icons"></i>
                <i class="fa fa-instagram footer-icons"></i>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Footer