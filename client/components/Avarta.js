import React from "react";
import Image from "next/image";
import Profile from "./svg/avarta.png";
import Line from "./svg/line.svg";
import Bio from "./Bio";

function Avarta() {
  return (
    <div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative h-[350px] min-w-[300px] md:h-[30em] md:w-[25em] m-auto lg:mt-10">
          <Image src={Profile} alt="" layout="fill" />
        </div>
        <span className="font-semibold absolute w-[219px] right-10 top-[90px] text-lg hidden xl:block text-gray-600">
          {`"Let's create an amazing web experince together."`}
        </span>
        <div className="absolute top-[250px] right-16 hidden xl:block">
          <div
            className="text-gray-400 "
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            <Line className="md:mr-2.5 mb-6 inline " />
            <span className="animate-bounce inline-block">Scroll Down</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Bio />
      </div>
    </div>
  );
}

export default Avarta;
