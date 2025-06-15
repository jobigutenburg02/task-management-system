import React from 'react';
import './Error.css';

function Error({ message, onClose }) {
  return (
    <div className="error">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>×</button>
    </div>
  );
}

export default Error;