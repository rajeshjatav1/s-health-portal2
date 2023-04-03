import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div id='placement'>
            <div>
                <Navbar />
            </div>
            <div className='container mt-4'>
                <h3 style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className='text-center p-4 shadow-lg border border-dark border-2 p-2 rounded-2'>Welcome to placement preparation page <i class="bi bi-pen-fill"></i></h3>
                <h3 className='mt-4 text-center'>Here you will find practice sites and free courses from Youtube and from various sites</h3>
                <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className='d-flex flex-column mt-4 p-4 border border-2 border-dark rounded-2 shadow-lg'>
                    <div className='mt-2'>
                        <Link to='/placement/video-courses' style={{ color: '#105c93', backgroundColor: '#007a803b' }} className='text-decoration-none fs-5 px-4 rounded-pill p-2'>Explore Video Courses <i class="bi bi-play-btn-fill text-success ps-2"></i></Link>
                        <p className='text-dark mt-3 ms-2 m-0'>Explore various technical video courses from youtube and from other sites for free</p>
                        <p className='ms-2 text-dark m-0'>Courses include programming in <strong>C, C++, Java, Python, C#</strong> and many more </p>
                    </div>
                    <div className='mt-4'>
                        <Link style={{ color: '#105c93', backgroundColor: '#007a803b' }} className='text-decoration-none fs-5 p-1 px-4 rounded-pill p-2'>Explore Text Based Courses <i class="bi bi-book text-success p-2"></i></Link>
                        <p className='text-dark mt-3 ms-2 m-0'>Explore text based courses which are in simple and precise language for making notes</p>
                        <p className='ms-2 text-dark m-0'>Courses includes text bases courses of <strong>C, C++, C#, Java, Python</strong></p>
                    </div>
                    <div className='mt-4'>
                        <Link style={{ color: '#105c93', backgroundColor: '#007a803b' }} className='text-decoration-none fs-5 p-1 px-4 rounded-pill p-2'>Explore Programming Practice Sites <i class="bi bi-code-slash text-success ps-2"></i></Link>
                        <p className='text-dark mt-3 ms-2 m-0'>Explore various sites which will help you to improve your problem solving skills</p>
                    </div>
                    <div className='mt-4'>
                        <Link style={{ color: '#105c93', backgroundColor: '#007a803b' }} className='text-decoration-none fs-5 p-1 px-4 rounded-pill p-2'>Explore Technical Interview Questions <i class="bi bi-person-check-fill text-success ps-2"></i></Link>
                        <p className='text-dark mt-3 ms-2 m-0'>Explore Interview questions which are frequently asked in interviews and get ready for your technical interview</p>
                    </div>
                    <div className='mt-4'>
                        <Link style={{ color: '#105c93', backgroundColor: '#007a803b' }} className='text-decoration-none fs-5 p-1 px-4 rounded-pill p-2'>Explore HR Questions <i class="bi bi-person-check-fill text-success ps-2"></i></Link>
                        <p className='text-dark mt-3 ms-2 m-0'>Explore HR Interview questions which are frequently asked in interviews and get interview ready</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
