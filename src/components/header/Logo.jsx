import React from "react";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center cursor-pointer font-bold text-sm sm:text-3xl"
      onClick={() => {
        navigate("/");
      }}
    >
      <FcHome size={24} />
      <p>
        <span className="text-red-700">real</span>tor.com
      </p>
    </div>
  );
}
