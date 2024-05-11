import articleimgfive from '../Assets/articleimgtwo.png'

function Gallery() {
  const imageData = {
    "images": [
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      },
      {
        "name": "abc",
        "src": articleimgfive
      }
    ]
  };

  return (
    <div className=" text-slate-300 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 flex justify-center align-middle  ">
      <div className='my-8 px-7 w-11/12 '>
        <h2 className=' font-medium font-MavenPro text-3xl '>
          Take a look at our 
          <span className="mx-2 hover:cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
              Adorable 
          </span>
          Pets
        </h2>
        <div className='my-10 px-6 py-16 bg-zinc-900 rounded-xl '>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {imageData.images.map((image, index) => (
                <div className="group" key={index}>
                  <div className="bg-zinc-800 bg-opacity-30 shadow-lg rounded-xl hover:bg-zinc-700 hover:bg-opacity-55">
                    <div className="h-40">
                      <img src={image.src} alt={image.name} className="w-full h-full object-cover rounded-t-xl" />
                    </div>
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
    </div>
  );
}

export default Gallery;
