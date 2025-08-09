import Lottie from "lottie-react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import log from "../../public/animation.json";
import { AuthContext } from "../context/AuthContext";
import Dark from "./Dark";
import View from "./View";
const Navbar = () => {
  const { user, logout, isDark } = use(AuthContext);

  const [ref, setRef] = View();

  const linsk = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allblogs">All blogs</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addblog">Add Blog</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/featuredblog"> Featured Blogs</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </>
      )}
      <li>
        <Dark></Dark>
      </li>
    </>
  );

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          title: "Logout!",
          text: "Logout Success .",
          icon: "success",
        });
      }
    });
  };
  return (
    <div
      className={` sticky top-0 z-20 ${
        isDark ? "bg-[#1E232B]" : "bg-[#550527] text-white"
      } border-b border-base-300`}
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
              <img
                className="md:w-10 md:h-10 h-8 w-8 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button onClick={handleLogout} className="tom-bt btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-end flex gap-4">
              <Link className="btn tom-bt" to="/login">
                Login
              </Link>
              <Link className="btn tom-bt" to="/register">
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
