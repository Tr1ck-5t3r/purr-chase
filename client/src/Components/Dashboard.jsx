import activity from '../Assets/activity.png'
import current from '../Assets/current.png'
import find from '../Assets/find.png'
import articleimgfour from '../Assets/articleimgfour.png'
import pawpatterntwoc from '../Assets/pawpatterntwoc.png'
import pawpatterntwo from '../Assets/pawpatterntwo.png'
import { Link } from 'react-router-dom';

const petData = {
    "pets": [
      {
        "name": "Bella",
        "src": "https://example.com/bella.jpg",
        "description": "Bella is a friendly and playful dog who loves long walks and belly rubs.",
        "type": "dog",
        "breed": "Labrador Retriever",
        "age": 3,
        "gender": "female",
        "color": "yellow"
      },
      {
        "name": "Max",
        "src": "https://example.com/max.jpg",
        "description": "Max is a calm and gentle cat who enjoys lounging in sunny spots and being brushed.",
        "type": "cat",
        "breed": "Domestic Shorthair",
        "age": 5,
        "gender": "male",
        "color": "tabby"
      },
      {
        "name": "Charlie",
        "src": "https://example.com/charlie.jpg",
        "description": "Charlie is an energetic and affectionate puppy who loves to play fetch and cuddle.",
        "type": "dog",
        "breed": "Golden Retriever",
        "age": 1,
        "gender": "male",
        "color": "golden"
      },
      {
        "name": "Luna",
        "src": "https://example.com/luna.jpg",
        "description": "Luna is a curious and independent cat who enjoys exploring her surroundings and lounging in high places.",
        "type": "cat",
        "breed": "Siamese",
        "age": 2,
        "gender": "female",
        "color": "seal point"
      },
      {
        "name": "Rocky",
        "src": "https://example.com/rocky.jpg",
        "description": "Rocky is a loyal and protective dog who loves going for hikes and playing fetch.",
        "type": "dog",
        "breed": "German Shepherd",
        "age": 4,
        "gender": "male",
        "color": "black and tan"
      },
      {
        "name": "Milo",
        "src": "https://example.com/milo.jpg",
        "description": "Milo is a sweet and affectionate cat who enjoys cuddling on laps and chasing laser pointers.",
        "type": "cat",
        "breed": "Maine Coon",
        "age": 6,
        "gender": "male",
        "color": "brown tabby"
      },
      {
        "name": "Daisy",
        "src": "https://example.com/daisy.jpg",
        "description": "Daisy is a playful and curious puppy who loves meeting new people and exploring the outdoors.",
        "type": "dog",
        "breed": "Labradoodle",
        "age": 1,
        "gender": "female",
        "color": "cream"
      },
      {
        "name": "Simba",
        "src": "https://example.com/simba.jpg",
        "description": "Simba is a regal and independent cat who enjoys lounging in sunbeams and watching birds from the window.",
        "type": "cat",
        "breed": "Persian",
        "age": 3,
        "gender": "male",
        "color": "white"
      }
    ]
};

