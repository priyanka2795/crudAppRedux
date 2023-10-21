import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(() => {
    const storedFirstName = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    return !!(storedFirstName && storedPassword); 
  });

  const updateAuthenticated = (value) => {
    setAuthenticated(value);
  };

  useEffect(() => {
    const storedFirstName = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const userIsAuthenticated = storedFirstName && storedPassword;
    setAuthenticated(userIsAuthenticated ? true : false);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, updateAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
