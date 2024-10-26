import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="mt-10">
      <h1 className="title my-2 text-2xl text-center uppercase font-semibold">
        Assigned Task
      </h1>
      <div
        id="tasklist"
        className="overflow-x-auto flex items-center gap-4 flex-nowrap h-[45%] w-full py-2"
      >
        {data.tasks.map((task, idx) => {
          if (task.active) {
            return <AcceptTask key={idx} task={task} />;
          }
          if (task.newTask) {
            return <NewTask key={idx} task={task} />;
          }
          if (task.completed) {
            return <CompleteTask key={idx} task={task} />;
          }
          if (task.failed) {
            return <FailedTask key={idx} task={task} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
