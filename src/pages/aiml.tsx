import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Link from "next/link";

const aiml = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto bg-gray-900">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/aiml.svg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Coreship{" "}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                Artificial Intelligence and Machine Learning
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
                Unleash the power of AI and Machine Learning. Learn to build
                smart systems that learn from data, make predictions, and
                automate tasks.
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
                      "https://buy.stripe.com/fZe5lF5FgaW7fjWdQQ"
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
                  Month 1: Foundations of AI and ML
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Week 1: Introduction to AI and ML</li>
                  <li>
                    Understanding the basics of Artificial Intelligence and
                    Machine Learning.
                  </li>
                  <li>Week 2: Data Preprocessing and Exploration</li>
                  <li>
                    Preparing data for analysis, handling missing values, and
                    exploring datasets.
                  </li>
                  <li>Week 3: Supervised Learning Algorithms</li>
                  <li>
                    Exploring regression and classification algorithms such as
                    Linear Regression, Decision Trees, and k-Nearest Neighbors.
                  </li>
                  <li>Week 4: Unsupervised Learning Algorithms</li>
                  <li>
                    Introduction to clustering and dimensionality reduction
                    techniques like K-Means and Principal Component Analysis
                    (PCA).
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 2: Advanced Topics in AI/ML
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Week 5: Neural Networks and Deep Learning</li>
                  <li>
                    Understanding neural networks, backpropagation, and building
                    deep learning models.
                  </li>
                  <li>Week 6: Convolutional Neural Networks (CNNs)</li>
                  <li>
                    Creating image recognition systems using CNNs and transfer
                    learning.
                  </li>
                  <li>Week 7: Recurrent Neural Networks (RNNs)</li>
                  <li>
                    Building sequence models for tasks like text generation and
                    sentiment analysis.
                  </li>
                  <li>Week 8: Natural Language Processing (NLP)</li>
                  <li>
                    Exploring language processing techniques, including
                    tokenization, word embeddings, and text classification.
                  </li>
                </ul>
                <p className="leading-relaxed text-2xl font-bold pt-6">
                  Month 3: Applied AI/ML and Project
                </p>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 pt-8"
                >
                  <li>Week 9: Model Evaluation and Hyperparameter Tuning</li>
                  <li>
                    Measuring model performance, cross-validation, and
                    optimizing hyperparameters.
                  </li>
                  <li>Week 10: Deployment and Ethics in AI/ML</li>
                  <li>
                    Deploying models in production and considering ethical
                    considerations in AI/ML.
                  </li>
                  <li>Week 11: Reinforcement Learning</li>
                  <li>
                    Introduction to reinforcement learning principles and
                    applications.
                  </li>
                  <li>Week 12: Capstone Project</li>
                  <li>
                    Applying AI/ML concepts to a real-world project. From data
                    preprocessing to model deployment.
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

export default aiml;
