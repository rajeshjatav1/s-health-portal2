import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div class="container1 d-flex mt-5">
                <div className='p-5 border border-light border-4 w-75' id="para">
                    <p id="p1">
                        I developed this website for students who usually face common health related problems, when i was a
                        student i faced many health related issues, i found that many students whome was studying with me was
                        also usually face some similar type of problems, so i decided to develop a platform which can help all these type of
                        student to get cause, precausions and home remedies to get relief from these problems
                    </p>
                    <p id="p2">
                        When i was a student i was so confused about my placement preparation where to start...? how to
                        start...? so i've added some youtube playlist and useful websites from where i've prepared, which can
                        help you to get ready for your placements
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default About
