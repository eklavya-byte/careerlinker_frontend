import React from 'react'

const Footer = () => {
  return (
    <>
<footer className=" py-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <span className=" text-yellow-200 text-2xl font-bold mb-2 md:mb-0">CareerLinker</span>
    <span className="text-center md:text-left mb-2 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    <div className="text-center justify-center md:justify-end mt-2">
  <span className="inline-block mr-4">Socials</span>
  <span className="flex mt-2 mb-2 space-x-4">
    <img src="icons/telegram-icon.svg" alt="Teligram" className="h-6 w-6" />
    <img src="icons/instagram-icon.svg" alt="Instagram" className="h-6 w-6" />
    <img src="icons/twitter-icon.svg" alt="Twitter" className="h-6 w-6" />
    <img src="icons/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
  </span>
</div>

  </div>
  <div className="container mx-auto text-gray-600 text-center mt-2">
    <span>© 2024 All rights reserved.</span>
  </div>
</footer>
</>

  )
}

export default Footer