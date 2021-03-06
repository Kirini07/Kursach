import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  composition: Yup.string().required("Required"),
  costPrice: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
  categoryOfCourse: Yup.string().required("Required"),
  imgPath: Yup.string().required("Required"),
});
