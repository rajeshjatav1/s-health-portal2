
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './health/Home';
import Home1 from './placement/Home'
import {
  createBrowserRouter,
  RouterProvider,
}
  from 'react-router-dom';
import About from './components/About';
import './static/about.css'
import Cold from './health/Cold';
import Cough from './health/Cough';
import Fever from './health/Fever';
import Allergies from './health/Allergies';
import Headache from './health/Headache';
import Prehome from './components/Prehome';
import VideoCourse from './placement/VideoCourse';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Prehome/>
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path:'/health',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>

  },
  {
    path:'/health/cold',
    element:<Cold/>
  },
  {
    path:"/health/cough",
    element:<Cough/>
  },
  {
    path:'/health/fever',
    element:<Fever/>
  },
  {
    path:'/health/allergies',
    element:<Allergies/>
  },
  {
    path:'health/headache',
    element:<Headache/>
  },
  {
    path:'placement',
    element:<Home1/>
  },
  {
    path:'/placement/video-courses',
    element:<VideoCourse/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
