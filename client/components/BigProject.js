import React from "react";
import Airbnb from "./projectpics/Airbnb.png";
import Image from "next/image";
import Next from "./svg/Next.svg";
import ReactLogo from "./svg/React.svg";
import Tailwind from "./svg/Tailwind.svg";
import Github from "./svg/Github.svg";
import Npm from "./svg/Npm.svg";

function BigProject() {
  return (
    <div className="flex lg:mt-20 xl:m-0">
      <div
        className="text-gray-400 flex-none hidden md:block self-center"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
      >
        <h2 className="text-4xl font-bold">PROJECTS</h2>
      </div>
      <div className="grow relative  lg:px-20 cursor-pointer border-2 rounded-md lg:border-0 m-4 ">
        <div className="relative lg:static h-96 min-w-[250px]">
          <Image
            src={Airbnb}
            alt="Airbnb"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="lg:absolute lg:bottom-12  lg:right-6   lg:backdrop-blur-2xl rounded-lg shadow-2xl lg:w-[600px]">
          <h3 className="text-4xl mb-3 w-64 text-black text-center mt-4">
            Airbnb Clone
          </h3>
          <div className="grid">
            <p className="text-black px-7 lg:w-[500px] lg:font-semibold">
              This is a full-stack fully responsive and Scalable SPA that I
              built with React, Next.js, Tailwind CSS, MapBox with the
              react-map-gl as a wrapper for the map. For continuous deployment I
              pushed the app to GitHub and hosted it to Vercel.
            </p>
            <div>
              <div className="flex justify-center flex-wrap mt-4  bg-slate-100  rounded-md  ">
                <Next className="w-8 m-4 " />
                <ReactLogo className="w-8 m-4 " />
                <Tailwind className="w-10 m-4 " />
                <Github className="w-8 m-4 " />
                <Npm className="w-10 m-4 mt-6" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 md:justify-end md:gap-4 px-10 py-4">
            <button className="text-sm bg-red-500 text-white rounded-lg px-4 py-3.5 mt-5">
              Live Site
            </button>
            <button className="text-sm bg-red-500 text-white rounded-lg px-4 py-3.5 mt-5">
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigProject;
