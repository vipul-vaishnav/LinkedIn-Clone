import React from 'react';
import Header from './../components/Header';
import Google from './../assets/images/google.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 xl:px-24 py-8">
        <h1 className="text-gray-900 text-4xl text-center">Make the most of your professional life</h1>
        <div className="bg-white shadow px-4 py-6 my-6 rounded-md max-w-sm mx-auto">
          <form className="mb-5">
            <div className="mb-4">
              <label htmlFor="email" className="block w-max cursor-pointer mb-2 font-light text-lg text-gray-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border text-gray-900 border-gray-700 font-default px-2 py-1 rounded placeholder-gray-500 font-light focus:font-normal"
                autoComplete="off"
                placeholder="Type here..."
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block w-max cursor-pointer mb-2 font-light text-lg text-gray-500">
                Password(8 or more characters)
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border text-gray-900 border-gray-700 font-default px-2 py-1 rounded placeholder-gray-500 font-light focus:font-normal"
                autoComplete="off"
                placeholder="Type here..."
              />
            </div>
            <p className="mb-4 text-center">
              By clicking Agree & Join, you agree to the <span className="text-primary">LinkedIn User Agreement</span>,{' '}
              <span className="text-primary">Privacy Policy</span>, and{' '}
              <span className="text-primary">Cookie Policy</span>.
            </p>
            <button
              type="submit"
              className="uppercase tracking-wider font-semibold font-default py-2 border-2 border-primary text-white bg-primary rounded-full w-full text-lg hover:bg-blue-50 hover:text-primary transition-all duration-300 ease-in-out"
            >
              Agree & Join
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
              Continue with Google
            </button>
          </div>
          <div className="mt-5 text-center">
            <p>
              Already on LinkedIn?{' '}
              <Link to="/login" className="text-primary hover:underline font-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
