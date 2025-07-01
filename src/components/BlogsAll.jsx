import axios from "axios";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const BlogsAll = ({ blog }) => {
  const { user, isDark } = use(AuthContext);
  const { _id, image, title, addedTime, longDesc, shortDesc, category } = blog;
  const navigate = useNavigate();
  const handleWish = () => {
    const orderInfo = {
      wishId: _id,
      wisherEmail: user?.email,
      image: image,
      title: title,
      addedTime: addedTime,
      longDesc: longDesc,
      shortDesc: shortDesc,
      category: category,
    };

    axios
      .post(
        `https://blogsite-b11a11-server.vercel.app/place-wishList`,
        orderInfo
      )
      .then((res) => {
        console.log(res.data);
        navigate("/wishlist");
        Swal.fire({
          title: "Added to WishList!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error("Error placing order:");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { err },
          timer: 1000,
        });
      });
  };

  return (
    <div className="group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full max-w-xs">
      <div
        className={`p-4 border ${
          isDark ? "border-white" : "border-[#550527]"
        } shadow-sm dark:bg-gray-50 dark:text-gray-800 rounded-tl-2xl rounded-br-2xl h-full flex flex-col`}
      >
        {/* Category Badge */}
        <div className="flex justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center">
            <span className="badge badge-xs text-white py-2 px-4 badge-warning bg-[#550527]">
              {" "}
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 flex-grow flex flex-col mt-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-32 object-cover object-center dark:bg-gray-500 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Date */}
          <div className="text-xs text-gray-500 mt-1">{blog.addedTime}</div>

          {/* Text Content */}
          <div className="space-y-1 flex-grow">
            <h3 className="text-sm font-semibold dark:text-violet-600 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-xs dark:text-gray-600 line-clamp-2 leading-tight">
              {blog.shortDesc}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 justify-end mt-3">
            <button
              onClick={handleWish}
              className="text-xs bg-[#550527] hover:bg-[#450418] text-white px-3 py-1 rounded-md transition-colors duration-200"
            >
              Wish
            </button>
            <Link
              to={`/details/${_id}`}
              className="text-xs bg-[#550527] hover:bg-[#450418] text-white px-3 py-1 rounded-md transition-colors duration-200"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAll;
