import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menus({ itemName, path }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <li
      className={`text-gray-400 py-3 cursor-pointer mr-2 sm:mr-5 text-sm sm:text-xl ${
        location.pathname === path &&
        "text-black border-b-red-500 border-b-[3px]"
      }`}
      onClick={() => {
        navigate(path);
      }}
    >
      {itemName}
    </li>
  );
}
