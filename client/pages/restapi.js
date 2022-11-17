import React, { useContext } from "react";
import { Context } from "./Context";
import Header from "../components/Header";
import RestHead from "../components/RestHead";
import { useRouter } from "next/router";
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
          <button
            onClick={() => router.push("/pictures")}
            className="text-2xl font-bold mb-4 relative border p-10 text-center rounded-md bg-gray-700 text-white"
          >
            My Pictures
            <span className="absolute top-[-10px] left-[-10px] text-sm text-black rounded-md p-1 bg-gray-200">
              Private
            </span>
          </button>
          <button
            onClick={() => router.push("/projects")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Projects
          </button>
          <button
            onClick={() => router.push("/profiles")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Profiles
          </button>
          <button
            onClick={() => router.push("/certification")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Certificates
          </button>
          <button
            onClick={() => router.push("/badges")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Badges
          </button>
          <button
            onClick={() => router.push("/technologies")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Technonlogies
          </button>
          <button
            onClick={() => router.push("/resume")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Resumes
          </button>
          <button
            onClick={() => router.push("/socialmedia")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Social Media
          </button>
          <button
            onClick={() => router.push("/experiences")}
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            Experience
          </button>
          <button
            onClick={() => router.push("/messages")}
            className="text-2xl font-bold mb-4 relative border p-10 text-center rounded-md bg-gray-700 text-white"
          >
            Messages
            <span className="absolute top-[-10px] left-[-10px] text-sm text-black rounded-md p-1 bg-gray-200">
              Private
            </span>
          </button>
        </div>
      </main>
    </>
  );
}

export default MyRestAPI;
