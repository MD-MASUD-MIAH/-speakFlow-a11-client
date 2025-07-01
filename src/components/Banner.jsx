/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = use(AuthContext);
  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
      };

      // Initial check
      checkIfMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage: isDark
            ? "url(https://i.ibb.co/zHH3mKSn/top-view-desk-dark-concept-with-copy-space.jpg)"
            : "url(https://i.ibb.co/svKSP26H/different-pens-scissors-holder-near-blank-paper-stucked-wall-1.jpg)",
        }}
        className="bg-no-repeat bg-center bg-cover
             md:min-h-[calc(100vh-150px)] w-full flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="hero-content flex flex-col  lg:flex-row-reverse justify-between md:gap-8">
            <div className="flex flex-col items-center lg:items-end gap-4">
              <motion.img
                src={`https://i.ibb.co/Hf8g6ZpQ/5396346-1.jpg`}
                animate={isMobile ? {} : { y: [0, 130, 0] }}
                transition={isMobile ? {} : { repeat: Infinity, duration: 5 }}
                className="w-full max-w-[300px] md:max-w-[400px] rounded-tl-2xl rounded-br-2xl shadow-2xl border-l-8 border-b-8 border-[#550527] lg:mr-20 mt-4"
              />
              <motion.img
                src={`https://i.ibb.co/s9z327dV/team1-1.jpg`}
                animate={{ x: [0, 130, 0] }}
                transition={{ repeat: Infinity, duration: 10, delay: 5 }}
                className="w-full max-w-[300px] md:max-w-[400px] rounded-tl-2xl rounded-br-2xl shadow-2xl border-l-8 border-b-8 border-[#550527] hidden md:block"
              />
            </div>

            <div className="lg:ml-10 py-4 md:py-10 lg:mt-0 text-center lg:text-left">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 4 } }}
                className="text-xl md:text-5xl font-bold"
              >
                Stories{" "}
                <motion.span
                  animate={{
                    color: ["#550527", "#8C5E75", "#E0B0D5", "#550527"],
                    transition: { duration: 4, repeat: Infinity },
                  }}
                >
                  Worth
                </motion.span>{" "}
                Sharing
              </motion.h1>
              <p
                className={`py-6 text-sm md:text-[16px] ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } max-w-md mx-auto lg:mx-0`}
              >
                Explore a world of ideas, uncover deep insights, and find
                inspiration in every word. This blog is a space where thoughts
                turn into stories, experiences spark learning,
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="btn tom-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
