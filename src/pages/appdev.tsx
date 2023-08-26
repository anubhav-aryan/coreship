import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

const appdevelopment = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto bg-gray-900">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/android-device.svg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Coreship{" "}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                App Development
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Delve into the world of mobile apps with this hands-on course.
                Covering both iOS and Android, understand the nuances of mobile
                development and design.
              </p>
              <p className="leading-relaxed pt-2"><span className='text-bold text-white'>Timeline: </span> 3 months</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  Rs 1699
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Register
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------Content--------------------------------------------------- */}
      <div className="">
        <section className="text-white bg-gray-900">
          <div className="bg-gray-900 ">
            <div className="container px-5 pb-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-left border-solid border-white border-2 rounded-3xl px-14 py-14 bg-slate-700">
                <p className="leading-relaxed text-3xl font-bold">
                  Course Syllabus:{" "}
                </p>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 1 : BASIC CONCEPTS{" "}
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Mobile Development Landscape: iOS vs. Android</li>
                  <li>
                     Introduction to Swift for iOS and Kotlin for Android
                  </li>
                  <li>
                   Building First App: Hello World
                  </li>
                  <li>
                  App Lifecycle, User Interface, and Navigation
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Projects:
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>
                    Basic Calculator App  
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Assignments:
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Design a Splash Screen for an App</li>
                  <li>Build a Note-taking App with Basic Features</li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 2 : ADVANCED CONCEPTS
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>
                  Accessing Device Features: Camera, GPS
                  </li>
                  <li>Storing Data: Databases, Shared Preferences, and Core Data</li>
                  <li>
                  Networking in Mobile Apps: API Calls, GraphQL
                  </li>
                  <li>
                  Deploying to App Store and Play Store, App Monetization Strategies
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Assignments:
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Develop a To-Do List App with Data Persistence</li>
                  <li>Create a Weather App using OpenWeatherMap API</li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 3
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>
                    Full Stack Web Development - Fundamental Concepts - Data
                    Flow, User Authentication and Authorization
                  </li>
                  <li>
                    Integrating Front End and Back End Concepts - Understanding
                    Git and GitHub
                  </li>
                  <li>
                    Website Deployment - Cloud Platforms - Introduction to Cloud
                    Service: AWS, Azure or GCP
                  </li>
                  <li>Learning Testing and Debugging</li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Assignments:
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Build your Own Website!</li>
                  <li>Optimization of website performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* -----------------------------------------Table---------------------------------------------------- */}
      <div className="bg-gray-900 flex justify-center items-center pb-28">
        <div className="container bg-gray-900 ">
          <div className="">
            <div className="grid grid-cols-2 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <div className="flex items-center">Enrollment Benefits</div>
              <div>OROM</div>
            </div>
            <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400">
                Project Based Learning
              </div>
              <div>
                <svg
                  className="w-3 h-3 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400">
                Indutrial Level Experience
              </div>
              <div>
                <svg
                  className="w-3 h-3 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400">
                Job Ready Portfolio
              </div>
              <div>
                <svg
                  className="w-3 h-3 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400">
                E-commerce UI pre-order
              </div>
              <div>
                <svg
                  className="w-3 h-3 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default appdevelopment;