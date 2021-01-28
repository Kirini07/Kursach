import React from 'react';

import './CategoryItem.css';

export const CategoryItem = ({ title, handleClick }) => (
  <button onClick={handleClick} className="category-list-item">
    <p className="category-title">{title}</p>
  </button>
);
