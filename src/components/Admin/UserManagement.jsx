import React, { useState } from 'react';
import Card from '../UI/Card';
import Table from '../UI/Table';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Sarah K.', type: 'Closet Owner', status: 'Verified', joinDate: '2023-05-15', listings: 12 },
    { id: 2, name: 'James M.', type: 'Borrower', status: 'Pending', joinDate: '2023-06-22', listings: 0 },
    { id: 3, name: 'Lena A.', type: 'Both', status: 'Verified', joinDate: '2023-04-10', listings: 8 },
    { id: 4, name: 'David T.', type: 'Borrower', status: 'Verified', joinDate: '2023-07-05', listings: 0 },
  ]);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Type', accessor: 'type' },
    { 
      header: 'Status', 
      accessor: 'status',
      cell: (row) => (
        <span className={`status-badge ${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      )
    },
    { header: 'Join Date', accessor: 'joinDate' },
    { header: 'Listings', accessor: 'listings' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="action-buttons">
          <button className="btn-sm btn-primary">View</button>
          <button className="btn-sm btn-secondary">Edit</button>
        </div>
      )
    }
  ];

  return (
    <div className="user-management">
      <div className="page-header">
        <h1>User Management</h1>
        <div className="header-actions">
          <input type="text" placeholder="Search users..." className="search-input" />
          <button className="btn-primary">Add New User</button>
        </div>
      </div>
      
      <Card>
        <Table data={users} columns={columns} />
      </Card>
    </div>
  );
};

export default UserManagement;