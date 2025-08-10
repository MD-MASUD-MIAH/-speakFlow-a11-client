import Lottie from "lottie-react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import log from "../../public/animation.json";
import { AuthContext } from "../context/AuthContext";
import Dark from "./Dark";
import View from "./View";
const Navbar = () => {
  const { user, isDark } = use(AuthContext);

  const [ref, setRef] = View();

  const linsk = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allblogs">All blogs</NavLink>
      </li>

      <li>
        <NavLink to="/featuredblog"> Featured Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about"> About</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}

      <li>
        <Dark></Dark>
      </li>
    </>
  );

  return (
    <div
      className={` sticky top-0 z-20 ${
        isDark
          ? "bg-[#1E232B] border-b border-gray-400"
          : "bg-[#550527] text-white"
      } `}
    >
      <div className="w-11/12 mx-auto">
        <div className="navbar py-1 px-0">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content badge-ghost rounded-box   mt-3 w-52 p-2 shadow z-1"
              >
                {linsk}
              </ul>
            </div>
            <div className="flex items-center">
              {" "}
              <span>
                {" "}
                <div ref={ref} className="w-10 h-10 md:w-14 md:lg:h-14 ">
                  {setRef && (
                    <Lottie
                      className=""
                      animationData={log}
                      autoPlay={true}
                      loop={true}
                    ></Lottie>
                  )}
                </div>
              </span>{" "}
              <h1
                className={`md:text-xl font-bold text-sm md:px-4 ${
                  isDark ? "text-white" : "text-white"
                } hidden md:block`}
              >
                SpeakFlow
              </h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-6 px-1">{linsk}</ul>
          </div>
          {user ? (
            <div className="navbar-end flex gap-4">
              <Link to={"/dashboard"}>
                <img
                  className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-lg hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer "
                  src={user?.photoURL || "https://via.placeholder.com/40"}
                  alt={user?.displayName || "User avatar"}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/40";
                  }}
                />
              </Link>
            </div>
          ) : (
            <div className="navbar-end flex gap-4">
              <Link
                className={` btn ${isDark ? "tom-b" : "tom-bt"}`}
                to="/login"
              >
                Login
              </Link>
              <Link
                className={` btn ${isDark ? "tom-b" : "tom-bt"}`}
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
