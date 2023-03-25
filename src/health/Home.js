import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      </div>    
    <div style={{ backgroundColor: '#0c0c0ca6' }} class="container my-4 rounded-4 p-4 border">
      <div className='text-light fw-bold fs-5 p-4'>
        <p> Welcome dear reader, we hope our content will make you healthy soon, do not forget to read daily health tips</p>
      </div>
      <div>
        <ul className='text-light' id="list">
          <li><Link className='text-decoration-none text-light' to="/health/cold">Cold (सर्दी)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/health/cough" >Cough (खाँसी)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/health/fever" >Fever (बुखार)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/health/allergies" >Allergies</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/health/headache" >Headaches (सिर दर्द)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Skin infection (त्वचा संक्रमण)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Digestion (पाचन)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Skin Problems (त्वचा संबंधी समस्याएं)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Hair loss (बालों का झड़ना)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Sleep Issue (नींद की समस्या)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Malaria (मलेरिया)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Jaundice (पीलिया)</Link></li>
          <li><Link className='text-decoration-none text-light ' to="/" >Typhoid (टाइफाइड)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/" >Tongue Ulcers (जीभ के छाले)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/" >Conjunctivitis (आँख आना)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/" >Concentration Issue (एकाग्रता की समस्या)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/" >Extra usage of social media (सोशल मीडिया का अधिक प्रयोग)</Link></li>
          <li><Link className='text-decoration-none text-light' to="/" >Pimples (चहरे पर दाने)</Link></li>
        </ul>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>

  )
}

export default Home
