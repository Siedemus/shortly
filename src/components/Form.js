"use client";

import Image from "next/image";
import background from "../../public/bg-shorten-desktop.svg";
import { useRef, useState } from "react";

const Form = ({ getShortenUrl }) => {
  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (url === "") {
      setIsEmpty(true);
      inputRef.current.focus();
      return;
    }

    if (!url.includes("https" || "http")) {
      setIsEmpty(true);
      inputRef.current.focus();
      return;
    }

    setIsEmpty(false);
    getShortenUrl(url);
    setUrl("");
  };

  return (
    <form onSubmit={onFormSubmit} className="absolute -top-28 mx-5">
      <Image
        src={background}
        alt="form background"
        className="bg-darkViolet h-48 rounded-md"
      />
      <div className="absolute z-50 top-8 min-[573px]:top-16 flex flex-wrap px-12 gap-4 w-full">
        <input
          ref={inputRef}
          placeholder="Shorten a link here..."
          className={`py-4 px-5 rounded-md grow ${
            isEmpty ? "placeholder:text-red outline outline-3 outline-red" : ""
          }`}
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <p
          className={`text-red absolute top-16 ${isEmpty ? "block" : "hidden"}`}
        >
          Please add a link!!!
        </p>
        <button className="bg-cyan text-white py-4 px-10 rounded-md hover:brightness-150 duration-200 grow sm:grow-0">
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
