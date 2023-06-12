import React from "react";
import CustomInput from "./CustomInput";

export default function SignIn() {
  return (
    <>
      <div className="bg-cyan-100">
        <div className="w-12/12 md:w-9/12 mx-auto py-6">
          <h1 className="flex justify-center mb-6 font-bold text-2xl">
            Sign In
          </h1>
          <div className="flex items-center flex-col lg:flex lg:justify-between lg:flex-row">
            <div className="hidden max-w-lg md:block lg:mx-1 w-6/12 mb-5 lg:mb-0 ">
              <img
                className="rounded-md"
                src="https://img.freepik.com/free-photo/woman-s-hand-showing-keys-from-new-apartment_329181-19909.jpg?w=740&t=st=1685878413~exp=1685879013~hmac=84ecd5c02a5940e3fa9b0a06e2cdcdf894f7d5c5ed7339c065eabf8aaecddf0e"
                style={{ width: "100%", height: "310px" }}
                alt="login"
              ></img>
            </div>
            <CustomInput />
          </div>
        </div>
      </div>
    </>
  );
}
