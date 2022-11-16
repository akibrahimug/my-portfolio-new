import React from "react";
import SocialMedia from "./SocialMedia";
import { Google, Twitter, LinkedIn } from "@mui/icons-material";
export default function Contact() {
  return (
    <div className="flex justify-center">
      <form className="p-5 border m-auto sm:m-4 mt-4 mb-4 rounded-2xl shadow-md max-w-[350px]">
        <h3 className="mb-4 text-center font-medium">Send me a Message</h3>
        <input
          type="text"
          className="w-full border  p-2 rounded-md placeholder:p-2 outline-none"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full border mt-4 p-2  placeholder:p-2 outline-none"
          placeholder="Email"
        />
        <textarea
          maxLength={300}
          className="w-full border mt-4 rounded-md resize-none placeholder:p-2 outline-none"
          placeholder="Message(300-words Max)"
        />
        <button className="text-gray-700 hover:text-white block rounded-md border p-2 mt-4 w-32 m-auto text-base hover:shadow-md active:scale-95 transition-all duration-100 hover:bg-red-500 text-center">
          Send
        </button>
      </form>
      <div className="hidden sm:inline-block mt-4 border rounded-2xl mb-4 pb-4 shadow-md">
        <h3 className="pt-5 ml-4 text-center font-medium">
          If you prefer an alternative way.
        </h3>
        {/* email */}
        <SocialMedia
          link={"mailto: kasomaibrahim@gmail.com"}
          icon={<Google />}
          text={"kasomaibrahim@gmail.com"}
        />
        {/* twitter */}
        <SocialMedia
          link={"https://twitter.com/Akibrahimug"}
          icon={<Twitter />}
          text={"Twitter"}
        />
        {/* linked In */}
        <SocialMedia
          link={"https://www.linkedin.com/in/kasoma-ibrahim-89a732168/"}
          icon={<LinkedIn />}
          text={"LinkedIn"}
        />
        {/* Tel: number */}
      </div>
    </div>
  );
}
