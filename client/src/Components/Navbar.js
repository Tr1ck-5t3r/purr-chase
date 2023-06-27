import React from 'react'
import { Link } from 'react-router-dom'
import titleimg from '../Assets/titleimg.png'

function Navbar() {
  return (
    <div className="">
      <nav className="bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 py-4 px-6 flex items-center justify-between ">
          <Link to="/">
            <div className='flex'>
              <div className="text-orange-500 ml-7 text-3xl font-extrabold font-Belanosima hover:drop-shadow-custom1">Purr-chase</div>
              <img className="ml-4 w-10 h-10" src={titleimg} alt="titleimg hover:drop-shadow-custom" />
            </div>
          </Link>
          <div>
            <ul className=" text-slate-300 text-base font-Quicksand flex space-x-10  ">
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
            <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">Login</button>
          </div>
          
      </nav>
    </div>
  )
}

export default Navbar