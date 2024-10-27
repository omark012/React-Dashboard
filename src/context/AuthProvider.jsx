import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  console.log(setUserData);

  const [admin, setAdmin] = useState({});

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData(employees); //have set the state with employees
    setAdmin(admin); //have set the state with admin
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData, admin]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
