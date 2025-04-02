import { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

function Find() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [filters, setFilters] = useState({
    species: "",
    breed: "",
    age: "",
    price: "",
  });

  const [distinct, setDistinct] = useState({
    species: new Set(),
    breed: new Set(),
    age: new Set(),
    prices: new Set(),
  });

  // Initialize Cloudinary
  const cld = new Cloudinary({
    cloud: { cloudName: "dgz60odkx" }, // Replace with your Cloudinary cloud name
  });

  // Fetch pet data from API
  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch("http://localhost:5000/find"); // Adjust API route if needed
        const data = await response.json();
        setPets(data);
        setFilteredPets(data);

        // Extract unique attributes for filtering
        const attributes = {
          species: new Set(),
          breed: new Set(),
          age: new Set(),
          prices: new Set(),
        };

        data.forEach((pet) => {
          attributes.species.add(pet.species);
          attributes.breed.add(pet.breed);
          attributes.age.add(pet.age);
          attributes.prices.add(pet.price);
        });

        setDistinct(attributes);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    }

    fetchPets();
  }, []);

  // Filter function
  useEffect(() => {
    let filtered = pets;

    if (filters.species) {
      filtered = filtered.filter((pet) => pet.species === filters.species);
    }
    if (filters.breed) {
      filtered = filtered.filter((pet) => pet.breed === filters.breed);
    }
    if (filters.age) {
      filtered = filtered.filter((pet) => pet.age.toString() === filters.age);
    }
    if (filters.price) {
      filtered = filtered.filter((pet) => pet.price <= Number(filters.price));
    }

    setFilteredPets(filtered);
  }, [filters, pets]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-slate-300 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-[#0d0d0d] to-zinc-900 px-10 py-8 flex flex-col justify-center items-center">
      {/* Filter Section */}
      <div className="my-8 p-7 w-11/12 rounded-xl bg-zinc-900">
        <h2 className="font-medium font-MavenPro text-3xl text-center">
          Lets find your{" "}
          <span className="mx-2 hover:cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
            Purrfect
          </span>{" "}
          Partner
        </h2>

        <form className="p-4 flex flex-col items-center justify-center rounded-xl text-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Species Filter */}
            <div>
              <label htmlFor="species" className="text-slate-300 font-bold">
                Species:
              </label>
              <select
                id="species"
                name="species"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4"
                value={filters.species}
                onChange={handleFilterChange}
              >
                <option value="">Select Species</option>
                {[...distinct.species].map((species, index) => (
                  <option key={index} value={species}>
                    {species}
                  </option>
                ))}
              </select>
            </div>

            {/* Breed Filter */}
            <div>
              <label htmlFor="breed" className="text-slate-300 font-bold">
                Breed:
              </label>
              <select
                id="breed"
                name="breed"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4"
                value={filters.breed}
                onChange={handleFilterChange}
              >
                <option value="">Select Breed</option>
                {[...distinct.breed].map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Filter */}
            <div>
              <label htmlFor="age" className="text-slate-300 font-bold">
                Age:
              </label>
              <select
                id="age"
                name="age"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4"
                value={filters.age}
                onChange={handleFilterChange}
              >
                <option value="">Select Age</option>
                {[...distinct.age].map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label htmlFor="price" className="text-slate-300 font-bold">
                Price Range:
              </label>
              <select
                id="price"
                name="price"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4"
                value={filters.price}
                onChange={handleFilterChange}
              >
                <option value="">Select Price Range</option>
                {[...distinct.prices]
                  .sort((a, b) => a - b)
                  .map((price, index) => (
                    <option key={index} value={price}>
                      Up to ${price.toLocaleString()}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Pets Display Section */}
      <div className="my-10 w-11/12 px-6 py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredPets.length > 0 ? (
              filteredPets.map((pet, index) => {
                if (!pet.images || pet.images.length === 0) return null;

                const petImg = cld
                  .image(pet.images[0])
                  .resize(auto().gravity(autoGravity()).width(200).height(200))
                  .format("auto")
                  .quality("auto");

                return (
                  <div className="group" key={index}>
                    <div className="bg-zinc-800 bg-opacity-30 shadow-lg rounded-xl overflow-hidden hover:bg-zinc-700 hover:bg-opacity-55">
                      {/* Image Container */}
                      <div className="h-50 w-full flex justify-center items-center overflow-hidden">
                        <AdvancedImage
                          cldImg={petImg}
                          className="h-full w-full object-cover rounded-t-xl"
                          alt={pet.name}
                        />
                      </div>
                      {/* Pet Info */}
                      <div className="px-6 py-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {pet.name}
                        </h3>
                        <p className="text-gray-500 text-base">
                          {pet.description}
                        </p>
                      </div>
                      {/* Buy Button */}
                      <button className="block w-full py-2 px-4 bg-orange-600 text-white text-center hover:bg-rose-500 rounded-b-xl">
                        Buy for ${pet.price.toLocaleString()}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-400">No pets found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
