import React from "react";

const Header = ({ userLogout }) => {
  return (
    <div className="text-white  flex items-center justify-between mt-1 py-3">
      <h1>
        Hello <br /> <span className="text-2xl font-bold">user 👋</span>{" "}
      </h1>
      <button
        onClick={userLogout}
        className="px-4 py-2 bg-red-600 font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
