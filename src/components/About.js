import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        
            <div style={{height:'500px'}}>
                <div>
                    <Navbar />
                </div>
                <div class=" d-flex align-items-center mt-5 p-1">
                    <div style={{ backgroundColor: '#dcebd7',color: '#105c93' }} className='p-2 mx-3 rounded shadow border fw-bold'>
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
                <div className='footer'>
                    <Footer />
                </div>
            </div>
       

    )
}

export default About
