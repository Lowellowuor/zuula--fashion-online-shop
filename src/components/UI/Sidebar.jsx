import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "fas fa-home" },
    { name: "Users", path: "/users", icon: "fas fa-users" },
    { name: "Listings", path: "/listings", icon: "fas fa-list" },
    { name: "Transactions", path: "/transactions", icon: "fas fa-money-check-alt" },
    { name: "Verification Center", path: "/verifications", icon: "fas fa-check-circle" },
    { name: "Analytics", path: "/analytics", icon: "fas fa-chart-line" },
    { name: "Settings", path: "/settings", icon: "fas fa-cog" },
  ];

  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Logo / Branding */}
      <div className="sidebar-header">
        <h2>{isOpen ? "Zuula Admin" : "Z"}</h2>
      </div>

      {/* Menu */}
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}
              >
                <i className={`sidebar-icon ${item.icon}`}></i>
                {isOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <Link to="/logout" className="sidebar-item logout">
          <i className="sidebar-icon fas fa-sign-out-alt"></i>
          {isOpen && <span>Logout</span>}
        </Link>
        <button
          className="sidebar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
