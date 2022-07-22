import React from 'react';
import Header from './../components/Header';
import Google from './../assets/images/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 xl:px-24 py-8">
        <div className="bg-white shadow px-4 py-6 my-6 rounded-md max-w-sm mx-auto">
          <h1 className="text-gray-900 text-4xl text-center md:text-left mb-2">Sign in</h1>
          <p className="mb-6 text-center md:text-left text-gray-900">Stay updated on your professional world</p>
          <form className="mb-5">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border text-gray-900 border-gray-700 font-default px-2 py-2 rounded placeholder-gray-500 font-light focus:font-normal"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border text-gray-900 border-gray-700 font-default px-2 py-2 rounded placeholder-gray-500 font-light focus:font-normal"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <p className="mb-4 text-center text-primary md:text-left">Forgot Password?</p>
            <button
              type="submit"
              className="uppercase tracking-wider font-semibold font-default py-2 border-2 border-primary text-white bg-primary rounded-full w-full text-lg hover:bg-blue-50 hover:text-primary transition-all duration-300 ease-in-out"
            >
              Sign in
            </button>
          </form>
          <hr />
          <div className="mt-5">
            <button
              type="submit"
              className="tracking-wide font-semibold font-default py-2 border border-gray-900 text-gray-900 rounded-full w-full text-lg hover:bg-blue-50 transition-all duration-300 ease-in-out flex gap-4 justify-center items-center"
            >
              <span>
                <img src={Google} alt="google-logo" className="w-7" />
              </span>
              Sign in with Google
            </button>
          </div>
          <div className="mt-5 text-center">
            <p>
              New to LinkedIn?{' '}
              <Link to="/register" className="text-primary hover:underline font-bold">
                Join Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
