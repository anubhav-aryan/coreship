import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const animationone = () => {
  return (
    <div className='text-blue-600 text-xl md:text-2xl lg:text-3xl font-bold'>
      <TypeAnimation
      sequence={[
        'Web Development',
        1000, 
        'Cloud Computing',
        1000,
        'DSA',
        1000,
        'VLSI',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

    </div>
  )
}

export default animationone
