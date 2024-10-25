import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ userLogout }) => {
  return (
    <div className=" h-screen w-full container mx-auto">
      <Header userLogout={userLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
