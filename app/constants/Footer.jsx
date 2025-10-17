import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={"/assets/logo.svg"} alt="logo"/>

              <h1 className="text-xl font-bold text-gray-900">Saasto</h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-4"
            aria-label="Footer navigation"
          >
            <ul className="flex gap-3 text-sm">
              <a href="#" className="hover:text-blue-600"><li>Demos</li></a>
              <a href="#" className="hover:text-blue-600"><li>Features</li></a>
              <a href="#" className="hover:text-blue-600"><li>Pricing</li></a>
              <a href="#" className="hover:text-blue-600"><li>Contact</li></a>
            </ul>
          </nav>

          <div className="social-media flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              {/* <icon className="w-5 h-5 inline-block" aria-hidden="true">icon</icon> */}
              <a href="#" className="hover:text-blue-600"><li className='list-none'>Contact</li></a>
              <h3 className="truncate">Linkedin</h3>
            </div>
            <div className="flex items-center gap-2">
              {/* <icon className="w-5 h-5 inline-block" aria-hidden="true">icon</icon> */}
              <a href="#" className="hover:text-blue-600"><li className='list-none'>Facebook</li></a>
              {/* <h3 className="truncate"></h3> */}
            </div>
            <div className="flex items-center gap-2">
              {/* <icon className="w-5 h-5 inline-block" aria-hidden="true">icon</icon> */}
              <a href="#" className="hover:text-blue-600"><li className='list-none'>Instagram</li></a>
              {/* <h3 className="truncate"></h3> */}
            </div>
            <div className="flex items-center gap-2">
              {/* <icon className="w-5 h-5 inline-block" aria-hidden="true">icon</icon> */}
              <a href="#" className="hover:text-blue-600"><li className='list-none'>Twitter</li></a>

              {/* <h3 className="truncate">Twitter</h3> */}
            </div>
          </div>
        </div>

        <br />

        <div className="bg-gray-50 border-t border-gray-200 pt-4 pb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm max-w-3xl">
            <h3 className="hover:underline cursor-pointer">Terms and Condition</h3>
            <h3 className="hover:underline cursor-pointer">Privacy and Policy</h3>
            <h3 className="hover:underline cursor-pointer">Terms and Condition</h3>
            <h3 className="text-gray-500">All right reserved @saasto</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
