import React from 'react'
import bgImg from '../assets/bgImg.jpeg';
import logo from "../assets/bluelogo.png";
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className='flex justify-center items-center m-auto bg-white max-w-xl'>
    <div>
    <img src={bgImg} alt=''/>
        <div>
         <img src={logo} alt='' className='flex justify-center items-center mx-auto my-4'/> 
          <button 
          className='bg-[#0F515F] p-3 rounded-md w-full h-16  mx-auto my-4 text-white text-center items-center text-xl'>
              <Link to="/login">Login</Link>
          </button>
          <button className='text-[#0F515F] border-[#0f515f] border p-3 rounded-md w-full h-16  mx-auto my-4 bg-white text-center items-center text-xl'>Register</button>
        </div>
    </div>
    </div>
  )
}
