import React from "react";

const TaskNumbers = ({ data }) => {
  // console.log("employee match", data.taskCounts);

  return (
    <div>
      <h1 className="title mb-3 text-2xl text-center uppercase font-semibold">
        Status
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="py-5 px-8 rounded-lg bg-yellow-500 transition-transform transform hover:scale-[1.03]">
          <h2 className="font-semibold text-3xl">{data.taskCounts.active}</h2>
          <h3 className="font-bold text-xl">Active Task</h3>
        </div>
        <div className="py-5 px-8 rounded-lg bg-blue-500 transition-transform transform hover:scale-[1.03]">
          <h2 className="font-semibold text-3xl">{data.taskCounts.newTask}</h2>
          <h3 className="font-bold text-xl">New Task</h3>
        </div>
        <div className="py-5 px-8 rounded-lg bg-green-500 transition-transform transform hover:scale-[1.03]">
          <h2 className="font-semibold text-3xl">
            {data.taskCounts.completed}
          </h2>
          <h3 className="font-bold text-xl">Completed Task</h3>
        </div>
        <div className="py-5 px-8 rounded-lg bg-red-500 transition-transform transform hover:scale-[1.03]">
          <h2 className="font-semibold text-3xl">{data.taskCounts.failed}</h2>
          <h3 className="font-bold text-xl">Failed Task</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskNumbers;
