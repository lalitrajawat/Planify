import React, { useState, createContext, useContext } from "react";
import "./App.css";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Hardcoded user credentials for local authentication
  const hardcodedUser = {
    email: "user@example.com",
    password: "password123"
  };

  const login = (email, password) => {
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard logout={logout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
