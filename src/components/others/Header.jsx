import React from "react";

const Header = () => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="text-white  flex items-center justify-between my-1 py-3">
      <h1>
        Hello <br /> <span className="text-2xl font-bold">user 👋</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="px-4 py-2 bg-red-600 font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
