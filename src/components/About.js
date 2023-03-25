import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div class="container1 d-flex mt-4 p-5">
                <div style={{backgroundColor:'#0c0c0ca6'}} className='p-5 border text-light fw-bold w-75' id="para">
                    <h5 className='p-4'>
                        I developed this website for students who usually face common health related problems, when i was a
                        student i faced many health related issues, i found that many students whome was studying with me was
                        also usually face some similar type of problems, so i decided to develop a platform which can help all these type of
                        student to get cause, precausions and home remedies to get relief from these problems
                    </h5>
                    <h5 className='p-4'>
                        When i was a student i was so confused about my placement preparation where to start...? how to
                        start...? so i've added some youtube playlist and useful websites from where i've prepared, which can
                        help you to get ready for your placements
                    </h5>
                </div>
            </div>
            <div style={{bottom:0}} className='position-absolute w-100'>
                <Footer />
            </div>
        </>

    )
}

export default About
