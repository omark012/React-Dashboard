import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center gap-4 flex-nowrap h-[45%] w-full mt-16 py-2"
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
  );
};

export default TaskList;
