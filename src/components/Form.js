"use client";

import Image from "next/image";
import background from "../../public/bg-shorten-desktop.svg";
import { useState } from "react";

const Form = () => {
  const [link, setLink] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={onFormSubmit} className="absolute -top-28">
      <Image
        src={background}
        alt="form background"
        className="bg-darkViolet h-48 rounded-md"
      />
      <div className="absolute z-50 top-8 min-[533px]:top-16 flex flex-wrap px-12 gap-4 w-full">
        <input
          placeholder="Shorten a link here..."
          className="py-4 px-5 rounded-md grow"
          required
          value={link}
          onChange={({ target }) => setLink(target.value)}
        />
        <button className="bg-cyan text-white py-4 px-10 rounded-md hover:brightness-150 duration-200 grow sm:grow-0">
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
