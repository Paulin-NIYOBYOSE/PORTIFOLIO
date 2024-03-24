import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../components/images/logo.png";
import hero from "../components/images/hero.png";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Nav: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    updateTheme();
  };

  const updateTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--nav-bg-color", "white");
      root.style.setProperty("--nav-text-color", "black");
    } else {
      root.style.setProperty("--nav-bg-color", "#1a202c");
      root.style.setProperty("--nav-text-color", "white");
    }
  };

  return (
    <>
      <nav>
        <div
          className={`hidden ${
            isDarkMode ? "bg-white text-slate-700" : "bg-slate-900 text-white"
          } sm:h-10vh lg:flex justify-between z-50 lg:py-5 px-20 py-4 font-bold `}
        >
          <div className="flex items-center flex-1">
            <div className="text-3xl font-bold flex ">
              <img className="text-3xl font-bold w-10 h-10" src={logo} alt="" />
              Paulin
            </div>

            <div className="flex lg:gap-10">
              <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal lg:gap- md:gap-20">
                <ul className="flex lg:gap-10 md:gap-5 lg:ml-52 md:ml-32 mt-2  font-semibold">
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
              <div className="bg-slate-800 w-10 flex items-center justify-center pb-1 rounded-lg cursor-pointer  md:ml-10">
                {isDarkMode ? (
                  <MdOutlineDarkMode
                    className="h-7 w-7 mt-1 cursor-pointer"
                    onClick={toggleTheme}
                  />
                ) : (
                  <MdOutlineLightMode
                    className="h-7 w-7 mt-1 cursor-pointer"
                    onClick={toggleTheme}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:hidden flex md:gap-40 gap-10 pt-3 pl-3 text-white"
          style={{
            backgroundColor: isDarkMode ? "white" : "#0F172A",
            color: isDarkMode ? "#0F172A" : "white",
          }}
        >
          <span className="font-bold ">Paulin</span>
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
      </nav>
      <div
        className={`${
          isDarkMode ? "bg-white text-black" : "bg-slate-900 text-white"
        } sm:h-10vh lg:flex justify-between lg:py-5 pl-4 gap-5  `}
      >
        <div className="pt-40 lg:pl-20 ">
          <h3
            className={`${
              isDarkMode
                ? "  font-general-semibold bg-white text-slate-600"
                : "bg-slate-900 text-white"
            } text-5xl sm:h-10vh lg:flex justify-between z-50 lg:py-5  font-bold mb-10 `}
          >
            Hi, I am Paulin Niyobyose
          </h3>
          <p
            className={`${
              isDarkMode
                ? "  font-general-semibold bg-white text-slate-600"
                : "bg-slate-900 text-white"
            } text-3xl sm:h-10vh lg:flex justify-between z-50 lg:py-5 `}
          >
            A Highly Skilled And <br />
            Motivated Fullstack <br />
            Developer
          </p>
          <button className="h-12 w-40 bg-purple rounded-md ml-10 text-white mt-8 flex items-center justify-center gap-3">
            <MdOutlineDownloadForOffline />
            Download CV
          </button>
        </div>
        <div className="mt-5 mr-7">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Nav;
