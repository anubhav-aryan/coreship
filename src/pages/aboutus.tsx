import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Image from "next/image";

const aboutus = () => {
  return (
    <div>
      <div className="h-full bg-gray-900">
        <Header />
        <div className="flex flex-col items-center mt-12 h-full bg-gray-900 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-pink-300">
            The Purpose of
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
            OROM
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Learn. Develop. Excel. Intern.
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-12 text-pink-300">
            Our Story
        </h2>
        <div className='w-3/4 md:w-3/4 lg:w-1/3 pt-12 text-lg md:text-xl lg:text-2xl text-left pb-12'>
        <p className='mb-4'>We are dedicated to empowering college students with the knowledge and skills they need to excel in the digital world.</p>
        <p className=' mb-4'>At OROM, we understand the importance of practical experience and real-world application. That&apos;s why our courses not only provide 
         comprehensive theoretical knowledge but also offer guaranteed internships after completion.</p>
        <p className='mb-4'>We believe that hands-on experience is the key to bridging the gap between academia and industry, giving our students a competitive
         edge in today&apos;s job market.</p>
        <p className='mb-4'>Our team of experienced instructors comprises industry professionals and experts who are passionate about sharing their knowledge and expertise. 
        They have carefully designed our courses to ensure that they are up-to-date with the latest industry trends and technologies. 
        With a strong emphasis on practical learning, we provide students with the tools and resources they need to succeed in their chosen fields.</p>
        </div>
        <div className='mb-16'>
        <Image
            src="/about.svg"
            width={500}
            height={500}
            alt="Orom"
            />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default aboutus;
