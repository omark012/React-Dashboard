import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 border-2 border-yellow-500 rounded-xl transition-transform duration-200 transform hover:-translate-y-2">
      <div className="flex items-center justify-between  ">
        <h3 className="bg-blue-500 text-md rounded-md px-4 py-1">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="task text-xl mt-10 font-bold">{task.title}</h2>
      <p className="description mt-2 h-24 text-sm">{task.description}</p>
      <div className="flex items-center justify-center gap-1 mt-10 ">
        <button className="bg-green-500 w-full px-1 py-1 rounded hover:bg-green-600 transition duration-300 ease-in-out ">
          Mark Complete
        </button>
        <button
          className="bg-red-500 w-full px-2 py-1 rounded transition duration-300 ease-in-out
         hover:bg-red-600 "
        >
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
