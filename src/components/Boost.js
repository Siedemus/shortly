import Image from "next/image";
import boostDesktop from "../../public/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <article className="relative flex justify-center items-center">
      <Image
        src={boostDesktop}
        alt="boost background"
        className="bg-darkViolet w-full min-h-full h-72"
      />
      <div className="absolute flex flex-col gap-4">
        <h2 className="text-white font-bold text-2xl">
          Boost your links today
        </h2>
        <button className="bg-cyan text-white py-3 rounded-full hover:bg-opacity-50 duration-200">
          Get Started
        </button>
      </div>
    </article>
  );
};

export default Boost;
