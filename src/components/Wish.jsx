import axios from "axios";
import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Wish = ({ blog, setBlogs, blogs }) => {
  const { isDark } = use(AuthContext);

  const handleDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/wishList/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const ramindata = blogs.filter((res) => res._id !== id);

              setBlogs(ramindata);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div
          className={`p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isDark ? "" : "bg-white"
          }`}
        >
          <div className="relative overflow-hidden rounded-t-xl mb-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute top-4 right-4 bg-[#6e0933] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-500 font-medium">
              {new Date(blog.addedTime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <h3 className="text-xl font-bold ">{blog.title}</h3>

            <div className="flex justify-between items-center pt-4">
              <div className="flex space-x-3">
                <Link
                  to={`/details/${blog.wishId}`}
                  className="px-4 py-2 bg-[#6e0933] text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Details
                </Link>
                <button
                  onClick={() => handleDelte(blog._id)}
                  className="px-4 py-2 border border-red-500 text-red-500 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
