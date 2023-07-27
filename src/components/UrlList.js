const UrlList = ({ urlList }) => {
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
            <button className="bg-cyan text-white py-4 px-10 rounded-md hover:brightness-150 duration-200 w-full md:w-min">
              Copy
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UrlList;
