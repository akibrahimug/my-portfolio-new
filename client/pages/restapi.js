import React, { useContext } from "react";
import { Context } from "./Context";
import Header from "../components/Header";
import RestHead from "../components/RestHead";
import { useRouter } from "next/router";
const titles = [
  {
    title: "My Pictures",
    url: "/pictures",
    tag: "Private",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Profiles",
    url: "/profiles",
  },
  {
    title: "Certificates",
    url: "/certification",
  },
  {
    title: "Badges",
    url: "/badges",
  },
  {
    title: "Technologies",
    url: "/technologies",
  },
  {
    title: "Resumes",
    url: "/resume",
  },
  {
    title: "Social Media",
    url: "/socialmedia",
  },
  {
    title: "Experience",
    url: "/experiences",
  },
  {
    title: "Messages",
    url: "/messages",
    tag: "Private",
  },
];
function MyRestAPI() {
  // call the authenticated user data fro context
  const { authenticatedUser, googleUpload } = useContext(Context);
  const router = useRouter();
  return (
    <>
      <Header />
      <RestHead />
      <main className="max-w-[1250px] m-auto p-[1rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {titles.map((title, index) => (
            <button
              key={index}
              onClick={() => router.push(`${title.url}`)}
              className={`${
                title.tag ? "bg-gray-700 text-white" : "bg-gray-200"
              } text-2xl font-bold mb-4 relative border p-10 text-center rounded-md  `}
            >
              {title.title}
              {title.tag ? (
                <span className="absolute top-[-10px] left-[-10px] text-sm text-black rounded-md p-1 bg-gray-200">
                  {title.tag}
                </span>
              ) : (
                <></>
              )}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default MyRestAPI;
