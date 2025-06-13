import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxiosSecure from "../hook/useAxiosSecure";
import Wish from "./wish";

const Wishlist = () => {
  const { user } = use(AuthContext);
  const [blogs, setBlogs] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/my-wishList/${user?.email}`)
      .then((data) => {
        setBlogs(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, axiosSecure]);
  return (
    <div className="w-11/12 mx-auto">

    <div>
        <div>
        <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
          My Wishlist
        </h1>
        <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
          Save your favorite items in one place. Add products to your wishlist
          to easily find them later,
          <br />{" "}
          <span className="hidden md:block">
            {" "}
            compare options, or purchase when you're ready.{" "}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {blogs?.map((blog) => (
          <Wish
            key={blog._id}
            blogs={blogs}
            setBlogs={setBlogs}
            blog={blog}
          ></Wish>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Wishlist;
