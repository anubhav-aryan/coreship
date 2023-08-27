import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Link from "next/link";

const productmgmt = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto bg-gray-900">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/prodm.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Coreship{" "}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                Product Management
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
              Product management  involves working closely with  company{'\''}s product & management team. 
              It will include tasks such as market research, competitive analysis, defining product
              requirements, collaborating with designers and engineers, and assisting in the planning and 
              execution of product launches.
              </p>
              <p className="leading-relaxed pt-2">
                <span className="text-bold text-white">Timeline: </span> 3
                months
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  Rs 1699
                </span>
                <div className="ml-auto">
                  <Link
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLSd-njbuH5Wcc45y_CDr_zRNz1RUZvWJhikAyEVwpnD1ckksaw/viewform"
                    }
                  >
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Buy Now
                    </button>
                  </Link>
                </div>
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
                  Month 1: Introduction to Product Management
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li> Week 1:What is Product Management</li>
                  <li>
                   Roles and Responsibilities of a product manager.
                  </li>
                  <li>Week 2:Market Research and Customer Understanding.</li>
                  <li>
                   Identifying target markets and customer segments.
                   Conducting market research and gathering customer insights.
                  </li>
                  <li>
                    Week 3:Idea Generation and Validation:
                 </li>
                  <li> Brainstorming and ideation techniques.
                  Validating ideas through prototypes, MVPs, and user feedback.
                  </li>
                  <li>Week 4: Product Strategy:</li>
                  <li>
                  Defining product vision and goals.
                  Creating a roadmap and prioritization frameworks.
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 2: Advanced Product Management Topics
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Week 5: Product Metrics and Analytics</li>
                  <li>
                  Identifying and tracking key performance indicators (KPIs).
                  Data-driven decision making.
                  </li>
                  <li>Week 6: Go-to-Market Strategy</li>
                  <li>
                  Launch planning and execution.
                  Marketing, sales, and distribution strategies.</li>
                  <li>Week 7: Product Lifecycle Management</li>
                  <li>
                  Managing products from introduction to retirement.
                  Iterative improvements and updates.
                  </li>
                  <li>Week 9: Leadership and Team Management</li>
                  <li>
                  Leading product teams and fostering collaboration.
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 3: Application of Product Management Concepts
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Week 9: Career Development </li>
                  <li>
                    Building a product management career path.
                    Interview strategies and resume building
                  </li>
                  <li>Week 10: Application of Concepts Learnt</li>
                  <li>
                    Further enhancing and polishing skills learnt previously in the programme.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* -----------------------------------------Table---------------------------------------------------- */}
      <div className="bg-gray-900 flex justify-center items-center pb-28">
        <div className="container bg-gray-900 w-1/2 ">
          <h2 className="text-3xl font-bold text-center text-white py-8">
            Why Choose Us?
          </h2>
          <div className="">
            <div className="grid grid-cols-2 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <div className="flex items-center">Enrollment Benefits</div>
              <div>CORESHIP</div>
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
                Guaranteed Internship
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

export default productmgmt;
