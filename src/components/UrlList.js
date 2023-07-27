"use client";

import { useState } from "react";

const UrlList = ({ urlList }) => {
  const copyToClipboard = async (url, target) => {
    await navigator.clipboard.writeText(url);
    console.log(target);
    target.innerText = "Copied!";
    target.disabled = true;
    setTimeout(() => {
      target.innerText = "Copy";
      target.disabled = false;
    }, 5000);
  };

  return (
    <ul className="w-[1070px] pb-32 pt-5 flex gap-5 mx-3 flex-col">
      {urlList.map((url) => (
        <li
          className="bg-white p-6 rounded-md flex flex-col md:flex-row gap-6 justify-between items-center hover:shadow-sm hover:shadow-cyan duration-300"
          key={url.id}
        >
          <p className="md:text-lg flex self-start md:self-center break-all">
            {url.original}
          </p>
          <div className="flex gap-5 items-center flex-col md:flex-row w-full md:w-min">
            <p className="text-cyan text-lg text-left md:text-center w-full md:w-min">
              {url.short}
            </p>
            <button
              onClick={(e) => copyToClipboard(url.short, e.target)}
              className="bg-cyan text-white py-4 px-10 rounded-md hover:brightness-150 duration-300 w-full md:w-min disabled:bg-darkViolet"
            >
              Copy
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UrlList;
