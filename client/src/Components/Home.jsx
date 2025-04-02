import articleimgfour from '../Assets/articleimgfour.png'
import pawpatterntwoc from '../Assets/pawpatterntwoc.png'
import pawpatterntwo from '../Assets/pawpatterntwo.png'
import { Link } from 'react-router-dom'
import gallery from '../Assets/gallery.png'
import learn from '../Assets/learn.png'
import help from '../Assets/help.png'
import useAuth from '../hooks/useAuth'

function Home() {
    const { user } = useAuth();

    console.log(user);

  return (
    <div>
        <div className=' bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 '>
            <br/>
            <br/>
            <div className=' mt-10 flex justify-center  relative'>
                
                <img className=" w-[30rem] h-auto opacity-70 absolute left-12 -top-20 -rotate-[40deg] "  
                src={pawpatterntwoc} alt='pawpatterntwoc'/>

                <div className='flex justify-centerflex  justify-center relative'>
                    
                    <img className=" w-[18rem] opacity-70 h-auto absolute -bottom-24 right-32 -rotate-[45deg] "  
                    src={pawpatterntwo} alt='pawpatterntwo'/>

                    <article className=' hover:drop-shadow-custom2 px-12 py-10  w-8/12 backdrop-blur-sm bg-slate-400 rounded-3xl bg-opacity-10 '>
                        
                        <div className='  text-slate-300 flex text-justify  justify-evenly px-12 py-10'>
                            
                            <div className='pt-3'>
                                <h2 className=' font-MavenPro text-3xl py-4 '>
                                    Wanna become a
                                    <Link to="/find">
                                        <span className=" hover:cursor-pointer ml-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                                            Pet Parent?
                                        </span>
                                    </Link>
                                </h2>
                                <h4 className='  font-MavenPro text-base'>
                                    Pets are the perfect foil to boredom!. 
                                    They are the best companions one can have.
                                    Wanna spend your time with these best buddies?
                                    Find your perfect match now!.
                                </h4>
                                <br/>
                                <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                                    <Link to="/find">
                                    Find now
                                    </Link>
                                </button>
                            </div>

                            <div>
                                <img src={articleimgfour} alt="articleimgfour" />
                            </div>

                        </div>

                    </article>
                    
                </div>
            </div>
            <br/>
            <br/>
        </div>
        <div className=' bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 flex justify-center '>
            <div className=' m-6 flex justify-evenly w-10/12 backdrop-blur-sm bg-slate-400 rounded-3xl bg-opacity-10 '>
                <div className=' w-2/5 rounded-l-3xl hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/gallery">
                            Gallery
                            </Link>
                        </span>
                        <br/>
                        <br/>
                        Check out our Well fed pets
                        <br/>
                        <div className=' flex justify-center '>
                            <img className=" w-56 h-auto " src={gallery} alt='gallery'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/gallery">
                            Gallery
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="mt-8 h-[350px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-b from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <div className=' w-2/5 hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/about">
                            Learn more
                            </Link>
                        </span><br/>
                        <br/>
                        Find out more about us
                        <br/>
                        <div className=' flex justify-center '>
                            <img className=" w-56 h-auto " src={learn} alt='learn'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/about">
                            About Us
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="mt-8 h-[350px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-b  from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <div className=' w-2/5 rounded-r-3xl hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/dashboard">
                                Dashboard
                            </Link>
                        </span><br/>
                        <br/>
                        Your account dashboard
                        <br/>
                        <div className=' flex justify-center '>
                            <img className=" w-56 h-auto " src={help} alt='help'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/dashboard">
                            Dashboard
                            </Link>
                        </button> 
                    </div>
                </div >
            </div>
        </div>
    </div>
  )
}

export default Home
