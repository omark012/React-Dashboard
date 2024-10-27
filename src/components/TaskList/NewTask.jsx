import React from "react";

const NewTask = ({ task }) => {
  console.log(task);

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 border-2 border-blue-500 rounded-xl">
      <div className="flex items-center justify-between ">
        <h3 className="bg-blue-500 text-md rounded-md px-4 py-1">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="task text-xl mt-10 font-bold">{task.title}</h2>
      <p className="description mt-2 text-sm h-24">{task.description}</p>
      <div className="mt-10 ">
        <button className="bg-green-500 w-full px-1 py-1 rounded transition duration-300 ease-in-out hover:bg-green-600 ">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
