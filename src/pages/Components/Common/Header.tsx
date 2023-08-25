import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div>
        <header className="text-white bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex">
              <Image
                src="/logo.webp"
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-80">
              <a className="mr-5 text-2xl font-semibold hover:text-red-600">
                Courses
              </a>
              <a className="mr-5 text-2xl font-semibold hover:text-red-600">
                Features
              </a>
            </nav>
            <button className="inline-flex items-center text-xl bg-gray-800 border-2 rounded-xl border-white py-1 px-3 focus:outline-none hover:bg-gray-700 mt-4 md:mt-0">
              Register
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
