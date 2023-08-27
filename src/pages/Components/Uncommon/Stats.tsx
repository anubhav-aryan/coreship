import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  time?: number;
  start?: number;
  shouldAnimate: boolean;
}

function AnimatedCounter({
  target,
  time = 200000,
  start = 0,
  shouldAnimate,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!shouldAnimate) return;

    const increment = (target - start) / time;
    const handle = setInterval(() => {
      if (current < target) {
        setCurrent((prevCurrent) => prevCurrent + increment);
      } else {
        clearInterval(handle);
        setCurrent(target);
      }
    }, 1);

    return () => clearInterval(handle);
  }, [current, target, time, start, shouldAnimate]);

  return <span>{Math.round(current)}</span>;
}

const Stats = () => {
  const [animated, setAnimated] = useState({
    students: false,
    mentors: false,
    internships: false,
    bootcamps: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const counterName = (entry.target as HTMLElement).dataset.counter;
          if (entry.isIntersecting && counterName) {
            setAnimated((prevAnimated) => ({ ...prevAnimated, [counterName]: true }));
          }
        });
      },
      observerOptions
    );

    const counterElements = document.querySelectorAll("[data-counter]");
    counterElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">
              Our numbers speak for themselves
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-gray-800 px-4 py-6 rounded-lg"
                data-counter="students"
              >
                <h4 className="font-bold text-6xl text-pink-600 flex-grow mb-0">
                  <AnimatedCounter
                    target={500}
                    time={100}
                    start={492}
                    shouldAnimate={animated.students}
                  />
                  +
                </h4>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">
                  Students
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-gray-800 px-4 py-6 rounded-lg"
                data-counter="mentors"
              >
                <h4 className="font-bold text-6xl text-pink-600 flex-grow mb-0">
                  <AnimatedCounter
                    target={10}
                    time={100}
                    start={0}
                    shouldAnimate={animated.mentors}
                  />
                  +
                </h4>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">
                  Mentors
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-gray-800 px-4 py-6 rounded-lg"
                data-counter="internships"
              >
                <h4 className="font-bold text-6xl text-pink-600 flex-grow mb-0">
                  <AnimatedCounter
                    target={400}
                    time={100}
                    start={390}
                    shouldAnimate={animated.internships}
                  />
                  +
                </h4>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">
                  Internships
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-gray-800 px-4 py-6 rounded-lg"
                data-counter="bootcamps"
              >
                <h4 className="font-bold text-6xl text-pink-600 flex-grow mb-0">
                  <AnimatedCounter
                    target={6}
                    time={100}
                    start={0}
                    shouldAnimate={animated.bootcamps}
                  />
                  +
                </h4>
                <p className="leading-relaxed font-bold text-3xl md:text-2xl lg:text-6xl">
                  Bootcamps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
