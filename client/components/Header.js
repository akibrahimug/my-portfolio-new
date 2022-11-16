import React, { useState } from "react";
import Logo from "./svg/Logo.svg";
import MainHeader from "./MainHeader";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b shadow-sd grid sm:grid-cols-2 md:grid-cols-3 pt-3 pb-4 justify-evenly">
      {/* logo */}
      <Link href="/" className="hidden md:inline-flex">
        <Logo className="w-20 md:ml-10 " />
      </Link>
      {/* middle section */}
      <MainHeader />
      <div className="hidden sm:inline-flex m-2 md:mr-10 items-center justify-end text-red-700 cursor-pointer">
        <p>My Methodology</p>
        <BeakerIcon className="w-8" />
      </div>
    </div>
  );
}
