import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col">
            <Link href="/" className="flex items-center">
              <img
                src="/logocoreship.png"
                className="mr-3 h-16"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CORESHIP
              </span>
            </Link>
            <div className="text-white font-bold pt-4">
              <p>
                We are dedicated to empowering college students <br />
                with the knowledge and skills they need to excel in the digital
                world.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-14 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-300 font-semibold gap-3">
                <li>
                  Got Any Question? <br />
                  Get In Touch With Us!
                </li>
                <li>11:00 A.M. - 6:30 P.M.</li>
                <li>+91 62053 74086</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-200 gap-4 font-semibold">
                <li>
                  <a href="" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-300 gap-4 font-semibold">
                <li>
                  <a href="aboutus" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="privacy" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
                <li>
                  <a href="terms" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200 font-semibold">
            © 2023{" "}
            <a href="" className="hover:underline">
              Coreship™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
