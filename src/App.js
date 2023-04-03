import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [message,setMessage] = useState('');
  useEffect(()=>{
    if(localStorage.getItem('access_token')==null){
      window.location.href='/'
    }
    else{
      (async () =>{
        try {
          const {data} = await axios.get('http://localhost:3000/home',{
            headers:{
              'Content-Type': 'application/json'
            }
          });
          setMessage(data.message);
        }
        catch(e){
          console.log('not auth')
        }
      })()
    };
  },[]);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div style={{backgroundColor:'#0c0c0ca6'}} className="container border p-5 my-4 rounded-5">
          <div className="text-light text-center mt-5">
            <h5 className='mt-5'>Welcome to Student's Portal <br />
              This portal is mainly developed for Students who face heath related common problems,
              We've also added some important materials for your placement preparation
              if you are facing any health or placement related issue then you are on right place</h5>
          </div>
          <div className='text-center text-light flex-column mt-2'>
            <div className='fs-4'>
              <h5 style={{backgroundColor:'#0c0c0c70'}} className='mt-5 p-3 rounded-4'>Select what you want to study about</h5>
            </div>
            <button className='btn btn-primary my-2 w-25 p-2'><Link className='text-light text-decoration-none' to='/health'> Health</Link></button><br />
            <button className='btn btn-primary my-2 w-25 p-2'><Link className='text-light text-decoration-none' to='/placement'> Placement Preparation</Link></button>
          </div>
        </div>
      </div>
      <div style={{ bottom: '0px', position: 'absolute', width: '100%' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
