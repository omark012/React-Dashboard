import React, { useState } from "react";

const CreateTask = () => {
  const data = JSON.parse(localStorage.getItem("employees"));

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    assignTo: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(newTask);
    setNewTask({
      title: "",
      description: "",
      date: "",
      category: "",
      assignTo: "",
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    const updatedData = data.map((employee) =>
      employee.name === newTask.assignTo
        ? { ...employee, tasks: [...employee.tasks, newTask] }
        : employee
    );
    console.log(updatedData);
  };

  return (
    <div className="text-white bg-[#1c1c1c] mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-start justify-between w-full
         rounded p-4 "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              type="text"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              placeholder="Make UI design"
              value={newTask.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              type="date"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={newTask.date}
              onChange={handleChange}
              name="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              type="text"
              placeholder="Enter Name"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={newTask.assignTo}
              onChange={handleChange}
              name="assignTo"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              type="text"
              placeholder="Design,dev,etc"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              value={newTask.category}
              onChange={handleChange}
              name="category"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="w-full h-52 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Enter Task Description"
            value={newTask.description}
            onChange={handleChange}
            name="description"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-5 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
