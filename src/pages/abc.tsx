import React, { useEffect } from "react";

function AnimatedCounter({ target, time = 200000, start = 0 }) {
  const [current, setCurrent] = React.useState(start);

  useEffect(() => {
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
  }, [current, target, time, start]);

  return <span>{Math.round(current)}</span>;
}

function ABC() {
  return (
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-bold text-3xl flex-grow mb-0">
        <AnimatedCounter target={500} time={1000} start={0} />
      </h4>
    </div>
  );
}

export default ABC;
