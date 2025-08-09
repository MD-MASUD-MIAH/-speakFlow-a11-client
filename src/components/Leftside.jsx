import { use } from "react";
import { Link } from "react-router";

import Lottie from "lottie-react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import look from "../../public/look.json";
import { AuthContext } from "../context/AuthContext";

const Leftside = () => {
  const { user, isDark } = use(AuthContext);

  return (
    <div className="overflow-x-hidden">
      <h1 className="uppercase font-bold text-center border-b py-4  text-[#7f8c8d] border-[#7f8c8d] ">
        About Me
      </h1>

      {user?.photoURL ? (
        <div>
          <div className="flex items-center justify-center pt-6 ">
            <img className="w-7/12" src={user?.photoURL} alt="" />
          </div>

          <p className="text-xs text-[#7f8c8d] py-5 text-center w-11/12 mx-auto ">
            Hi,I'm <span>{user?.displayName}</span> I'm a passionate and curious
            individual who loves learning, creating, and growing every day.
            Whether it's building projects, exploring new ideas, or solving
            problems, I enjoy turning thoughts into reality through code,
            design, or writing.
          </p>
        </div>
      ) : (
        <div>
          <div className="max-w-md mx-auto mt-10 p-4  border-l-4 border-  rounded-xl shadow-md flex items-start space-x-4">
            <div>
              <h3 className="text-lg font-semibold">Login Required</h3>
              <p className="text-sm">
                You haven't <span className="font-bold">logged in</span> yet —
                please log in to unlock all the features! 😊
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {user ? (
        <div>
          {" "}
          <h1
            className={`uppercase  text-center border-b py-4  text-[#7f8c8d] ${
              isDark ? "border-gray-500" : "border-gray-300"
            } `}
          >
            Stay Connected
          </h1>
          <div className="flex items-center justify-center py-5">
            <div className="flex gap-10">
              <a href="https://web.facebook.com/" target="_blank">
                <FaFacebook className="text-[#1877F2]" size={24}></FaFacebook>
              </a>
              <a href="https://github.com/" target="_blank">
                <FaGithub size={24}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedin className="text-[#0077B5]" size={24}></FaLinkedin>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube className="text-[#FF0000]" size={24}></FaYoutube>
              </a>
            </div>
          </div>
          <div className=" w-8/12 mx-auto ">
            <Lottie animationData={look} loop={true}></Lottie>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Leftside;
