import React from "react";
import Image from "next/image";
import Animationone from "./Animationone";

const Herosection = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font py-6">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-6xl mb-4  text-white font-extrabold">
              Want To Learn
            </h1>
            <Animationone />
            <div className="flex justify-center pt-11">
              <button className="inline-flex text-white font-bold text-3xl bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl">
                Start Here
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src="/brand.svg" alt="hero" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-7xl font-extrabold text-center text-pink-400 mb-20">
            Powerful Alone
            <br className="hidden sm:block" />
            Better Together
          </h1>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-7xl font-extrabold text-center text-white mb-20">
            Welcome to Coreship 
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
