import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: "📊" },
    { id: "users", label: "User Management", path: "/users", icon: "👥" },
    { id: "listings", label: "Listing Management", path: "/listings", icon: "👗" },
    { id: "transactions", label: "Transactions", path: "/transactions", icon: "💰" },
    { id: "verifications", label: "Verification Center", path: "/verifications", icon: "✅" },
    { id: "analytics", label: "Analytics", path: "/analytics", icon: "📈" },
  ];

  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Logo / Header */}
      <div className="sidebar-header">
        <span className="logo">{isOpen ? "Zuula Admin" : "Z"}</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "active" : ""}`
                }
              >
                <span className="sidebar-icon">{item.icon}</span>
                {isOpen && <span className="sidebar-label">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / Toggle button */}
      <div className="sidebar-footer">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? "« Collapse" : "»"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
