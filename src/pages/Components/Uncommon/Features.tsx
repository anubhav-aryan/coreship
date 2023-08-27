import React from 'react';
import Image from 'next/image';

type FeaturesProps = {};

const Features: React.FC<FeaturesProps> = () => {
  return (
    
    <div id='features' className="flex flex-col items-center bg-gray-900 text-white py-16">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-20">
            Welcome to <span className='text-[#cb808f]'>CORESHIP </span>
          </h1>
        </div>
      </section>
      {/* First Rectangle */}
      <div className="flex justify-start bg-[#d9d9d9] rounded-[25px] w-[90%] md:w-[70%] lg:w-[40%] py-8 px-4 mb-8 ">
        <div className="w-1/2 pr-8">
          <img src="/featureone.svg" alt="Feature 1" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2 md:mb-4 "><span className='text-pink-300'>Hands-on</span> Training</h2>
          <p className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">
          You will acquire the knowledge of
          industry working and experience
          to work in different industries.
          </p>
        </div>
      </div>

      <div className="w-full h-40 mb-12">
      </div> 

      {/* Second Rectangle */}
      <div className="flex bg-[#d9d9d9] rounded-[25px] w-[90%] md:w-[70%] lg:w-[40%] py-8 px-4 mb-8 justify-center">
       <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-300 text-center font-bold mb-4">Guided Projects and Assignments</h2>
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center text-gray-800">
            For you to understand the value of teamwork and how the corporate world works.
          </p>
        </div>
        <div className="w-1/2 pr-8">
          <img src="/featuretwo.svg" alt="Feature 2" className="w-full h-auto" />
        </div>
       
      </div>

      <div className="w-full h-40 mb-12 mt-12  flex items-center justify-center">
      </div> 

      {/* Third Rectangle */}
      <div className="flex bg-[#d9d9d9] rounded-[25px] w-[90%] md:w-[70%] lg:w-[40%] py-8 px-4 justify-start">
        <div className="w-1/2 pr-8">
          <img src="/featurethree.svg" alt="Feature 3" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-pink-300 font-bold mb-12">
          Certificate of Completion</h2>
          <p className="text-sm md:text-lg lg:text-xl text-center font-bold text-gray-800 mt-12">
          To add 5 stars to your resume.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
