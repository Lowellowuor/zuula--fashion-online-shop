import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../../styles/AdminLayout.css";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content area */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
