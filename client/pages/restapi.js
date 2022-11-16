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
            className="text-2xl font-bold mb-4 border p-10 text-center rounded-md bg-gray-200 "
          >
            My Pictures
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
        </div>
      </main>
    </>
  );
}

export default MyRestAPI;
