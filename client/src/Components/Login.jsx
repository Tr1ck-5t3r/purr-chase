import { useState } from 'react';
import articleimgfive from '../Assets/articleimgfive.png'
import { Link } from 'react-router-dom';

function Login() {
  // State for login form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login submitted:', { email, password });
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between backdrop-blur-sm bg-slate-400 text-white rounded-3xl bg-opacity-10 w-7/12">
            <div className=' p-20 '>
                <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Log in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>
                <div className="text-sm flex justify-end">
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                    Forgot your password?
                </a>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Sign in
                    </button>
                </div>
                </form>
                <div className='mt-5'>
                    <p>
                        Dont have and account?
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/register">
                                Register
                            </Link>
                        </button> 
                    </p>
                </div>
              </div>
            <div className='p-16'>
              <img src={articleimgfive} className='' alt="about image" />
            </div>
      </div>
    </div>
  );
}

export default Login;
