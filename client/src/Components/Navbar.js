import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-500 text-white py-4 px-6 flex items-center justify-around ">
        <div className="text-xl font-bold">Purr-chase</div>
        <div>
          <ul className="flex space-x-20 ">
            <li className="hover:text-gray-300"><Link to="/">Home</Link></li>
            <li className="hover:text-gray-300"><Link to="/About">About</Link></li>
            <li className="hover:text-gray-300"><Link to="/Find">Find</Link></li>
          </ul>
        </div>
        <div>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-100 hover:text-blue-400">Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
