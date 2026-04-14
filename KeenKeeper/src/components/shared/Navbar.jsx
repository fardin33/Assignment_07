import React from "react";
import { RiHome3Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/images/logo.png";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <RiHome3Line className="text-lg md:text-lg lg:text-xl" />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <RiTimeLine className="text-lg md:text-lg lg:text-xl" />,
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <TfiStatsUp className="text-xl" />,
    },
  ];

  const getLinkStyles = ({ isActive }) => {
    const base =
      "flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-[13px] md:text-[14px] lg:text-[15px]";
    const active =
      "bg-[#224236] text-white shadow-md text-[13px] md:text-[14px] lg:text-[15px]";
    const inactive =
      "text-slate-800 hover:bg-slate-300 hover:text-slate-900 text-[13px] md:text-[14px] lg:text-[15px]";
    return `${base} ${isActive ? active : inactive}`;
  };

  const navLinks = (
    <>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink to={link.path} className={getLinkStyles}>
            {link.icon}
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto px-0">
        {/* Navbar Start: */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden p-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 gap-1 border"
            >
              {navLinks}
            </ul>
          </div>

          <NavLink to="/" className="flex items-center cursor-pointer">
            <img
              src={NavLogo}
              alt="KeenKeeper Logo"
              className="h-7 md:h-8 lg:h-9 w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Navbar End:  */}
        <div className="navbar-end">
          <ul className="geist menu menu-horizontal px-1 gap-2 hidden md:flex">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
