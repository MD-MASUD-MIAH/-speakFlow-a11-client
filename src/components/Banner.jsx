/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import team2 from "../assets/5396346.jpg";
import team3 from "./../assets/btn1.jpg";
import team1 from "./../assets/team1.jpg";
const Banner = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        style={{ backgroundImage: `url(${team3})` }}
        className=" bg-no-repeat bg-cover min-h-screen w-full"
      >
        <div className="hero-content flex-col-reverse   justify-between lg:flex-row-reverse">
          <div>
            <motion.img
              src={team2}
              animate={{ y: [0, 130, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="md:w-[500px] rounded-tl-2xl rounded-br-2xl shadow-2xl run 
      border-l-8 border-b-8 border-[#550527]"
            />
            <motion.img
              src={team1}
              animate={{ x: [0, 130, 0] }}
              transition={{ repeat: Infinity, duration: 10, delay: 5 }}
              className=" md:w-[500px] rounded-tl-2xl rounded-br-2xl shadow-2xl run 
      border-l-8 border-b-8 border-[#550527] hidden md:block"
            />
          </div>

          <div className="md:ml-40 py-10 md:mt-20">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 4 } }}
              className="md:text-5xl text-2xl  text-center md:text-start font-bold"
            >
             Stories <motion.span
                animate={{
                  color: ["#550527", "#8C5E75", "#E0B0D5", "#550527"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >  
                 Worth
               </motion.span>{" "}
            Sharing
            </motion.h1>
            <p className="py-6 text-center md:text-start , text-[#7f8c8d] ">
              Explore a world of ideas, uncover deep insights, and find
              inspiration <br /> in every word. This blog is a space where
              thoughts turn <br /> into stories, experiences spark learning,
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <button className="btn tom-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
