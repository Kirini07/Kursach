import React from "react";
import { useHistory } from "react-router-dom";

import { CategoryItem } from "./CtegoryItem/CategoryItem";

import "./CategoryList.css";
import { CATEGORIES } from "./Helper";

export const CategoryList = ({ orderId }) => {
  const history = useHistory();
  const renderCategory = (orderId) => {
    return CATEGORIES.map((category, i) => (
      <CategoryItem
        key={i}
        {...category}
        handleClick={(e) => {
          history.push(`/course/${category.categoryName}$$$${orderId}`);
        }}
      />
    ));
  };
  return (
    <div className="categories">
      <h3 className="category-list-title">Categories</h3>
      <div className="category-list">{renderCategory(orderId)}</div>
    </div>
  );
};
