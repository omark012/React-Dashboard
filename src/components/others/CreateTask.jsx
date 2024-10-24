import React, { useState } from "react";

const CreateTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    desc: "",
    date: "",
    category: "",
    assignTo: "",
  });

  const handleChange = (e) => {
    console.log("changed");
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
      desc: "",
      date: "",
      category: "",
      assignTo: "",
    });
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
            value={newTask.desc}
            onChange={handleChange}
            name="desc"
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
