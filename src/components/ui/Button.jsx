import React from 'react';
import '../../styles/Button.css';
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary, secondary, success, danger, warning, info, light, dark
  size = 'medium', // small, medium, large
  disabled = false,
  isLoading = false,
  icon = null, // icon component (e.g., <i className="fas fa-plus"></i>)
  iconPosition = 'left', // left or right
  className = '',
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const disabledClass = disabled ? 'btn-disabled' : '';
  const loadingClass = isLoading ? 'btn-loading' : '';
  const fullWidthClass = fullWidth ? 'btn-full-width' : '';
  
  const combinedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    loadingClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={disabled || isLoading ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <span className="btn-spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </span>
      )}
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="btn-icon-left">{icon}</span>
      )}
      <span className="btn-content">{children}</span>
      {icon && iconPosition === 'right' && !isLoading && (
        <span className="btn-icon-right">{icon}</span>
      )}
    </button>
  );
};

export default Button;