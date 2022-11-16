import React from "react";
import Image from "next/image";
import Airbnb from "./projectpics/Airbnb.png";

function SmallProjects() {
  return (
    <div className="grid grid-cols-16 gap-4 p-0 m-20">
      <div className="relative block h-[100%] overflow-hidden text-decoration-none rounded-lg">
        <div className="relative h-auto w-[100%] ">
          <Image src={Airbnb} objectFit="fill" alt="" />
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-black transition duration-1000 ease-in-out translate-y-full rounded-lg">
            <div className="relative flex align-middle gap-2 p-2 rounded-l-lg translate-y-full transition duration-1000 ease-in-out">
              <svg
                className="w-[80px] h-[80px] absolute bottom-[100%] right-0 z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="black" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />;
              </svg>
              <span className="w-[50px] h-[50px] rounded-full bg-black flex-shrink-0 "></span>
              <div className="card__header-text">
                <h3 className="text-10 mb-4 mr-4 text-red-400 ">
                  Jessica Parker
                </h3>
                <span className="text-10 text-red-400">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallProjects;
