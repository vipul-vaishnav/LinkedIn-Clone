import React from 'react';
import Header from './../components/Header';
import Illustration from './../assets/images/work.svg';

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 xl:px-24 py-8 flex lg:flex-row lg:justify-between lg:items-center flex-col-reverse gap-6 lg:gap-12">
        <div className="lg:w-full">
          <h1 className="text-amber-900 text-3xl sm:text-5xl font-light mb-6 lg:mb-8 lg:text-6xl">
            Welcome to your professional community
          </h1>
          <div className="md:flex md:justify-center md:items-start lg:block md:w-full md:gap-8">
            <div className="md:w-full">
              <ul className="bg-gray-100 p-8 rounded-xl">
                <li className="font-light text-4xl md:text-2xl lg:text-xl my-4 mt-0">
                  <h2>Explore topics you are interested in</h2>
                </li>
                <li className="font-light text-4xl md:text-2xl lg:text-xl my-4">
                  <h2>Find the right job or internship for you</h2>
                </li>
                <li className="font-light text-4xl md:text-2xl lg:text-xl my-4">
                  <h2>Connect with people who can help</h2>
                </li>
                <li className="font-light text-4xl md:text-2xl lg:text-xl my-4 mb-0">
                  <h2>Learn the skills you need to succeed</h2>
                </li>
              </ul>
            </div>
            <div className="md:w-full">
              <h3 className="my-12 text-4xl lg:text-xl lg:my-6 md:text-left font-semibold text-center">
                Join your colleagues, classmates, and friends on LinkedIn.
              </h3>
              <button className="uppercase md:w-48 tracking-wider font-semibold font-default py-3 border-2 border-primary text-white bg-primary rounded-full w-full text-lg hover:bg-blue-50 hover:text-primary transition-all duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-full">
          <div>
            <img src={Illustration} alt="working professional" className="w-full max-w-2xl h-auto block mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
