// src/components/marketplace/FilterBar.jsx
import { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    eventType: '',
    size: '',
    priceRange: ''
  });

  const eventTypes = ['Wedding', 'Birthday', 'Graduation', 'Gala', 'Introduction'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-50000', label: 'UGX 0 - 50,000' },
    { value: '50000-100000', label: 'UGX 50,000 - 100,000' },
    { value: '100000-200000', label: 'UGX 100,000 - 200,000' },
    { value: '200000+', label: 'UGX 200,000+' }
  ];

  const handleFilterChange = (name, value) => {
    const newFilters = {
      ...filters,
      [name]: value
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      eventType: '',
      size: '',
      priceRange: ''
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-charcoal">Filters</h2>
        <button 
          onClick={clearFilters}
          className="text-sm text-emerald-500 hover:text-emerald-600 font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Search</label>
          <input 
            type="text" 
            placeholder="What are you looking for?"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        {/* Event Type Filter */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Event Type</label>
          <select 
            value={filters.eventType}
            onChange={(e) => handleFilterChange('eventType', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">All Events</option>
            {eventTypes.map(event => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Size</label>
          <select 
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">All Sizes</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Price Range</label>
          <select 
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;