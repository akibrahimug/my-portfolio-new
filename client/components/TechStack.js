import React from "react";
import Bootstrap from "./svg/Bootstrap.svg";
import JavaScript from "./svg/JavaScript.svg";
import ReactLogo from "./svg/React.svg";
import Tailwind from "./svg/Tailwind.svg";
import Sass from "./svg/Sass.svg";
import Postman from "./svg/Postman.svg";
import Node from "./svg/Node.svg";
import Express from "./svg/Express.svg";
import Css from "./svg/Css.svg";
import Html from "./svg/Html.svg";
import Git from "./svg/Git.svg";
import Github from "./svg/Github.svg";
import Postgresql from "./svg/Postgresql.svg";
import Npm from "./svg/Npm.svg";
import Firebase from "./svg/Firebase.svg";
import Next from "./svg/Next.svg";

export default function TechStack() {
  return (
    <div className="relative rounded-2xl md:w-[680px] mb-4 shadow-md m-auto flex flex-wrap justify-center">
      <div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <JavaScript className="w-16 m-4" />
          <div className="border-t">
            <p className="py-2 text-center">JavaScript</p>
          </div>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Sass className="w-16 m-4 py-2" />
          <p className="py-2 border-t  text-center">SASS</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Npm className="w-16 m-4 py-5 " />
          <p className="py-2 border-t  text-center">NPM</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Bootstrap className="w-16 m-4 py-2 " />
          <p className="py-2 border-t  text-center">Bootstrap</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Node className="w-16 m-4 py-3" />
          <p className="py-2  border-t  text-center">Node</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Express className="w-16 m-4 py-6" />
          <p className="py-2 border-t text-center">Express</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Github className="w-16 m-4" />
          <p className="py-2 border-t  text-center">GitHub</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Postman className="w-16 m-4  py-1.5" />
          <p className="py-2 border-t  text-center">GitHub</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <ReactLogo className="w-16 m-4 py-1" />
          <p className="py-2 border-t  text-center">React</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Css className="w-14 m-4 " />
          <p className="py-2  border-t  text-center">CSS</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Tailwind className="w-16 h-16 m-4 py-4" />
          <p className="py-2 border-t  text-center">Tailwind CSS</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Firebase className="w-14 h-16  m-4 " />
          <p className="py-2 border-t  text-center">Firebase</p>
        </div>
      </div>
      <div className="flex flex-wrap md:block">
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Postgresql className="w-16 m-4" />
          <p className="py-2 border-t text-center">PostgreSQL</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Git className="w-16 m-4 py-5" />
          <p className="py-2  border-t  text-center">GIT</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Html className="w-14 m-4 " />
          <p className="py-2 border-t  text-center">HTML</p>
        </div>
        <div className="flex flex-col border m-6  rounded-md shadow-sm ">
          <Next className="w-14 m-4 py-1" />
          <p className="py-2 border-t  text-center">Next</p>
        </div>
      </div>
    </div>
  );
}
