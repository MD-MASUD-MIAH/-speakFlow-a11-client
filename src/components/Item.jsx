/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";

const Item = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) => `font-bold
        flex items-center px-4 py-3 my-1 transition-all duration-200 rounded-lg
        hover:bg-gray-100 hover:shadow-sm hover:translate-x-1 hover:text-black
        ${
          isActive
            ? "bg-blue-50 text-[#550527] border-l-4 border-[#550527] font-semibold"
            : ""
        }
      `}
    >
      <Icon className={`w-5 h-5 `} />

      <span className="mx-4">{label}</span>
    </NavLink>
  );
};

export default Item;
