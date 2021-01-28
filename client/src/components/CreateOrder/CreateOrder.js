import React from "react";
import { Link } from "react-router-dom";

import "./CreateOrder.css";

export const CreateOrder = () => (
  <div className="order-create">
    <div className="order-create-header">Create Order</div>
    <div className="order-create-buttons">
      <Link to="/create" className="choose-btn">
        <span className="material-icons">add_circle_outline</span>
        <p> Створити </p>
      </Link>
      <Link to="/exists" className="choose-btn edit">
        <span className="material-icons">create</span>
        <p>
          Змінити <br /> існуюче
        </p>
      </Link>
    </div>
  </div>
);
