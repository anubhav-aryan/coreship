import React from "react";
import Image from "next/image";
import Animationone from "./Animationone";

const Herosection = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-16 pt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12  text-white font-extrabold">
              Want To Learn
            </h1>
            <Animationone />
            <div className="flex justify-center pt-11">
              <button className="inline-flex text-white font-bold text-xl md:text-2xl lg:text-3xl bg-indigo-500 border-0 py-3 px-6 mb-8 focus:outline-none hover:bg-indigo-600 rounded-2xl">
                Start Here
              </button>
            </div>
          </div>
          <div className="lg:max-w-3xl lg:w-full md:w-1/2 w-5/6 h-56">
            <Image src="/brand.svg" alt="hero" width={800} height={800} />
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xlfont-bold text-center text-[#cb808f] mt-20 mb-20">
            powerful alone.
            <p className="sm:block mt-12" >
            better together.
            </p>
          </h1>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-20">
            Welcome to <span className='text-[#cb808f]'>CORESHIP </span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
