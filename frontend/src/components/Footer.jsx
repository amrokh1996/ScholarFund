import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mr-3">
          © 2023   
          <Link to="/" className="hover:underline px-2">
            ScholarFund™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 md:ml-auto">
          <li>
            <Link
              to="ourPrograms"
              className="mr-4 hover:underline md:mr-6 transition-all duration-300 ease-in-out transform hover:scale-90"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="AboutUs"
              className="mr-4 hover:underline md:mr-6 transition-all duration-300 ease-in-out transform hover:scale-90"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contactus"
              className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-90"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer