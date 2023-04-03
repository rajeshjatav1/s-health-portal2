import React from 'react'
import Navbar from '../components/Navbar'

const VideoCourse = () => {
  return (
    <div id='placement'>
        <div>
            <Navbar/>
        </div>
        <div className='row mt-5 margin-auto m-2'>
        <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className='col-lg p-3 m-1 rounded-4'>
            <div className='card-img text-center'>
            <img style={{height:'100px',width:'auto'}} className='card-img' src="/C.png" alt="" />
            </div>
            <h2 className='mt-3 text-center'>C Language Tutorials</h2>
            <ul>
                <li>
                    C By Sourabh Shukla
                </li>
            </ul>
        </div>
        <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className='col-lg p-3 m-1 rounded-4'>
            <div className='card-img text-center'>
            <img style={{height:'100px',width:'auto'}} className='card-img' src="/C++.png" alt="" />
            </div>
            <h2 className='mt-3 text-center'>C++ Tutorials</h2>
        </div>
        <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className='col-lg col-lg p-3 m-1 rounded-4'>
            <div className='card-img text-center'>
            <img style={{height:'100px',width:'auto'}} className='card-img' src="/Java.png" alt="" />
            </div>
            <h2 className='mt-3 text-center'>Java Tutorials</h2>
        </div>
        </div>
    </div>
  )
}

export default VideoCourse
