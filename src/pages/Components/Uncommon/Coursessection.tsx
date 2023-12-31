import React from "react";
import Image from "next/image";
import Link from "next/link";

const Coursessection = () => {
  return (
    <div id="courses">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-white">
              Learn New Technology{" "}
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="fullstack">
                  <Image
                    src="/course1 1.svg"
                    alt="course1"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="appdev">
                  <Image
                    src="/appdev.svg"
                    alt="course2"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="cloudcomputing">
                  <Image
                    src="/cloudcomp.svg"
                    alt="course3"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="aiml">
                  <Image
                    src="/ml.svg"
                    alt="course4"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="dsa">
                  <Image
                    src="/algorithms.svg"
                    alt="course5"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="vlsi">
                  <Image
                    src="/vl.svg"
                    alt="course6"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="uiux">
                  <Image
                    src="/ui.svg"
                    alt="course7"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="dataanalytics">
                  <Image
                    src="/data(1).svg"
                    alt="course8"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="datascience">
                  <Image
                    src="/datasci.svg"
                    alt="course9"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link href="productmgmt">
                  <Image
                    src="/pROJE.svg"
                    alt="course8"
                    width={500}
                    height={500}
                    className="hover:drop-shadow-2xl"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coursessection;
