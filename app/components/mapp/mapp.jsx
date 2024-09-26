"use client";

import React, { useState, useEffect } from "react";
import {
  FullscreenControl,
  Map,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import { places } from "@/app/data";
import { GiGreekTemple } from "react-icons/gi";
import { IoTriangle } from "react-icons/io5";
import { useTheme } from "next-themes";  // Import useTheme for detecting dark mode

const Mapp = () => {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // State to control the currently active popup
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [viewState, setViewState] = useState({
    longitude: 35.6667,
    latitude: 39.1667,
    zoom: 5.1, // Default zoom
  });

  // Get the current theme (light or dark)
  const { theme } = useTheme();

  // Update zoom based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewState((prev) => ({ ...prev, zoom: 3.9 })); // Small screens
      } else if (width < 1024) {
        setViewState((prev) => ({ ...prev, zoom: 4.5 })); // Medium screens
      } else {
        setViewState((prev) => ({ ...prev, zoom: 5.1 })); // Larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial zoom based on initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center my-20 mb-28 h-[400px] 
     sm:h-[540px] w-full" id="mapo">
      <div className="p-0 sm:p-4 w-full sm:w-[90%] h-full ">
        <Map
          key={theme} 
          mapboxAccessToken={token}
          attributionControl={false}
          {...viewState} // Spread viewState object to dynamically control zoom
          onMove={(evt) => setViewState(evt.viewState)} // Update viewState on interaction
          mapStyle={theme === "dark" ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v10"}  // Dynamically switch Mapbox style based on theme
          style={{ borderRadius: "5px" }}
        >
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />

          {places.map((place, index) => (
            <Marker
              key={index}//dark -light geçişlerinde problemsiz  yükleme için ..re render
              longitude={place.longitude}
              latitude={place.latitude}
              onClick={(e) => {
                e.originalEvent.stopPropagation(); // Stop propagation to avoid conflicts
                setSelectedPlace(place); // Set the selected place for popup
              }}
            >
              <div className="opacity-80">
                <IoTriangle size={16} color="#852c04" />
              </div>

              {selectedPlace?.name === place.name && (
                <Popup
                  longitude={place.longitude}
                  latitude={place.latitude}
                  onClose={() => setSelectedPlace(null)}
                  offset={10}
                  closeButton={false}
                >
                  <div className="bg-slate-300 flex justify-center items-center gap-x-1">
                    <GiGreekTemple size={18} color="#672d06" />
                    <Link
                      href={`/place/${place.name}`}
                      className="uppercase text-neutral-700 pt-1 transition duration-500 hover:text-[#852c04]"
                    >
                      {place.name}
                    </Link>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default Mapp;