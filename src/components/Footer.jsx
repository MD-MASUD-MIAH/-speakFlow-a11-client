import Lottie from "lottie-react";
import { use } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import log from "../../public/animation.json";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const { isDark } = use(AuthContext);
  return (
    <div
      className={`overflow-x-hidden   ${
        isDark ? "bg-[#1E232B] border-t border-gray-400" : "bg-[#550527]"
      }`}
    >
      <footer className="footer py-10 text-white w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  w-full">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16">
                <Lottie animationData={log} loop={true} />
              </div>
              <h1 className="text-2xl font-bold text-white">SpeakFlow</h1>
            </div>
            <p className="text-gray-300">
              Empowering your voice through innovative communication solutions.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hossain Masood Industries Ltd.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h6 className="footer-title text-lg font-semibold text-white">
              Contact Us
            </h6>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MdEmail className="text-pink-300" size={20} />
                <span className="text-gray-300">speakflow@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-pink-300" size={20} />
                <span className="text-gray-300">+88 01764091069</span>
              </div>
              <div>
                <p className="text-gray-300">
                  Road No. 23/45 Shibchar, Madaripur Bangladesh
                </p>
              </div>
              {/* <div className="flex gap-4 mt-2">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <MdEmail size={16} />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <MdPhone size={16} />
                </div>
              </div> */}
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h6 className="footer-title text-lg font-semibold text-white">
              Follow Us
            </h6>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaFacebook size={16} />
                </div>
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                  <FaTwitter size={16} />
                </div>
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaLinkedin size={16} />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <FaGithub size={16} />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <FaYoutube size={16} />
                </div>
                <span>YouTube</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">
                  <FaInstagram size={16} />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
