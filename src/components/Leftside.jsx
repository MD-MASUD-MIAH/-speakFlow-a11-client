import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import log from '../../public/asd.json'
import Lottie from "lottie-react";
const Leftside = () => {
  const { user } = use(AuthContext);
  return (
 
    <div className="">
          <h1 className="uppercase font-bold text-center border-b py-4  text-[#7f8c8d] border-[#7f8c8d] ">
        About Me
      </h1>
   
      <div className="flex items-center justify-center pt-6 ">
        <img className="w-8/12" src={user?.photoURL} alt="" />
      </div>

      <p className="text-xs text-[#7f8c8d] py-5 text-center ">
        Hi,I'm <span>{user?.displayName}</span> I'm a passionate and curious individual who loves learning,
        creating, and growing every day. Whether it's building projects,
        exploring new ideas, or solving problems, I enjoy turning thoughts into
        reality through code, design, or writing.
      </p>

         <h1 className="uppercase  text-center border-b py-4  text-[#7f8c8d] border-base-300 ">
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
            <FaLinkedin className="text-[ #0077B5]" size={24}></FaLinkedin>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube className="text-[#FF0000]" size={24}></FaYoutube>
          </a>
        </div> 
      
     </div>

     <div className=" w-10/12 mx-auto ">
            <Lottie className="" animationData={log} loop={true}></Lottie>
            </div>
    </div>
  
   
  );
};

export default Leftside;
