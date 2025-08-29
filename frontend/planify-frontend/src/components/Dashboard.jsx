import React from "react";
import "../styles/Dashboard.css";

const Dashboard = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="dashboard-header">Dashboard</h1>
        <button 
          onClick={handleLogout} 
          style={{
            padding: '8px 16px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      <p className="dashboard-welcome">
        Welcome to your dashboard! This is the main area where you can view your data and manage your account.
      </p>
      <p>Use the credentials: <strong>user@example.com</strong> / <strong>password123</strong> to login</p>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
