import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard.jsx';
import ListingManagement from './components/Admin/ListingManagement.jsx';
import Analytics from './components/Admin/Analytics.jsx'; 
import Transactions from './components/Admin/TransactionManagement.jsx';
import UserManagement from './components/Admin/UserManagement.jsx';
import VerificationCenter from './components/Admin/VerificationCenter.jsx';// ✅ import your page
import './styles/Admin.css';

const AdminPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Dashboard />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Listing management page */}
        <Route path="/listings" element={<ListingManagement />} />
        {/* Analytics page */}
        <Route path="/analytics" element={<Analytics />} />
        {/* Transactions page */}
        <Route path="/transactions" element={<Transactions />} />
        {/* User management page */}
        <Route path="/users" element={<UserManagement />} />
        {/* Verification center page */}
        <Route path="/verifications" element={<VerificationCenter />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>
);
