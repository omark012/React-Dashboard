import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] text-white p-5 rounded mt-4">
      <div className="bg-emerald-500 rounded mb-3 px-3 py-2 flex justify-between">
        <h2 className="w-1/5 text-center uppercase font-semibold">S.No.</h2>
        <h2 className="w-1/5 text-center uppercase font-semibold">
          Employee Name
        </h2>
        <h2 className="w-1/5 text-center uppercase font-semibold">New</h2>
        <h5 className="w-1/5 text-center uppercase font-semibold">Active</h5>
        <h5 className="w-1/5 text-center uppercase font-semibold">Completed</h5>
        <h5 className="w-1/5 text-center uppercase font-semibold">Failed</h5>
      </div>
      <div className="h-52 overflow-y-auto">
        {userData.map((employee, idx) => (
          <div
            key={idx}
            className="flex justify-between bg-zinc-700 border-2 border-emerald-500 rounded mb-3 px-3 py-2  "
          >
            <h2 className="capitalize w-1/5 text-center font-bold">
              {idx + 1}
            </h2>
            <h2 className="capitalize w-1/5 text-center font-bold">
              {employee.name}
            </h2>
            <h2 className="w-1/5 text-blue-400 text-center font-bold">
              {" "}
              {employee.taskCounts.newTask}
            </h2>
            <h5 className="w-1/5 text-yellow-300 text-center font-bold">
              {employee.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-green-500 text-center font-bold">
              {employee.taskCounts.completed}
            </h5>
            <h5 className="w-1/5 text-red-500 text-center font-bold">
              {employee.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
