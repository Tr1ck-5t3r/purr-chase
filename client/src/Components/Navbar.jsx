import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth';

function Navbar() {
  const {setuser,user} = useAuth();

  return (

    <div className=" mt-0 fixed w-full z-10 top-0">
      <nav className="bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 py-4 px-6 flex items-center justify-between ">
          <Link to="/">
            <div className='flex'>
              <div className="ml-4 text-3xl font-Belanosima text-center font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">Purrchase</div>
            </div>
          </Link>
          <div>
            <ul className=" text-slate-300 text-base font-MavenPro flex space-x-10  ">
              <li className=" font-medium hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/">Home</Link>
              </li>
              <li className=" font-medium hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/About">About</Link>
              </li>
              <li className=" font-medium hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/Find">Find</Link>
              </li>
              <li className=" font-medium hover:text-gray-300 hover:drop-shadow-custom">
                <Link to="/Gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            {!(user == {})?
              <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-600 py-1 px-4 rounded-xl hover:text-red-600 ">
                <Link to="/login">Login</Link>
              </button>
              :   
              <button 
                className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-600 py-1 px-4 rounded-xl hover:text-red-600"
                onClick={() => {
                  localStorage.removeItem("token")
                  window.location.href = "/login"
                  setuser({}) 
                  alert("Logged out successfully")
                }}
              >
                Logout
              </button> 
            }
          </div>
      </nav>
    </div>
  )
}

export default Navbar