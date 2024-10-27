import React, { useState } from "react";
import UserList from "../others/usersList";

const Login = ({ handleLogin, error }) => {
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
    handleLogin(formData.email, formData.password);
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex  h-screen items-center justify-center">
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
          {error && (
            <p className="bg-red-600 w-full text-center rounded p-1 ">
              Invalid credentials
            </p>
          )}
          <button className=" bg-emerald-500 mt-3 px-3 py-2 outline-none  text-xl rounded-full w-full transition-transform duration-200 transform hover:scale-105 hover:bg-emerald-600">
            Log In
          </button>
        </form>
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default Login;
