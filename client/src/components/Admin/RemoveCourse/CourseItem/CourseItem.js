import React from "react";

import "./CourseItem.css";

export const CourseItem = ({
  title,
  composition,
  url,
  price,
  id,
  onRemove,
}) => {
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
        <div className="item-btn">
          <button onClick={onRemove} type="submit" className="add btn">
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
};
