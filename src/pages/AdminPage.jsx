import React, { useState } from 'react';
import Header from '../components/Admin/Header';
import Sidebar from '../components/Admin/Sidebar';
import Dashboard from '../components/Admin/Dashboard';
import UserManagement from '../components/Admin/UserManagement';
import ListingManagement from '../components/Admin/ListingManagement';
import TransactionManagement from '../components/Admin/TransactionManagement';
import VerificationCenter from '../components/Admin/VerificationCenter';
import Analytics from '../components/Admin/Analytics';
import '../styles/Admin.css';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return <Dashboard setActiveSection={setActiveSection} />;
      case 'users':
        return <UserManagement />;
      case 'listings':
        return <ListingManagement />;
      case 'transactions':
        return <TransactionManagement />;
      case 'verifications':
        return <VerificationCenter />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="admin-container">
      <Header 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="admin-content">
        <Sidebar 
          isOpen={sidebarOpen} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="admin-main">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;