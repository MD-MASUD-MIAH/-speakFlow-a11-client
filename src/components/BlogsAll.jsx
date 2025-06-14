import axios from "axios";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const BlogsAll = ({ blog }) => {
  const { user } = use(AuthContext);
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
    <div className="overflow-x-hidden">
      <div className=" p-6 border border-[#550527] shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-tl-4xl rounded-br-4xl">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              {blog.category}
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={blog.image}
              alt=""
              className="block object-cover object-center w-full  dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>{blog.addedTime}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {blog.title}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {blog.shortDesc.slice(0, 120)}...
            </p>

            <div className="flex gap-4 justify-end mt-4">
              <button onClick={handleWish} className="btn btn-primary tom-btn">
                WishList
              </button>
              <Link to={`/details/${_id}`} className="btn btn-primary tom-btn">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAll;
