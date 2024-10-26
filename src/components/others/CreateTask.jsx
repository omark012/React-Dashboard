import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const [assignTo, setAssignTo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "assignTo") {
      setAssignTo(value);
    } else {
      setNewTask((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    if (!newTask.title || !assignTo) {
      alert("Title and Assignee are required!");
      return;
    }

    const updatedData = userData.map((employee) =>
      employee.name === assignTo
        ? {
            ...employee,
            tasks: [...employee.tasks, newTask],
            taskCounts: {
              ...employee.taskCounts,
              newTask: employee.taskCounts.newTask + 1,
            },
          }
        : employee
    );
    setUserData(updatedData);
    console.log(updatedData);

    setNewTask({
      title: "",
      description: "",
      date: "",
      category: "",
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    setAssignTo("");
  };

  return (
    <div className="text-white bg-[#1c1c1c] mt-5">
      <h1 className="text-center text-3xl font-semibold p-1">
        Create New Task
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-start justify-between w-full
         rounded p-4 "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-md text-gray-300 mb-1 font-semibold">
              Task Title
            </h3>
            <input
              type="text"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              placeholder="E.g. Make UI design"
              value={newTask.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1 font-semibold">Date</h3>
            <input
              type="date"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={newTask.date}
              onChange={handleChange}
              name="date"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1 font-semibold">
              Assign to
            </h3>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={assignTo}
              onChange={handleChange}
              name="assignTo"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1 font-semibold">
              Category
            </h3>
            <input
              type="text"
              placeholder="E.g. design, testing, etc."
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={newTask.category}
              onChange={handleChange}
              name="category"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-md text-gray-300 mb-1 font-semibold">
            Description
          </h3>
          <textarea
            className="w-full h-56 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Enter Task Description"
            value={newTask.description}
            onChange={handleChange}
            name="description"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm font-semibold mt-5 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
