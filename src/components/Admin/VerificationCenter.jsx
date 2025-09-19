// src/components/Admin/VerificationCenter.jsx
import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import "../../styles/VerificationCenter.css";

const VerificationCenter = () => {
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setVerifications([
        {
          id: "V001",
          user: "Alice Johnson",
          document: "National ID",
          status: "Pending",
          submittedOn: "2025-09-12",
        },
        {
          id: "V002",
          user: "Brian Kim",
          document: "Driver’s License",
          status: "Approved",
          submittedOn: "2025-09-10",
        },
        {
          id: "V003",
          user: "Catherine Lee",
          document: "Passport",
          status: "Rejected",
          submittedOn: "2025-09-05",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAction = (id, newStatus) => {
    setVerifications((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, status: newStatus } : v
      )
    );
  };

  const filteredVerifications =
    filter === "all"
      ? verifications
      : verifications.filter((v) => v.status === filter);

  if (loading) {
    return (
      <div className="verification-loading">
        <div className="loading-spinner"></div>
        <p>Loading verifications...</p>
      </div>
    );
  }

  return (
    <div className="verification-center">
      <div className="verification-header">
        <h1>Verification Center</h1>
        <div className="verification-actions">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {filteredVerifications.length === 0 ? (
        <p className="no-verifications">No verification requests found.</p>
      ) : (
        <table className="verification-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Document</th>
              <th>Status</th>
              <th>Submitted On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVerifications.map((v) => (
              <tr key={v.id} className={`status-${v.status.toLowerCase()}`}>
                <td>{v.id}</td>
                <td>{v.user}</td>
                <td>{v.document}</td>
                <td>{v.status}</td>
                <td>{v.submittedOn}</td>
                <td>
                  {v.status === "Pending" && (
                    <>
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleAction(v.id, "Approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={() => handleAction(v.id, "Rejected")}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                  {v.status !== "Pending" && <span>—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerificationCenter;
