import React from 'react';
import './styless.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Stock Management</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Sales</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;