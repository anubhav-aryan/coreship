import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-2xl mb-4 text-white">
              Our numbers speak for themselves
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-pink-600 font-extrabold">
                  500+
                </h2>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">Students</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-pink-600 font-extrabold">
                  10+
                </h2>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">Mentors</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-pink-600 font-extrabold">
                  400+
                </h2>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">Internships</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-pink-600 font-extrabold">
                  6+
                </h2>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">Bootcamps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
