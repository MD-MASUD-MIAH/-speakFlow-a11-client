import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const RightSide = ({ handleCategory }) => {
  const { isDark } = use(AuthContext);

  const category = [
    "technology",
    "education",
    "personalDevelopment",
    "entertainment",
    "health&fitness",
    "travel",
    "food",
    "lifestyle",
    "",
  ];

  const handlesumit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    if (email) {
      Swal.fire({
        title: " You're now subscribed – stay tuned for updates!",
        icon: "success",
        draggable: true,
        timer: 1500,
      });

      e.target.reset();
    }
  };
  return (
    <div className="pb-4">
      <div>
        <h1 className="uppercase font-bold  border-b py-4  text-[#7f8c8d] border-base-300 ">
          category
        </h1>

        <div className=" flex flex-col">
          {category.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCategory(item)}
              className="btn rounded-0 uppercase"
            >
              {item?item:'Latest Blogs'}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1
          className={`uppercase font-bold  border-b py-4  text-[#7f8c8d] ${
            isDark ? "border-gray-500" : "border-gray-300"
          }`}
        >
          Subscribe
        </h1>

        <p className="text-[#7f8c8d] text-sm py-4">
          Subscribe for the newsletter and receive email <br /> notification of
          every future post.
        </p>

        <form onSubmit={handlesumit} className="space-y-5" action="">
          <input
            name="email"
            placeholder="type your email"
            className={`border text-center ${
              isDark ? "border-white" : "border-[#550527]"
            }  w-full py-2 placeholder:px-4`}
            type="email"
          />{" "}
          <br />
          <button className="tom-btn bg-black uppercase w-full">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
