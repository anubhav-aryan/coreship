import React from "react";

type FeaturesProps = {};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center bg-gray-900 text-white py-16"
    >
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-20">
            Welcome to <span className="text-[#cb808f]">CORESHIP </span>
          </h1>
        </div>
      </section>

      {/* Grid Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 justify-center">
        {/* First Card */}
        <div className="flex bg-[#d9d9d9] rounded-[25px] py-4 px-4 mb-8">
          <div className="w-1/2 pr-4">
            <img
              src="/featureone.svg"
              alt="Feature 1"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2 md:mb-4 ">
              <span className="text-pink-400">Hands-on</span> Training
            </h2>
            <p className="text-sm md:text-md lg:text-lg font-serif font-semibold text-gray-800">
              You will acquire the knowledge of industry working and experience to
              work in different industries.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex bg-[#d9d9d9] rounded-[25px] py-4 px-4 mb-8">
          <div className="w-1/2">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-400 text-center font-bold mb-4">
              Guided Projects and <span className="text-blue-900">Assignments</span>
            </h2>
            <p className="text-sm md:text-md lg:text-lg font-serif font-semibold text-center text-gray-800">
              For you to understand the value of teamwork and how the corporate
              world works.
            </p>
          </div>
          <div className="w-1/2 pl-4">
            <img
              src="/featuretwo.svg"
              alt="Feature 2"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Third Card */}
        <div className="flex bg-[#d9d9d9] rounded-[25px] py-4 px-4 mb-8">
          <div className="w-1/2 pr-4">
            <img
              src="/featurethree.svg"
              alt="Feature 3"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-bold mb-4">
              Certificate of <span className="text-blue-900">Completion</span>
            </h2>
            <p className="text-sm md:text-md lg:text-lg font-serif font-semibold text-gray-800 mt-4">
              To add 5 stars to your resume.
            </p>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex bg-[#d9d9d9] rounded-[25px] py-4 px-4 mb-8">
          <div className="w-1/2">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-bold">
              Guaranteed of <span className="text-blue-900">Internship</span>
            </h2>
            <p className="text-sm md:text-md lg:text-lg font-serif font-semibold text-gray-800 mt-4">
              Secure your involvement in a genuine internship opportunity that
              promises invaluable hands-on experience and a chance to apply
              classroom knowledge in a real-world context.
            </p>
          </div>
          <div className="w-1/2 pl-4 ">
            <img
              src="/internship11.svg"
              alt="Feature 3"
              className="w-full h-auto transform scale-150"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Features;
