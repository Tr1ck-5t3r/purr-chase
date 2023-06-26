import React from 'react'
import articleimg from '../Assets/articleimg.png'
import pawpatterntwoc from '../Assets/pawpatterntwoc.png'
import pawpatterntwo from '../Assets/pawpatterntwo.png'
function Home() {
  return (
    <div className=' bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-800 px-10 py-8 '>
        <br/>
        <br/>
        <div className=' mt-10 flex justify-center  relative'>
            
            <img className=" w-[30rem] h-auto opacity-70 absolute left-12 -top-20 -rotate-[40deg] "  
            src={pawpatterntwoc} alt='pawpatterntwoc'/>

            <div className='flex justify-centerflex  justify-center relative'>
                
                <img className=" w-[18rem] opacity-70 h-auto absolute -bottom-24 right-32 -rotate-[45deg] "  
                src={pawpatterntwo} alt='pawpatterntwo'/>

                <article className=' px-12 py-10  w-8/12 backdrop-blur-sm bg-slate-400 rounded-3xl bg-opacity-10 '>
                    
                    <div className='  text-slate-300 flex text-justify  justify-evenly px-12 py-10'>
                        
                        <div className='pt-8'>
                            <h2 className=' font-MavenPro text-3xl py-4 '>
                                Wanna become a
                                <span className=" ml-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                                     Pet Parent?
                                </span>
                            </h2>
                            <h4 className='  font-MavenPro text-base'>
                                Pets are the perfect foil to boredom!. 
                                They are the best companions one can have.
                                Wanna spend your time with these best buddies?
                                Find your perfect match now!.
                            </h4>
                        </div>

                        <div>
                            <img src={articleimg} alt="articleimg" />
                        </div>

                    </div>

                </article>
                
            </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default Home