function Dashboard() {
  return (
    <div className="text-slate-300 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 flex justify-center align-middle  ">
        <div className="w-10/12">
            <div className=' my-10 flex justify-center  relative'>
                
                <img className=" w-[27rem] h-auto opacity-70 absolute -left-6 -top-20 -rotate-[35deg] "  
                src={pawpatterntwoc} alt='pawpatterntwoc'/>
                
                <div className='flex justify-centerflex  justify-center relative'>
                    
                    <img className=" w-[15rem] opacity-70 h-auto absolute -bottom-20 right-20 -rotate-[45deg] "  
                    src={pawpatterntwo} alt='pawpatterntwo'/>
                    
                    <article className=' hover:drop-shadow-custom2 px-10 py-8 w-9/12 backdrop-blur-sm bg-slate-400 rounded-3xl bg-opacity-10 '>
                        <div className='  text-slate-300 flex text-justify  justify-evenly px-8 py-10'>
                            <div className='pt-3 pl-8'>
                                <h2 className=' font-medium font-MavenPro text-3xl '>
                                    <span className=" hover:cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                                        Hello User
                                    </span>
                                </h2>
                                <div className=' text-justify my-7 pr-16 '>
                                    <p>
                                        Name: User
                                    </p>
                                    <br />
                                    <p>
                                        About: User is a user. They have control over their profile and can edit it as they wish.
                                    </p>
                                    <br/>
                                    <p>
                                        Email: user@user.com
                                    </p>
                                    <br/>
                                    <p>
                                        Phone: 1234567890
                                    </p>
                                    <br />
                                    <p>
                                        Address: 123, User Street, User City
                                    </p>
                                    <br />        
                                </div>
                            </div>
                            <div>
                                <img src={articleimgfour} alt="articleimgfour" />
                                <div className='flex justify-center'>
                                    <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                                        <Link to="/edit_profile">
                                              Edit Profile
                                        </Link>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </article>
            </div>
            </div>
            <div className='my-20 flex justify-evenly backdrop-blur-sm bg-slate-400 rounded-3xl bg-opacity-10 '>
                <div className=' w-2/5 rounded-l-3xl hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/find">
                                Find
                            </Link>
                        </span>
                        <br/>
                        <br/>
                        Find your next purrfect pawrtners
                        <br/>
                        <div className=' flex justify-center '>
                             <img className=" w-56 h-auto " src={find} alt='find'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                           <Link to="/find">
                                Find
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="mt-8 h-[350px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-b from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <div className=' w-2/5 hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/current">
                                Your Pets
                            </Link>
                        </span><br/>
                        <br/>
                        Your current purrfect pawrtners
                        <br/>
                        <div className=' flex justify-center '>
                            <img className=" w-56 h-auto " src={current} alt='current'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/current">
                                Your Pets
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="mt-8 h-[350px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-b  from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <div className=' w-2/5 rounded-r-3xl hover:bg-slate-300 hover:bg-opacity-10 px-4 py-4 text-slate-300 font-MavenPro '>
                    <div className=' px-8 py-3'>
                        <span className=' text-center hover:cursor-pointer py-1 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] text-xl '>
                            <Link to="/activity">
                                Activity
                            </Link>
                        </span><br/>
                        <br/>
                        Check out your activity history
                        <br/>
                        <div className=' flex justify-center '>
                            <img className=" w-56 h-auto" src={activity} alt='activity'/>
                        </div>
                        <br/>
                        <button className=" hover:drop-shadow-custom font-black hover:font-black  font-Quicksand bg-slate-300 mr-7 text-orange-700 py-1 px-4 rounded-xl hover:bg-gray-300 hover:text-orange-500">
                            <Link to="/activity">
                                Activity
                            </Link>
                        </button> 
                    </div>
                </div >
            </div>
            <div className='flex justify-between align-middle '>
                <div className=' bg-slate-400 rounded-3xl bg-opacity-10 w-5/12 py-3'>
                    <h2 className=' font-medium font-MavenPro text-xl text-center '>
                        <span className=" hover:cursor-pointer mx-3 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                            Current Pets
                        </span>
                    </h2>
                    <div className='mt-3 '>
                        <div className=' w-full h-[2px] bg-gradient-to-r  from-neutral-800 via-neutral-500 to-neutral-800 '/>
                    </div>
                    {
                          petData.pets.map((pet, index) => (
                            <div className=' mx-1 flex border-zinc-700 border-2 p-2 hover:bg-zinc-800 ' key={index}>
                                <img className=" w-20 h-20 rounded-full " src={articleimgfour} alt={pet.name}/>
                                <div className=' ml-5 flex gap-4 content-center'>
                                    <h3 className=' font-medium font-MavenPro text-xl w-20 self-center '>
                                        {pet.name}
                                    </h3>
                                    <p>
                                        Type: {pet.type} <br/>
                                        Breed: {pet.breed} <br/>
                                        Age: {pet.age}
                                    </p>
                                </div>
                              </div>
                            ))         
                    }
                </div>
                <div className=' bg-slate-400 rounded-3xl bg-opacity-10 w-5/12 py-3 '>
                    <h2 className=' font-medium font-MavenPro text-xl text-center '>
                        <span className=" hover:cursor-pointer mx-3 bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
                            Your Activity
                        </span>
                    </h2>
                    <div className='mt-3 '>
                        <div className=' w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 '/>
                    </div>
                    {
                        petData.pets.map((pet, index) => (
                            <div className=' mx-1 flex border-zinc-700 border-2 p-2 hover:bg-zinc-800 ' key={index}>
                                <img className=" w-20 h-20 rounded-full " src={articleimgfour} alt={pet.name}/>
                                <div className=' ml-5 flex gap-4 content-center'>
                                    <h3 className=' font-medium font-MavenPro text-xl w-20 self-center '>
                                        {pet.name}
                                    </h3>
                                    <p>
                                        Type: {pet.type} <br/>
                                        Breed: {pet.breed} <br/>
                                        Age: {pet.age}
                                    </p>
                                </div>
                            </div>
                        ))         
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard