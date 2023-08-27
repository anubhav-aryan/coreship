import React from "react";
import Particle from "./Particle";
import Image from "next/image";
import Particles from "react-tsparticles";

const Covered = () => {
  return (
    <div className=" ">
      <section className="text-gray-400 bg-gray-900 body-font pb-40">
        <div className="container px-5 py-24 mx-auto border-solid border-white border-2 rounded-3xl relative w-2/3 h-[34rem] max-md:h-[20rem]">
          <Image
            src="/J4o.gif"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-full absolute rounded-3xl top-0 right-0 z-10 blur-sm"
          />
          <div className="z-30 absolute w-full top-1/2 right-0 -translate-y-1/2 flex flex-col gap-10 max-md:gap-2">
            <h1 className="text-xl md:text-5xl lg:text-7xl font-extrabold text-center text-white">
              We have got you
            </h1>
            <p className="text-xl md:text-5xl lg:text-7xl font-extrabold text-center text-purple-500 mt-0 ">
              covered
            </p>
            <p className="text-xl md:text-5xl lg:text-7xl font-extrabold text-center text-white mt-0">
              no matter where you are.
            </p>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Covered;
