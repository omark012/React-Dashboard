import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const UserList = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gray-800 px-2 py-5 rounded-lg mt-5">
      <h3 className="text-white text-lg font-bold mb-3 text-center">
        Sample Login Details
      </h3>

      <ul className="list-disc pl-5 text-white">
        <span className="text-white font-semibold mr-1">ADMIN -</span>
        <span className="text-gray-300">
          Email: <span className="text-white">admin@me.com</span>
        </span>
        <h1 className="text-md font-bold my-1">For Employees:</h1>
        {userData.map((user, index) => (
          <li key={index}>
            <span className="text-white font-semibold mr-1">{user.name} -</span>
            <span className="text-gray-300">
              Email: <span className="text-white">{user.email}</span>
            </span>
          </li>
        ))}
        <h3 className="text-gray-100 p-1 mt-1 rounded text-center bg-blue-500">
          Same Password for all: <span className="font-semibold">123</span>
        </h3>
      </ul>
    </div>
  );
};

export default UserList;
