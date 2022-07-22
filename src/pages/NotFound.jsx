import React from 'react';
import Header from './../components/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 xl:px-24 py-8">
        <h1 className="text-6xl text-center">404! NotFound</h1>
      </div>
    </>
  );
};

export default NotFound;
