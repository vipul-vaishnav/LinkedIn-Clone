import React from 'react';
import HomeIcon from './../icons/HomeIcon';
import MyNetworkIcon from './../icons/MyNetworkIcon';
import JobIcon from './../icons/JobIcon';
import MessageIcon from './../icons/MessageIcon';
import NotificationIcon from './../icons/NotificationIcon';
import ProfileIcon from './../icons/ProfileIcon';
import WorkIcon from './../icons/WorkIcon';

const ModelMenu = () => {
  return (
    <div className="w-48 bg-gray-100 shadow-md rounded-lg absolute top-full mt-2 mr-4 right-0 md:hidden">
      <ul className="w-full p-4">
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <MyNetworkIcon />
          <span>My Network</span>
        </li>
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <JobIcon />
          <span>Jobs</span>
        </li>
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <MessageIcon />
          <span>Messaging</span>
        </li>
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <NotificationIcon />
          <span>Notifications</span>
        </li>
        <li className="mb-2 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <ProfileIcon />
          <span>Me</span>
        </li>
        <li className="mb-0 cursor-pointer flex gap-3 text-gray-900 hover:bg-primary hover:text-white px-2 py-2 rounded-xl justify-start items-center">
          <WorkIcon />
          <span>Work</span>
        </li>
      </ul>
    </div>
  );
};

export default ModelMenu;
