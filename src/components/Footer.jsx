import Lottie from "lottie-react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import log from "../../public/animation.json";
const Footer = () => {
  return (
    <div className="overflow-x-hidden">
      <footer className="footer sm:footer-horizontal bg-[#550527] text-white  p-10">
        <aside>
          <div className="w-20 h-20">
            <Lottie animationData={log} loop={true}></Lottie>
          </div>
          <p>
            <h1 className="text-2xl font-bold"> SpeakFlow</h1>
            <br />
            Hossain Masood Industries Ltd.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Blog Write</a>
          <a className="link link-hover">Blog Read</a>
          <a className="link link-hover">Collaborative writing</a>
          <a className="link link-hover">Unlimited Use</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Contact</h6>
          <a
            className="flex gap-2"
            href="https://web.facebook.com/"
            target="_blank"
          >
            <FaFacebook className="text-[#1877F2]" size={24}></FaFacebook>{" "}
            FaceBook
          </a>
          <a className="flex gap-2" href="https://github.com/" target="_blank">
            <FaGithub size={24}></FaGithub> GitHub
          </a>
          <a
            className="flex gap-2"
            href="https://www.linkedin.com/feed/"
            target="_blank"
          >
            <FaLinkedin className="text-[ #0077B5]" size={24}></FaLinkedin>{" "}
            LinkeDin
          </a>
          <a
            className="flex gap-2"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <FaYoutube className="text-[#FF0000]" size={24}></FaYoutube> YouTube
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
