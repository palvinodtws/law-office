import * as yup from "yup";

var regularExpression =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  9;

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required(),
  password: yup
    .string()
    .min(5)
    .matches(regularExpression, {
      message: "Please create a stronger password",
    })
    .required(),
});

export const signupSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required(),
  password: yup
    .string()
    .min(5)
    .matches(regularExpression, {
      message: "Please create a stronger password",
    })
    .required(),
  name: yup.string().min(2).required(),
  // city: yup.string().required(),
  // state: yup.string().required(),
  // designation: yup.string().required(),
  mobile:  yup.string()
  .required("required")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "to short")
  .max(10, "too long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], " password does not match."),
});
