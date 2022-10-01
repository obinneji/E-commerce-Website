import React from 'react'

const Login = () => {
    return (
        <>

            <button type="button" class="btn btn-outline-warning me-3 fw-bold text-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className='fa fa-sign-in  me-1'></i>

                Login
            </button>

            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog"> 
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="loginModalLabel">Login To FORTMART</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            <form>
                                <div class="mb-3">
                                    <label for="loginInputEmail1" class="form-label fw-bold">Email address</label>
                                    <input type="email" class="form-control" id="loginInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="loginInputPassword1" class="form-label fw-bold">Password</label>
                                    <input type="password" class="form-control" id="loginInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="loginCheck1"/>
                                        <label class="form-check-label" for="loginCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-warning w-100 fw-bold">Login</button>
                            </form>
                            <button class="btn btn-primary w-100 my-3 fw-bold"> 
                            <i class='fa fa-facebook me-2'></i>

                            Sign in with Facebook
                            </button>
                        </div>
                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login