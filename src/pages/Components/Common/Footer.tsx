import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 '>
      <footer className="flex flex-col space-y-10 justify-center">

<nav className="flex justify-center flex-wrap text-white text-xl font-extrabold gap-40">
    <a className="hover:text-gray-900" href="#">Terms and Conditions</a>
    <a className="hover:text-gray-900" href="#">Privacy Policy</a>
    <a className="hover:text-gray-900" href="#">About Us</a>
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
<p className="text-center text-white font-medium">&copy; 2021 OROM. All Rights reserved.</p>
</footer>
    </div>
  )
}

export default Footer
