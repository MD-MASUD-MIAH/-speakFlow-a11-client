import {
  FaBook,
  FaComment,
  FaHeart,
  FaSearch,
  FaUserEdit,
} from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div>
        <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
          About speakFlow
        </h1>
        <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
          Your platform for sharing thoughts, ideas, and passions
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#7f8c8d] border-b pb-2">
          What is speakFlow?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-[#7f8c8d]">
              speakFlow is a modern blogging platform designed for writers,
              thinkers, and creators who want to share their stories with the
              world. Our mission is to provide a seamless writing and reading
              experience that encourages authentic expression.
            </p>
            <p className="text-[#7f8c8d]">
              Whether you're a seasoned blogger or just starting out, speakFlow
              offers the tools you need to craft beautiful posts, engage with
              readers, and build your online presence.
            </p>
          </div>
          <div className="border  p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 ">Our Core Values</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className=" mr-2">•</span>
                <span>Authentic self-expression</span>
              </li>
              <li className="flex items-start">
                <span className=" mr-2">•</span>
                <span>Thoughtful engagement</span>
              </li>
              <li className="flex items-start">
                <span className=" mr-2">•</span>
                <span>Creative freedom</span>
              </li>
              <li className="flex items-start">
                <span className=" mr-2">•</span>
                <span>Community building</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6  border-b pb-2">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <FaBook size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Write Blog Posts
            </h3>
            <p className="text-gray-600">
              Create and publish your own blog posts with our intuitive editor.
              Format text, add images, and organize your content easily.
            </p>
          </div>

          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <FaHeart size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Wishlist</h3>
            <p className="text-gray-600">
              Save your favorite articles to your personal wishlist for easy
              access later. Never lose track of inspiring content.
            </p>
          </div>

          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <FaComment size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Comments</h3>
            <p className="text-gray-600">
              Engage with authors and other readers through our comment system.
              Share your thoughts and join the conversation.
            </p>
          </div>

          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <FaUserEdit size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Personal Profile
            </h3>
            <p className="text-gray-600">
              Customize your profile to showcase your writing and interests.
              Build your personal brand as a writer.
            </p>
          </div>

          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <FaSearch size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Discover Content
            </h3>
            <p className="text-gray-600">
              Find articles on topics you care about with our powerful search
              and recommendation system.
            </p>
          </div>

          <div className="feature-card p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#550527] mb-3">
              <MdOutlinePrivacyTip size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Privacy Controls
            </h3>
            <p className="text-gray-600">
              Control who can see your content with customizable privacy
              settings for each post.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6  border-b pb-2">Our Team</h2>
        <div className="flex items-center  p-6 rounded-lg">
          <RiTeamFill size={40} className="text-[#550527] mr-4" />
          <p className="">
            speakFlow is built by a small team of passionate developers,
            writers, and designers who believe in the power of storytelling.
            We're committed to continuously improving the platform based on
            feedback from our community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
