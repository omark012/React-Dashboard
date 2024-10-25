import React from "react";
import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, userLogout }) => {
  return (
    <div
      className="text-white bg-[#1c1c1c] 
       h-screen container mx-auto p-3"
    >
      <Header data={data} userLogout={userLogout} />
      <TaskNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
