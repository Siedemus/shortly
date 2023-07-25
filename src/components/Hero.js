import illustration from "../../public/illustration-working.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col mb-40 md:flex-row-reverse md:items-center justify-between">
      <div>
        <Image
          src={illustration}
          alt="working person ilustration"
          width={900}
        />
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 px-4 md:items-start">
        <h1 className="font-bold md:text-6xl text-darkViolet text-center md:text-left text-4xl">
          More than just shorter links
        </h1>
        <p className="text-grayishViolet text-center px-1 md:text-left max-w-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyan text-white py-3 px-7 rounded-full hover:bg-opacity-50 duration-200">
          Get started
        </button>
      </div>
    </section>
  );
};
export default Hero;
