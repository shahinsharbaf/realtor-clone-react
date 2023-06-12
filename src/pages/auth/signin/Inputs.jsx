import React from "react";

function Inputs({ inputs, handelChange }) {
  return (
    <>
      <input
        type="text"
        name="Email"
        placeholder="Email addrss"
        className="mb-6 p-2 rounded-md outline-none"
        value={inputs.Email}
        onChange={handelChange}
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        className="outline-none p-2 rounded-md mb-6"
        value={inputs.Password}
        onChange={handelChange}
      />
    </>
  );
}

export default Inputs;
