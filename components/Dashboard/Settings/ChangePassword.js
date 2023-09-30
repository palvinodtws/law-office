import React from "react";
import { useFormik } from "formik";

export default function ChangePassword() {
   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
     useFormik({
       initialValues: {
         currentPassword: '',
         newPassword: '',
         confirmPassword:'',         
       },
       //  validationSchema: signupSchema,
       onSubmit,
     });
  
  async function onSubmit(values) {
    console.log(values)
  }
  
  return (
    <div>
      <div className="password-box">
        <h3>Change Password</h3>
        <form onSubmit={handleSubmit}>
        <div className="password-content">
          <div className="mb-3">
            <input
              type="password"
              className="form-control password-pinput"
              placeholder="Current Password"
              name="currentPassword"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control password-pinput"
              placeholder="New Password"
              name="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control password-pinput"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button className="password-save">Save</button>
          </div>
          </form>
      </div>
    </div>
  );
}
