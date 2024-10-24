import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    handleLogin(formData.email, formData.password);
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 border-emerald-500 rounded-lg p-20">
        <form
          onSubmit={submitHandler}
          className="text-white flex flex-col gap-5 items-center justify-center"
        >
          <h2 className="text-white text-lg font-bold">Log In</h2>

          <input
            type="email"
            className="border border-emerald-500 px-5 py-2 outline-none bg-transparent text-xl rounded-full placeholder:text-zinc-400"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            className="border border-emerald-500 px-5 py-2 outline-none bg-transparent text-xl rounded-full placeholder:text-zinc-400"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          <button className=" bg-emerald-500 mt-3 px-3 py-2 outline-none  text-xl rounded-full w-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
