import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  //stores whether user has logined admin or employee
  const [user, setUser] = useState(null);
  //stores data of the person that is logged In(admin or employee)
  const [loggedInUserData, setLoggedInUserData] = useState("");
  // sets Error Message
  const [error, setError] = useState(false);
  console.log(error);

  // getting data of employees from ContextApi
  const [userData, setUserData, admin] = useContext(AuthContext);

  useEffect(() => {
    // keeps us loggedIn even after reload
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      setLoggedInUserData(admin);
    } else {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} error={error} />}
      {user === "admin" ? (
        <AdminDashboard userLogout={userLogout} data={loggedInUserData} />
      ) : (
        user === "employee" && (
          <EmployeeDashboard userLogout={userLogout} data={loggedInUserData} />
        )
      )}
    </div>
  );
};

export default App;
