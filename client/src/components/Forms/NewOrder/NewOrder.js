import React, { useState } from "react";
import { useFormik } from "formik";
import Alert from "@material-ui/lab/Alert";

import { validationSchema } from "./NewOrderValidation";
import { user } from "../../../store/User";
import { orders } from "../../../store/Order";
import "./NewOrder.css";

export const NewOrder = () => {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      placeNumber: "",
      employeeName: "",
      employeeId: user.user.userId,
    },
    onSubmit: (values) => {
      orders.newOrder(
        values.employeeId,
        values.placeNumber,
        values.employeeName
      );
      setSuccess(true);
    },
    validationSchema,
  });

  const onFocusHandler = (e) => {
    e.target.parentElement.classList = "inputs-wrap is-active is-completed";
  };
  const onFocusOutHandler = (e) => {
    if (e.target.value === "") {
      e.target.parentElement.classList = "inputs-wrap";
    }
  };
  return (
    <div className="new-order-wrap">
      <div className="new-order-header">New Order</div>
      <form onSubmit={formik.handleSubmit} className="new-order__add-form">
        <div className="inputs-wrap">
          <label htmlFor="placeNumber" className="inputs-wrap__label">
            Номер столу
            <span className="material-icons">push_pin</span>
          </label>
          <input
            onFocus={onFocusHandler}
            onChange={formik.handleChange}
            onBlur={onFocusOutHandler}
            className="inputs-wrap__text-inputs"
            type="text"
            value={formik.values.placeNumber}
            name="placeNumber"
            required
            id="placeNumber"
          />
        </div>
        <div className="inputs-wrap">
          <label htmlFor="employeeId" className="inputs-wrap__label">
            Ім'я офіціанта
            <span className="material-icons">perm_identity</span>
          </label>
          <input
            onFocus={onFocusHandler}
            onChange={formik.handleChange}
            onBlur={onFocusOutHandler}
            className="inputs-wrap__text-inputs"
            type="text"
            value={formik.values.employeeName}
            name="employeeName"
            required
            id="employeeName"
          />
        </div>
        <div className="inputs-wrap">
          <label htmlFor="employeeId" className="inputs-wrap__label">
            Id офіціанта
            <span className="material-icons">perm_identity</span>
          </label>
          <input
            onFocus={onFocusHandler}
            onChange={formik.handleChange}
            onBlur={onFocusOutHandler}
            className="inputs-wrap__text-inputs"
            type="text"
            value={formik.values.employeeId}
            name="employeeId"
            required
            id="employeeId"
          />
        </div>
        <button type="submit" className="btn-submit">
          Створити
          <span className="material-icons">send</span>
        </button>
      </form>
      {success && (
        <Alert severity="success">Успіх — Замовлення створено!</Alert>
      )}
    </div>
  );
};
