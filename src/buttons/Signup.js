import React from 'react'

const Signup = () => {
    return (
        <>
            <button type="button" class="btn btn-outline-warning me-3 fw-bold text-dark" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className='fa fa-regular fa-user-plus me-1'></i>
                Register
            </button>
            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="signupModalLabel">Create Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            <form>
                                <div class="mb-3">
                                    <label for="signupInputEmail1" class="form-label fw-bold">Email address</label>
                                    <input type="email" class="form-control" id="signupInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="signupInputPassword1" class="form-label fw-bold">Password</label>
                                    <input type="password" class="form-control" id="signupInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="signupCheck1" />
                                    <label class="form-check-label" for="signupCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-warning w-100 fw-bold">Create</button>
                            </form>
                            <button class="btn btn-primary w-100 fw-bold my-2">
                                <i class='fa fa-facebook me-2'></i>

                                Create with Facebook
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup