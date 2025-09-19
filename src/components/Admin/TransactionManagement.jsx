import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import "../../styles/Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setTransactions([
        {
          id: "TXN001",
          user: "Alice Johnson",
          amount: 120000,
          status: "Success",
          date: "2025-09-01",
        },
        {
          id: "TXN002",
          user: "Brian Kim",
          amount: 50000,
          status: "Pending",
          date: "2025-09-05",
        },
        {
          id: "TXN003",
          user: "Catherine Lee",
          amount: 90000,
          status: "Failed",
          date: "2025-09-10",
        },
        {
          id: "TXN004",
          user: "David Ouma",
          amount: 150000,
          status: "Success",
          date: "2025-09-14",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleExport = () => {
    alert("Transactions exported successfully!");
  };

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((txn) => txn.status === filter);

  if (loading) {
    return (
      <div className="transactions-loading">
        <div className="loading-spinner"></div>
        <p>Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className="transactions-page">
      <div className="transactions-header">
        <h1>Transaction Management</h1>
        <div className="transactions-actions">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
          <Button
            variant="primary"
            size="small"
            icon={<i className="fas fa-download"></i>}
            onClick={handleExport}
          >
            Export
          </Button>
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="no-transactions">No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th> {/* Fixed this line */}
              <th>Amount (UGX)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((txn) => (
              <tr key={txn.id} className={`status-${txn.status.toLowerCase()}`}>
                <td>{txn.id}</td>
                <td>{txn.user}</td>
                <td>{txn.amount.toLocaleString()}</td>
                <td>{txn.status}</td>
                <td>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;