import React, { useState } from 'react';
import MenuIcon from './../icons/MenuIcon';
import SearchIcon from './../icons/SearchIcon';
import Logo from './../assets/images/linkedin.png';
import { Link } from 'react-router-dom';
import HomeIcon from './../icons/HomeIcon';
import MyNetworkIcon from './../icons/MyNetworkIcon';
import JobIcon from './../icons/JobIcon';
import MessageIcon from './../icons/MessageIcon';
import NotificationIcon from './../icons/NotificationIcon';
import ProfileIcon from './../icons/ProfileIcon';
import WorkIcon from './../icons/WorkIcon';
import ModelMenu from './ModelMenu';

const DashboardHeader = () => {
  const [showModel, setShowModel] = useState(false);

  const handleClick = () => {
    setShowModel((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center sm:px-8 xl:px-24 px-4 py-3 gap-4 bg-gray-200 md:py-1 relative">
      <div>
        <Link to="/" className="cursor-default">
          <img src={Logo} alt="logo" className="w-12 md:w-16" />
        </Link>
      </div>
      <div className="flex-grow flex">
        <label
          htmlFor="search"
          className="border bg-white border-gray-700 font-default px-2 py-2 rounded text-gray-500 font-normal focus:outline-none border-r-0 rounded-r-none"
        >
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="w-full border text-gray-900 border-gray-700 font-default px-2 py-2 rounded placeholder-gray-500 font-normal focus:outline-none border-l-0 rounded-l-none"
          autoComplete="off"
        />
      </div>
      <div className="md:hidden">
        <button onClick={handleClick}>
          <MenuIcon />
        </button>
      </div>
      <div className="md:block hidden">
        <ul className="flex gap-1 justify-center items-center">
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <HomeIcon />
            </div>
            <span className="text-center block">Home</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <MyNetworkIcon />
            </div>
            <span className="text-center block">My Network</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <JobIcon />
            </div>
            <span className="text-center block">Jobs</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <MessageIcon />
            </div>
            <span className="text-center block">Messaging</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <NotificationIcon />
            </div>
            <span className="text-center block">Notifications</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <ProfileIcon />
            </div>
            <span className="text-center block">Me</span>
          </li>
          <li className="w-20 cursor-pointer text-gray-600">
            <div className="w-max mx-auto">
              <WorkIcon />
            </div>
            <span className="text-center block">Work</span>
          </li>
        </ul>
      </div>
      {showModel && <ModelMenu />}
    </header>
  );
};

export default DashboardHeader;
