import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-gray-900">
        <nav className="bg-gray-900 w-full z-20 left-0 pb-16 px-4">
          <div className="bg-gray-900 w-full flex flex-wrap items-center justify-around mx-auto pt-4">
            <Link href="/aboutus">
              <Image src="/logocoreship.png" width={100} height={100} alt="" />
            </Link>
            <div className="flex md:order-2 items-center">
              <Link href="/#courses">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 px-8 py-2 rounded-md"
                >
                  Register
                </button>
              </Link>
              <button
                data-collapse-toggle=""
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:w-auto md:order-1 w-full bg-gray-900 `}
              id="mobile-menu"
            >
              <ul className="md:bg-gray-900 sm:gap-1 md:gap-2 lg:gap-36 flex flex-col text-right md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="text-lg md:text-2xl lg:text-3xl block py-2 pl-3 pr-4 text-white bg-gray-900 hover:text-blue-700 md:p-0"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#courses"
                    className="text-lg md:text-2xl lg:text-3xl py-2 pl-3 pr-4 text-white bg-gray-900 hover:text-blue-700 md:p-0"
                    onClick={closeMenu}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="text-lg md:text-2xl lg:text-3xl block py-2 pl-3 pr-4 text-white bg-gray-900 hover:text-blue-700 md:p-0"
                    onClick={closeMenu}
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
