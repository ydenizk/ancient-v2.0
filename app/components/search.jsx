"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { places } from "../data";
import Image from "next/image";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const router = useRouter();
  const searchRef = useRef(null); // Ref to track search area

  // Handle click outside of search area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setFilteredPlaces([]); // Hide suggestions
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Prevent empty searches

    const matchedPlace = places.find(
      (place) => place.name.toLowerCase() === query.toLowerCase()
    );

    if (matchedPlace) {
      router.push(`/place/${matchedPlace.name}`);
      setQuery("");
      setFilteredPlaces([]); // Clear suggestions
    }
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    // Filter places based on input
    if (searchTerm) {
      const matches = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPlaces(matches);
    } else {
      setFilteredPlaces([]);
    }
  };

  return (
    <div ref={searchRef} className=" hidden  sm:flex items-center space-x-4 relative mr-4">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search places..."
          value={query}
          onChange={handleInputChange}
          className="h-8 w-36 mmd:w-48 bg-slate-100 dark:bg-neutral-500 focus:outline-none
           border-2 border-transparent text-xs mmd:text-base rounded-full px-4 py-1 text-neutral-700 font-light"
        />
      </form>

      {/* Autocomplete Suggestions */}
      {filteredPlaces.length > 0 && (
        <ul className="absolute bg-slate-100 dark:bg-slate-500 opacity-80 
        rounded-lg w-full mt-2 top-8 right-1 z-10">
          {filteredPlaces.map((place) => (
            <div
              onClick={() => {
                router.push(`/place/${place.name}`);
                setQuery("");
                setFilteredPlaces([]);
              }}
              key={place.id}
              className="flex items-center gap-x-1 px-2 py-1 hover:bg-slate-300
               dark:bg-neutral-500 dark:hover:bg-[#a28673] rounded-md"
            >
              <Image
                src={place.img}
                width={32}
                height={32} 
                alt="pic"
                className="rounded-full"
              />
              <li
                className="px-4 py-2 cursor-pointer"
              >
                {place.name}
              </li>
            </div>
          ))}
        </ul>
      )}

      {/* Search Icon */}
      <button
        onClick={handleSearch}
        className="bg-slate-200 dark:bg-neutral-400 p-1 rounded-full cursor-pointer absolute right-1"
      >
        <IoSearchOutline size={20} />
      </button>
    </div>
  );
};

export default Search;