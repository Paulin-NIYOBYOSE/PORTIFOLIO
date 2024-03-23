import React from "react";
import hero from "../components/images/hero.png";

const landon = () => {
  return (
    <>
      <div className="bg-slate-900 md:h-13 md:w-full md:flex md:gap-20">
        <div className="pt-40 lg:pl-20 pl-5">
          <h3 className="text-white text-4xl font-bold">
            {" "}
            Hi, I am Paulin Niyobyose
          </h3>
          <p className="text-white text-4xl mt-10 font-general-semibold">
            A Highly Skilled And <br />
            Motivated Fullstack <br />
            Developer
          </p>
          <button className="h-10 w-24 bg-purple rounded-md ml-10">
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

export default landon;
