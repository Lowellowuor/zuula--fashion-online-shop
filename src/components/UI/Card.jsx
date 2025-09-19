import React from "react";
import "../../styles/Card.css";

const Card = ({ 
  title, 
  subtitle, 
  actions, 
  children, 
  footer, 
  className = "" 
}) => {
  return (
    <div className={`ui-card ${className}`}>
      {/* Header */}
      {(title || actions) && (
        <div className="ui-card-header">
          <div className="ui-card-header-left">
            {title && <h2 className="ui-card-title">{title}</h2>}
            {subtitle && <p className="ui-card-subtitle">{subtitle}</p>}
          </div>
          {actions && <div className="ui-card-actions">{actions}</div>}
        </div>
      )}

      {/* Body */}
      <div className="ui-card-body">
        {children}
      </div>

      {/* Footer */}
      {footer && <div className="ui-card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
