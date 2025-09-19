import React from 'react';
import '../../styles/Admin.css';

const StatsCard = ({ title, value, change, icon, color = '#2E7D5B' }) => {
  const isPositive = change >= 0;
  const formattedValue = typeof value === 'number' ? value.toLocaleString() : value;

  return (
    <div className="stats-card" style={{ '--accent-color': color }}>
      <div className="stats-card-header">
        <h3 className="stats-title">{title}</h3>
        <div className="stats-icon" style={{ backgroundColor: `${color}15` }}>
          {icon}
        </div>
      </div>
      <div className="stats-value">{formattedValue}</div>
      <div className={`stats-change ${isPositive ? 'positive' : 'negative'}`}>
        <span className="change-indicator">
          {isPositive ? '↗' : '↘'}
        </span>
        {Math.abs(change)}% {isPositive ? 'increase' : 'decrease'} from last period
      </div>
      <div className="stats-card-footer">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Math.min(Math.abs(change), 100)}%`,
              backgroundColor: color
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;