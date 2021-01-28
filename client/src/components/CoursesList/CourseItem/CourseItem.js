import React, { useState } from "react";

import "./CourseItem.css";

export const CourseItem = ({ title, composition, url, price, id, onAdd }) => {
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(count);
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <div className="item-container" key={id}>
      <div className="item-content">
        <img src={url} alt="img" className="item-img" />
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{composition}</p>
        <div className="item-fields">
          <p>
            Price:
            <span className="no-style-field">{price} грн</span>
          </p>
        </div>
        <form className="item-btn" onSubmit={handleSubmit}>
          <input className="count" type="number" onChange={handleChange} />
          <button type="submit" className="add btn">
            Додати
          </button>
        </form>
      </div>
    </div>
  );
};
