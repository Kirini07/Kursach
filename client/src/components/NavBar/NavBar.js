import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../store/User";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="link-list">
        <div className="links">
          {user.user.role === "employee" && (
            <>
              <Link className="link" to="/main">
                Головна
              </Link>
              <Link className="link" to="/choose">
                Замовлення
              </Link>
            </>
          )}
          {user.user.role === "admin" && (
            <>
              <Link className="link" to="/main">
                Головна
              </Link>
              <Link className="link" to="/sign-up">
                Зареэструвати працівника
              </Link>
              <Link className="link" to="/add-course">
                Додати блюдо
              </Link>
              <Link className="link" to="/remove-course">
                Видалити блюдо
              </Link>
            </>
          )}
        </div>
        <button className="log-out-btn" onClick={() => user.logout()}>
          <span className="material-icons">exit_to_app</span>
        </button>
      </nav>
    </div>
  );
};
