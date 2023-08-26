import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <header className="text-white bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-80">
              <Link
                href=" "
                className="mr-5 text-2xl font-semibold hover:text-red-600"
              >
                Courses
              </Link>
              <Link
                href=" "
                className="mr-5 text-2xl font-semibold hover:text-red-600"
              >
                Features
              </Link>
            </nav>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd-njbuH5Wcc45y_CDr_zRNz1RUZvWJhikAyEVwpnD1ckksaw/viewform">
              <button className="inline-flex items-center text-xl bg-gray-800 border-2 rounded-xl border-white py-1 px-3 focus:outline-none hover:bg-gray-700 mt-4 md:mt-0">
                Register
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
