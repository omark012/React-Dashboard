import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ data, userLogout }) => {
  return (
    <div className=" h-screen w-full container mx-auto">
      <Header data={data} userLogout={userLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
