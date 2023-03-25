import React from 'react'

const Prehome = () => {
    return (
        <div className='d-flex align-items-center'>
            <div style={{ backgroundColor: '#0c0c0ca6' }} className="container border p-5 my-4 rounded-5">
                <div className="text-light text-center mt-5">
                    <h5 className='mt-5'>Welcome to Student's Portal <br />
                        <br />
                        <br />
                        This portal is mainly developed for Students who face heath related common problems,
                        We've also added some important materials for your placement preparation
                        if you are facing any health or placement related issue then you are on right place</h5>
                </div>
                <div className='text-center text-light flex-column mt-2'>
                    <h5 className='mt-5 mb-4'>Please Click on the Login button to see the content</h5>
                    <button className="btn btn-primary w-25" data-bs-toggle='modal' data-bs-target="#login">Login</button>
                    <div className="modal fade modal-centered text-dark" id="login">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex flex-column justify-content-center">
                                    <h5 className='text-dark mb-4'>Please Enter Your Login Details</h5>
                                    <div className='px-5'>
                                    <input className='form-control my-3' type="text" placeholder='Enter your number' />
                                    <input className='form-control mt-3' type="text" placeholder='Password' />
                                    </div>
                                    
                                </div>
                                <div className="container my-3 px-5">
                                    <button className="btn btn-primary w-25">Login</button>
                                <hr />
                                <div className=''>
                                    <p>Not have an account yet?</p>
                                    <div className="d-flex justify-content-center">
                                        <a style={{backgroundColor:'#5252f121'}} className='text-decoration-none border p-1 rounded-pill px-3' data-bs-toggle='modal' data-bs-target='#register' data-bs-dismiss='modal' href=''><i className="bi bi-person-plus me-2"></i>Register</a>
                                        <a style={{backgroundColor:'#5252f121'}} className='text-decoration-none mx-3 p-1 border rounded-pill px-3' href="/"><i className="bi bi-pencil-square me-2"></i>Forgot Password</a>
                                    </div>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade text-dark" id='register'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                </div>
                                    <div className="modal-body px-4">
                                        <h4 className='mb-3'>Please Enter Your Details Below</h4>
                                        <div className="d-flex">
                                            <input placeholder='First Name' type="text" className="form-control me-1" />
                                            <input placeholder='Last Name' type="text" className="form-control ms-1" />
                                        </div>
                                        <input type="text" placeholder='Enter Your Email' className='form-control my-3' />
                                        <input type="text" placeholder='Enter Your Number' className='form-control my-3' />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prehome
