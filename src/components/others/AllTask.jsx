import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log("alltask", authData.employee);

  return (
    <div className="bg-[#1c1c1c] text-white p-5 rounded mt-4">
      <div className="bg-emerald-500 rounded mb-3 px-3 py-2 flex justify-between">
        <h2 className="w-1/5 text-center uppercase">Employee Name</h2>
        <h2 className="w-1/5 text-center uppercase">New</h2>
        <h5 className="w-1/5 text-center uppercase">Active</h5>
        <h5 className="w-1/5 text-center uppercase">Completed</h5>
        <h5 className="w-1/5 text-center uppercase">Failed</h5>
      </div>
      <div className="h-52 overflow-y-auto">
        {authData.employees.map((employee, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 rounded mb-3 px-3 py-2 flex justify-between "
          >
            <h2 className="capitalize w-1/5 text-center">{employee.name}</h2>
            <h2 className="w-1/5 text-blue-400 text-center font-semibold">
              {" "}
              {employee.taskCounts.newTask}
            </h2>
            <h5 className="w-1/5 text-yellow-300 text-center font-semibold">
              {employee.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-green-500 text-center font-semibold">
              {employee.taskCounts.completed}
            </h5>
            <h5 className="w-1/5 text-red-500 text-center font-semibold">
              {employee.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
