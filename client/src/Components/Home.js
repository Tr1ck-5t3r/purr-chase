import React from 'react'
import articleimg from '../Assets/articleimg.png'

function Home() {
  return (
    <div className=' flex justify-center'>
        <article className='flex justify-evenly w-3/5'>
            <div>
                <h2>Wanna become a pet parent?</h2>
                <h4>
                    Pets are the perfect foil to boredom!. 
                    They are the best companions one can have.
                    Wanna spend your time with these best buddies?
                    Find your perfect match now!.
                </h4>
            </div>
            <div>
                <img src={articleimg} alt="articleimg" />
            </div>


        </article>
            
    </div>
  )
}

export default Home
