import React, { useState } from "react";
import { useFormik } from "formik";
import Alert from "@material-ui/lab/Alert";

import { validationSchema } from "./AddCourseValidation";
import { user } from "../../../store/User";

import "./AddCourse.css";
import { useHttp } from "../../../hooks/useHttp";
import Spinner from "../../Spinner";

export const AddCourse = () => {
  const [success, setSuccess] = useState(false);
  const { loading, request, error } = useHttp();

  const formik = useFormik({
    initialValues: {
      title: "",
      composition: "",
      costPrice: 0,
      price: 0,
      categoryOfCourse: "",
      imgPath: "",
    },
    onSubmit: (values) => {
      const composition = values.composition.split(" ");
      request(
        "/admin/course/add",
        "POST",
        {
          title: values.title,
          composition,
          cost_price: values.costPrice,
          price: values.price,
          category_of_course: values.categoryOfCourse,
          img_path: values.imgPath,
        },
        { Authorization: `${user.user.role} ${user.user.token}` }
      );
      if (!error && !loading) {
        setSuccess(true);
      }
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
    <div>
      <div className="new-order-wrap">
        <div className="new-order-header">New Course</div>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={formik.handleSubmit} className="new-order__add-form">
            <div className="inputs-wrap">
              <label htmlFor="title" className="inputs-wrap__label">
                Назва Страви
                <span className="material-icons">push_pin</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.title}
                name="title"
                required
                id="title"
              />
            </div>
            <div className="inputs-wrap">
              <label htmlFor="composition" className="inputs-wrap__label">
                Склад
                <span className="material-icons">push_pin</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.composition}
                name="composition"
                required
                id="composition"
              />
            </div>
            <div className="inputs-wrap">
              <label htmlFor="costPrice" className="inputs-wrap__label">
                Собівартість
                <span className="material-icons">push_pin</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.costPrice}
                name="costPrice"
                required
                id="costPrice"
              />
            </div>
            <div className="inputs-wrap">
              <label htmlFor="price" className="inputs-wrap__label">
                Ціна
                <span className="material-icons">perm_identity</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.price}
                name="price"
                required
                id="price"
              />
            </div>
            <div className="inputs-wrap">
              <label htmlFor="categoryOfCourse" className="inputs-wrap__label">
                Категорія
                <span className="material-icons">perm_identity</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.categoryOfCourse}
                name="categoryOfCourse"
                required
                id="categoryOfCourse"
              />
            </div>
            <div className="inputs-wrap">
              <label htmlFor="imgPath" className="inputs-wrap__label">
                Фото
                <span className="material-icons">perm_identity</span>
              </label>
              <input
                onFocus={onFocusHandler}
                onChange={formik.handleChange}
                onBlur={onFocusOutHandler}
                className="inputs-wrap__text-inputs"
                type="text"
                value={formik.values.imgPath}
                name="imgPath"
                required
                id="imgPath"
              />
            </div>
            <button type="submit" className="btn-submit">
              Створити
              <span className="material-icons">send</span>
            </button>
          </form>
        )}
        {error && <Alert severity="error">{error.message}!</Alert>}
        {success && <Alert severity="success">Успіх — Позицію створено!</Alert>}
      </div>
    </div>
  );
};
