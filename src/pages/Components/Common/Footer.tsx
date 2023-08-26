import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-900 '>
      <footer className="flex flex-col space-y-10 justify-center">

<nav className="flex justify-center flex-wrap text-gray-400 text-xl font-extrabold gap-40">
    <Link href="terms" className='hover:text-white'> Terms and Conditions </Link>
    <Link href="privacy" className='hover:text-white'> Privacy Policy </Link>
    <Link href="" className='hover:text-white'> About US </Link>
</nav>

<div className="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p className="text-center text-white font-medium">&copy; 2021 CORESHIP. All Rights reserved.</p>
</footer>
    </div>
  )
}

export default Footer
