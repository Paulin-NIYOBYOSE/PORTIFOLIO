import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Nav = () => {
  // Define a state variable to hold the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define a function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav>
      {/* Apply the theme dynamically */}
      <div className={isDarkMode ? "dark-theme" : "light-theme"}>
        <div className="hidden bg-slate-900 sm:h-10vh lg:flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Paulin</span>
            <div className="flex lg:gap-10">
              <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal lg:gap- md:gap-20">
                <ul className="flex lg:gap-10 md:gap-5 lg:ml-52 md:ml-32 mt-2 font-semibold">
                  <Link to="Projects">
                    <li>Projects</li>
                  </Link>
                  <Link to="About">
                    <li>About me</li>
                  </Link>
                  <Link to="resume">
                    <li>Resume</li>
                  </Link>
                  <Link to="contact">
                    <li>Contact</li>
                  </Link>
                </ul>
                <Link>
                  <button className="h-10 w-24 bg-purple rounded-md ml-10">
                    Hire me
                  </button>
                </Link>
              </div>
              <div className="bg-slate-800 w-10 flex items-center justify-center pb-1 rounded-lg cursor-pointer md:ml-10">
                {/* Render light or dark mode icon based on theme */}
                {isDarkMode ? (
                  <MdOutlineLightMode
                    className="h-7 w-7 mt-1 cursor-pointer"
                    onClick={toggleTheme}
                  />
                ) : (
                  <MdOutlineDarkMode
                    className="h-7 w-7 mt-1 cursor-pointer"
                    onClick={toggleTheme}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex md:gap-40 gap-6 bg-slate-900 h-20 text-white pt-2 ">
          <span className="font-bold">Paulin</span>
          <div>
            <div>
              <ul className="hidden">
                <li>Projects</li>
                <li>About me</li>
                <li>Resume</li>
                <li>Contact</li>
              </ul>
            </div>
            <button className="h-10 w-24 bg-purple rounded-md ml-10">
              Hire me
            </button>
          </div>
          <div className="bg-slate-800 w-10 flex items-center justify-center pb-1 rounded-lg cursor-pointer h-10">
            {/* Render light or dark mode icon based on theme */}
            {isDarkMode ? (
              <MdOutlineLightMode
                className="h-7 w-7 mt-1 cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <MdOutlineDarkMode
                className="h-7 w-7 mt-1 cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </div>
          <RiMenu3Fill className="w-7 h-7" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
