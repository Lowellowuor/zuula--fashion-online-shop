import React, { useState, useMemo } from 'react';
import '../../styles/Table.css';

const Table = ({ 
  data, 
  columns, 
  title, 
  itemsPerPage = 5, 
  searchable = false, 
  sortable = false,
  striped = true,
  hoverEffect = true 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm || !searchable) return data;
    
    return data.filter(item => 
      columns.some(column => 
        String(item[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm, columns, searchable]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortable) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig, sortable]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, sortedData, itemsPerPage]);

  // Handle sort
  const handleSort = (key) => {
    if (!sortable) return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Render sort indicator
  const renderSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>{title}</h2>
        {searchable && (
          <div className="table-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>
        )}
      </div>

      <div className="table-wrapper">
        <table className={`data-table ${striped ? 'striped' : ''} ${hoverEffect ? 'hover' : ''}`}>
          <thead>
            <tr>
              {columns.map(column => (
                <th 
                  key={column.key} 
                  onClick={() => handleSort(column.key)}
                  className={sortable ? 'sortable' : ''}
                >
                  {column.header}
                  {sortable && <span className="sort-indicator">{renderSortIndicator(column.key)}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={index}>
                  {columns.map(column => (
                    <td key={column.key}>
                      {column.render ? column.render(item) : item[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="table-pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={currentPage === pageNum ? 'active' : ''}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;