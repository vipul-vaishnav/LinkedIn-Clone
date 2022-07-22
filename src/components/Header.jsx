import React from 'react';
import Logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center sm:px-8 xl:px-24 px-4 py-6">
      <div>
        <Link to="/" className="cursor-default">
          <img src={Logo} alt="logo" className="h-8 w-auto" />
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Link
            to="/register"
            className="font-semibold rounded-3xl text-gray-900 px-5 py-3 hover:bg-gray-100 transition-all duration-200 ease-in border-2 border-transparent hover:border-gray-100"
          >
            Join Now
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="font-semibold rounded-3xl text-primary px-4 py-3 border-2 border-primary transition-all duration-200 ease-in hover:bg-blue-100"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
