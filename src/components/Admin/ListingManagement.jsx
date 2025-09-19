import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import '../../styles/ListingManagement.css';

const ListingManagement = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Simulate fetching listings from API
  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setListings([
          { id: 1, title: 'Luxury Apartment', status: 'active', price: 'UGX 1,200,000' },
          { id: 2, title: 'Wedding Gown', status: 'inactive', price: 'UGX 300,000' },
          { id: 3, title: 'Office Space', status: 'active', price: 'UGX 2,500,000' },
        ]);
        setIsLoading(false);
      }, 800);
    };
    fetchListings();
  }, []);

  const handleAddListing = () => {
    console.log('Add new listing clicked');
    // navigate to form or open modal
  };

  const handleEdit = (id) => {
    console.log('Edit listing:', id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings(listings.filter((listing) => listing.id !== id));
    }
  };

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' ? true : listing.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="listing-loading">
        <div className="loading-spinner"></div>
        <p>Loading listings...</p>
      </div>
    );
  }

  return (
    <div className="listing-management">
      <div className="listing-header">
        <h1>Listing Management</h1>
        <Button
          variant="primary"
          size="small"
          icon={<i className="fas fa-plus"></i>}
          onClick={handleAddListing}
        >
          Add Listing
        </Button>
      </div>

      <div className="listing-filters">
        <input
          type="text"
          placeholder="Search listings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <table className="listing-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredListings.map((listing) => (
            <tr key={listing.id}>
              <td>{listing.title}</td>
              <td>
                <span
                  className={`status-badge ${
                    listing.status === 'active' ? 'active' : 'inactive'
                  }`}
                >
                  {listing.status}
                </span>
              </td>
              <td>{listing.price}</td>
              <td className="actions">
                <Button
                  variant="outline-primary"
                  size="small"
                  icon={<i className="fas fa-edit"></i>}
                  onClick={() => handleEdit(listing.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="light"
                  size="small"
                  icon={<i className="fas fa-trash"></i>}
                  onClick={() => handleDelete(listing.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          {filteredListings.length === 0 && (
            <tr>
              <td colSpan="4" className="no-data">
                No listings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingManagement;
