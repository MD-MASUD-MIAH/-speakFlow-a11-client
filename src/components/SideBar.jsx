import { use, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { GrLogout } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { MdAddCard } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Dark from "./Dark";
import Item from "./Item"; 
import { FaRegNewspaper } from "react-icons/fa";

const SideBar = () => {
  const [isActive, setActive] = useState(false);

  const { logout, isDark } = use(AuthContext);
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
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "Logout successfully.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error.message);

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.message}`,
            });
          });
      }
    });
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              {/* <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              /> */}
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden ${
          isDark ? "bg-gray-600" : "bg-gray-100"
        } w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex  py-2 shadow-lg  justify-center items-center bg-[#550527]  mx-auto">
              <Link to="/">
                <div className="flex gap-3 items-center">
                  {/* <img className="w-15 h-15 " src={logo} alt="" /> */}

                  <h1 className="hidden md:block  font-bold text-xl text-white  ">
                    {" "}
                    SpeakFlow
                  </h1>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Item icon={HiOutlineHome} label="Home" address="/" />

              <Item icon={MdAddCard} label="Add Blog" address="addblog" />
              <Item
                icon={CiBookmarkPlus}
                label="My Wishlist"
                address="wishlist"
              />
              <Item
                icon={FaRegNewspaper}
                label="My Blogs"
                address="myblogs"
              />

              <Item icon={BsGraphUp} label="Statistics" address="/dashboard" />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={handleLogout}
            className="flex gap-2 font-bold w-full items-center px-4 py-2 mt-5  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span> Logout</span>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default SideBar;
