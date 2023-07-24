"use client";

const { default: Image } = require("next/image");
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="my-9 px-5 flex items-center gap-10 justify-between">
      <Image src={logo} alt="shortly logo" />
      <div className="md:flex w-full justify-between items-center hidden">
        <ul className="flex text-grayish gap-8 font-bold">
          <li className="hover:text-veryDarkViolet duration-200">
            <Link href="/features">Features</Link>
          </li>
          <li className="hover:text-veryDarkViolet duration-200">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-veryDarkViolet duration-200">
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <div className="flex gap-10">
          <button className="text-grayish font-bold hover:text-veryDarkViolet duration-200">
            Login
          </button>
          <button className="text-white font-bold bg-cyan py-2 px-5 rounded-full hover:bg-opacity-50 duration-200">
            Sign Up
          </button>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-7 flex justify-between flex-col cursor-pointer md:hidden"
      >
        <div
          className={`bg-grayish w-full h-1 duration-300 ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></div>
        <div
          className={`bg-grayish w-full h-1 duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-grayish w-full h-1 duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></div>
      </div>
      <div
        className={`absolute right-5 left-5 top-24 bg-darkViolet text-white p-5 flex items-center flex-col text-center rounded-xl font-bold duration-500 z-50 ${
          isOpen ? "-translate-y-0" : "-translate-y-[700px]"
        }`}
      >
        <ul className="flex flex-col gap-6 p-5">
          <li>
            <Link
              href="/features"
              className="hover:text-cyan duration-200"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-cyan duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="hover:text-cyan duration-200"
            >
              Resources
            </Link>
          </li>
        </ul>
        <div className="flex flex-col border-t border-grayishViolet w-full gap-6 p-5">
          <button className="hover:text-cyan duration-200">
            Login
          </button>
          <button className=" bg-cyan py-2 px-5 rounded-full hover:bg-opacity-50 duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
