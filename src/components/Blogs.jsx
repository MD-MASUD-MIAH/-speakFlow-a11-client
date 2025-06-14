import axios from "axios";
import { use } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
const Blogs = ({ res }) => {
  const { user } = use(AuthContext);

  const { _id, image, title, addedTime, longDesc, shortDesc, category } = res;

  const handleWish = () => {
    const wishInfo = {
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
      .post(`http://localhost:4000/place-wishList`, wishInfo)
      .then((res) => {
        console.log("", res.data);

        Swal.fire({
          title: "Added to WishList!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error("", err);
      });
  };

  return (
    <div>
      <div className="card border border-[#550527] shadow-md  rounded-lg  ">
        <div className="flex items-center p-4 bg-[#550527] text-white rounded-t-lg justify-between mb-3">
          <div className="flex items-center rounded-lg gap-3">
            <img src={res.photoURL} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{res.userName}</p>
              <p className="text-sm text-gray-400">{res.addedTime}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CiBookmark size={24}></CiBookmark>
            <IoShareSocialOutline size={24}></IoShareSocialOutline>
          </div>
        </div>

        <h2 className="text-lg p-4 font-bold mb-2">{res.title}</h2>

        <div className="w-full   p-6 rounded">
          <img
            src={res.image}
            alt="news"
            className="w-full max-h-[500px] object-contain rounded-md"
          />
        </div>

        <p className="text-sm p-4 text-gray-700 border-b pb-3 border-[#550527]">
          {res?.longDesc?.slice(0, 200)}...
        </p>

        <div className="flex items-center px-4 pb-6 justify-end mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to={`/details/${res._id}`} className="btn tom-btn">
              Details
            </Link>
            <button onClick={handleWish} className="btn tom-btn">
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
