import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/menu_icon.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Navbar = ({ setSidebar }) => {


   const [account,setAccount] = useState(false);


   const handleClickAway = () => {
      setAccount(false); // Close the dropdown when clicking outside
    };


  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white fixed top-0 w-full z-10">
      {/* Left Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-5 mr-6 cursor-pointer"
            onClick={() => setSidebar((prev) => !prev)}
            src={menu_icon}
            alt="Menu"
          />
        </Link>
        <Link to="/">
          <img className="w-8" src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <h1 className="ml-4 text-lg font-bold">YOUTUBE</h1>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-96 outline-none bg-transparent"
          />
          <img className="w-4 ml-2" src={search_icon} alt="Search" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
  <Link to="" className="ml-6 hidden sm:block group">
    <div className="p-2 rounded-full border-2 border-transparent hover:border-gray-300 hover:bg-gray-100">
      <FileUploadOutlinedIcon className="text-2xl font-bold group-hover:text-blue-500" />
    </div>
  </Link>
  
  <Link to="" className="ml-6 hidden sm:block group">
    <div className="p-2 rounded-full border-2 border-transparent hover:border-gray-300 hover:bg-gray-100">
      <GridViewOutlinedIcon className="text-2xl font-bold group-hover:text-blue-500" />
    </div>
  </Link>
  
  <Link to="" className="ml-6 hidden sm:block group">
    <div className="p-2 rounded-full border-2 border-transparent hover:border-gray-300 hover:bg-gray-100">
      <NotificationsNoneOutlinedIcon className="text-2xl font-bold group-hover:text-blue-500" />
    </div>
  </Link>

  {/* Account Dropdown */}
  <ClickAwayListener onClickAway={handleClickAway}>
    <div className="relative">
      <button
        onClick={() => setAccount((prev) => !prev)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow hover:bg-gray-200 focus:outline-none"
      >
        Account
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Section */}
      {account && (
        <div className="absolute mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-48">
          <ul className="py-2">
            <li>
              <button className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100">
                Account
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Channel List
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Favorite
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  </ClickAwayListener>
</div>

    </nav>
  );
};

export default Navbar;
