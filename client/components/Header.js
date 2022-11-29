import React, { useState } from "react";
import Logo from "./svg/Logo.svg";
import MainHeader from "./MainHeader";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Header() {
  return (
    <div className="border-b flex items-center shadow-sd sm:grid sm:grid-cols-2 md:grid-cols-3 pt-3 pb-4 ">
      {/* logo */}
      <Link href="/">
        <Logo className="w-20 md:ml-10 hidden md:inline-flex cursor-pointer active:scale-75 trasition duration-75" />
      </Link>
      <Link href="/">
        <ArrowBackIcon
          className="md:hidden text-red-500 ml-4 hover:bg-gray-100 rounded-full p-2 hover:scale-105 transition duration-150 ease-out"
          sx={{ fontSize: 45 }}
        />
      </Link>

      {/* middle section */}
      <MainHeader />
      <div
        className="hidden md:inline-flex m-2 md:mr-10 items-center justify-end text-red-700 cursor-pointer"
        onClick={() => {
          window.location.href = "#methods";
        }}
      >
        <p className="md:hidden lg:inline-flex">My Methodology</p>
        <BeakerIcon className="w-8" />
      </div>
    </div>
  );
}
