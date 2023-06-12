import React, { useState } from "react";
import Inputs from "./Inputs";

function CustomInput() {
  const [inputs, setInputs] = useState({ Email: "", Password: "" });
  const handelChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="max-w-lg mx-1 w-6/12">
        <div className="flex flex-col">
          <Inputs inputs={inputs} handelChange={handelChange} />
        </div>
        <div className="flex justify-between mb-6">
          <p>
            Don't have an account?
            <span className="text-red-500"> Register</span>
          </p>
          <p className="text-blue-500">Forget password?</p>
        </div>
        <button className="border-2 bg-blue-400 w-full p-2 rounded-md outline-none border-none cursor-pointer">
          SIGN IN
        </button>
        <p className="my-4 text-center">OR</p>
        <button className="border-2 bg-red-400 w-full p-2 rounded-md outline-none border-none cursor-pointer">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </>
  );
}

export default CustomInput;
