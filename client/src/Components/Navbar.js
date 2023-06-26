import React from 'react'
import { Link } from 'react-router-dom'
import titleimg from '../Assets/titleimg.png'

function Navbar() {
  return (
    <div className="">
      <nav className="bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-800 py-4 px-6 flex items-center justify-between ">
          <Link to="/">
            <div className='flex'>
              <div className="text-orange-500 ml-7 text-3xl font-extrabold font-Belanosima hover:drop-shadow-custom1">Purr-chase</div>
              <img className="ml-4 w-10 h-10" src={titleimg} alt="titleimg hover:drop-shadow-custom1" />
            </div>
          </Link>
          <div>
            <ul className=" text-orange-500 text-base font-Quicksand flex space-x-10  ">
              <li className="font-extrabold hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/">Home</Link>
              </li>
              <li className="font-extrabold hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/About">About</Link>
              </li>
              <li className="font-extrabold hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/Find">Find</Link>
              </li>
              <li className="font-extrabold hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li className="font-extrabold hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/Services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className=" hover:drop-shadow-custom1 font-black hover:font-black  font-Quicksand bg-slate-600 mr-7 text-orange-500 py-1 px-4 rounded-full hover:bg-gray-100 hover:text-orange-500">Login</button>
          </div>
          
      </nav>
    </div>
  )
}

export default Navbar