import { Link } from "react-scroll";

const Nav = () => {
  const content = (
    <>
      <div>
        <ul>
          <li>
            <Link to="targetElement" smooth={true} duration={500}>
              Link Text
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className=" bg-slate-900 h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Paulin</span>
          <div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal gap-52">
              <ul className="flex gap-10 ml-60 mt-2">
                <Link to="Projects">
                  <li>Projects</li>
                </Link>
                <Link to="Projects">
                  <li>About me</li>
                </Link>
                <Link to="Projects">
                  <li>Resume</li>
                </Link>
                <Link to="Projects">
                  <li>Contact</li>
                </Link>
              </ul>
              <Link>
                <button className="h-10 w-24 bg-purple rounded-md">
                  Hire me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
