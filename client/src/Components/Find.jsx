import { useEffect, useState } from "react";

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

function getAllAttributes(data) {
  const attributes = {
    name: new Set(),
    type: new Set(),
    breed: new Set(),
    age: new Set(),
    gender: new Set(),
    color: new Set(),
  };

  data.forEach(pet => {
    Object.keys(attributes).forEach(key => {
      attributes[key].add(pet[key]);
    });
  });

  return attributes;
}

function Find() {
  
  const [distinct, setdistinct] = useState(null);
  useEffect(() => {
    console.log(petData["pets"]);
    setdistinct(getAllAttributes(petData["pets"]));
    console.log(distinct)
  }, [petData]);
  
  return (
    <div className="text-slate-300 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 flex-col justify-center align-middle ">
      <div className="my-8 p-7 w-11/12 rounded-xl  bg-zinc-900">
        <h2 className='font-medium font-MavenPro text-3xl  '>
          Lets find your 
          <span className="mx-2 hover:cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
            Purrfect
          </span>
          Partners
        </h2>
        <form className="p-4 flex mt-10 flex-col items-center justify-center rounded-xl">
          <div className="flex justify-between w-4/5 gap-10">
            <label htmlFor="type" className="text-slate-300 font-bold mb-2">Type:</label>
            <select id="type" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3">
              <option value="">Select Type</option>
              {/* Add more options dynamically if needed */}
            </select>

            <label htmlFor="breed" className="text-slate-300 font-bold mb-2">Breed:</label>
            <select id="breed" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3">
              <option value="">Select Breed</option>
              {/* Add more options dynamically if needed */}
            </select>
          </div>
          <br/>
          <div className="flex justify-between w-4/5 gap-10">
          <label htmlFor="age" className="text-slate-300 font-bold mb-2">Age:</label>
          <select id="age" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3">
            <option value="">Select Age</option>
            {/* Add more options dynamically if needed */}
          </select>

          <label htmlFor="gender" className="text-slate-300 font-bold mb-2">Gender:</label>
          <select id="gender" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3">
            <option value="">Select Gender</option>
            {/* Add more options dynamically if needed */}
          </select>
          </div>
          <br/>
          <div className="flex justify-between w-2/5 gap-10">
          <label htmlFor="color" className="text-slate-300 font-bold mb-2">Color:</label>
          <select id="color" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3">
            <option value="">Select Color</option>
            {/* Add more options dynamically if needed */}
          </select>
          </div>
          <br/>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">Submit</button>
        </form>

      </div>
      <div className='my-10 w-11/12 px-6 py-16 bg-zinc-900 rounded-xl '>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {petData["pets"].map((image, index) => (
                <div className="group" key={index}>
                  <div className="bg-zinc-800 bg-opacity-30 shadow-lg rounded-xl hover:bg-zinc-700 hover:bg-opacity-55">
                    <div className="h-40 bg-contain" style={{ backgroundImage: `url(${image.src})` }}></div>
                    <div className="px-6 py-4">
                      <h3 className="text-xl font-semibold text-white mb-2">Gallery Title</h3>
                      <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies efficitur lacus.</p>
                    </div>
                    <button className="block w-full py-2 px-4 bg-orange-600 text-white text-center hover:bg-rose-500 rounded-b-xl">Buy</button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
    </div>
  )
}

export default Find
