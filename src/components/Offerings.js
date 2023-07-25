import Image from "next/image";
import recognition from "../../public/icon-brand-recognition.svg";
import records from "../../public/icon-detailed-records.svg";
import customizable from "../../public/icon-fully-customizable.svg";
import Form from "./Form";

const Offerings = () => {
  return (
    <div className="relative flex justify-center">
      <Form />
      <article className="bg-gray-100 py-24 px-5 w-full">
        <div className="flex flex-col gap-5 pb-24">
          <h1 className="font-bold text-4xl md:text-5xl text-darkViolet text-center px-12">
            Advanced Statistics
          </h1>
          <p className="text-grayishViolet px-5 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-20 justify-center items-center lg:flex-row lg:py-24 lg:h-96">
            <div className="bg-cyan w-2 lg:h-4/5 absolute flex h-3/5 lg:rotate-90"></div>
            <div className="bg-white mx-5 pt-12 pb-10 px-7 relative flex items-center lg:self-end lg:items-start flex-col rounded-lg max-w-sm">
              <div className="bg-darkViolet w-24 h-24 flex justify-center items-center rounded-full absolute -top-10 lg:left-5 lg:-top-11">
                <Image src={recognition} alt="recognition images" />
              </div>
              <h2 className="font-bold text-xl py-5">Brand Recognition</h2>
              <p className="text-center text-grayish lg:text-left">
                Boost your brand recohnition with each click. Generic links
                don't mean a thing. Braned links help instil confidence your
                content.
              </p>
            </div>
            <div className="bg-white pb-10 mx-5 md:mx-0 pt-12 px-7 relative flex items-center lg:items-start flex-col rounded-lg max-w-sm">
              <div className="bg-darkViolet w-24 h-24 flex justify-center items-center rounded-full absolute -top-10 lg:left-5 lg:-top-11">
                <Image src={records} alt="records image" />
              </div>
              <h2 className="font-bold text-xl py-5">Detailed Records</h2>
              <p className="text-center text-grayish lg:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="bg-white pb-10 mx-5 pt-12 px-7 relative flex items-center lg:self-start lg:items-start flex-col rounded-lg max-w-sm">
              <div className="bg-darkViolet w-24 h-24 flex justify-center items-center rounded-full absolute -top-10 lg:left-5 lg:-top-11">
                <Image src={customizable} alt="customizable image" />
              </div>
              <h2 className="font-bold text-xl py-5">Fully Customizable</h2>
              <p className="text-center text-grayish lg:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagment.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Offerings;
