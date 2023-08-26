import React from 'react'
import ReactTyped from "react-typed";


const animationone = () => {
  return (
    <div className='pb-8'>
      <h1 className='text-blue-500 text-6xl font-extrabold'>
        <ReactTyped
          strings={["Web Development", "Cloud Computing", "DSA", "App Development", "AI/ML"]}
          typeSpeed={100}
          loop
          backSpeed={50}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
    </div>
  )
}

export default animationone
