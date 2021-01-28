import * as Yup from "yup";

export const validationSchema = Yup.object({
  placeNumber: Yup.number().required("Required"),
  employeeName: Yup.string().required("Required"),
  employeeId: Yup.string().required("Required"),
});
