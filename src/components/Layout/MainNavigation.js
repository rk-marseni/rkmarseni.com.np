import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function MainNavigation() {
  let [open, setOpen] = useState(false);
  // w-3/4 m-auto px-4 py-6 flex justify-between xl:w-3/4 md:w-11/12 sm:w-full
  const links = [
    { name: "HOME", to: "/" },
    { name: "RESEARCH", to: "/research" },
    { name: "TEACHING", to: "/teaching" },
    { name: "DEVELOPMENT", to: "/experience" },
    { name: "CONTACT", to: "/contact" },
  ];
  return (
    <div className="md:w-5/6 m-auto font-Lato">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
        >
          <span className="text-[24px] font-semibold mr-1 pt-2">
            RISHI &nbsp; K. &nbsp;  MARSENI
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link to={link.to} className="text-[#232332] text-xs">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
