import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Formik,
  Field,
  ErrorMessage,
  useFormik,
  validateYupSchema,
} from "formik";
import { signupSchema } from "../Utils/Schemas";
import { withAuth } from "../Utils/Functions";



export default function SignUp() {
  const [data, setData] = useState({
    title: "",
    designation: "",
    state: "",
    city: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [cityData, setCityData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [designationData, setDesignationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordHide, setPasswordHide] = useState(false);
  const [passwordHide2, setPasswordHide2] = useState(false);

  const router = useRouter();


  async function onSubmit(values) {
   setLoading(true)
     console.log(values, "submmited");
       localStorage.setItem('email', values?.email)
    localStorage.setItem("phone", values?.mobile);
    
    const newData = {
      email: values?.email,
      mobile: values?.mobile,
      name: values?.name,
      title: values?.title,
      designation: data?.designation?.value,
      city: data?.city?.value,
      state: data?.state?.value,
      password: values?.password,
      confirmPassword: values?.confirmPassword

    }
    console.log(newData, 'form data')
    const query = 'register';
   const response = await withAuth(newData, query);
   console.log(response, 'resgister')
   
    if (response?.Error) {
      toast.error('Something went wrong ! Please try again');
     console.log("error")
    } else {
      setLoading(false)
     setTimeout(() => {
      router.push('/registration/infoText')
    },[])
   }
 
   
    
   }

   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
     useFormik({
       initialValues: {
         email: "",
         password: "",
         confirmPassword: "",
         title: "",
         name: "",
         mobile: "",
       },
       validationSchema: signupSchema,
       onSubmit,
     });


  function hidePass(e) {
    if (passwordHide == false) {
      setPasswordHide(true);
    }
    if (passwordHide == true) {
      setPasswordHide(false);
    }
  }

  function hidePass2(e) {
    if (passwordHide2 == false) {
      setPasswordHide2(true);
    }
    if (passwordHide2 == true) {
      setPasswordHide2(false);
    }
  }

  async function getCityDataFn() {
    const query = 'getcity'
    let data;
    const response = await withAuth(data,query);
    console.log(response);
      
     if (response?.Error) {
       console.log("error");
     } else {
       const newData = response?.data?.data;
       console.log(newData,'city')
       newData.map((item) => {
         const data = { value: item.city, label: item.city };
          setCityData((prevData) => [...prevData, data]);
       });
     }
  }

  async function getStateDataFn() {
    const query = "getstate";
    let data;
     const response = await withAuth(data,query);
     console.log(response, "res2");
       
     if (response?.Error) {
       console.log("error");
     } else {
         const newData = response.data.data;
         console.log(newData, "state");
         newData.map((item) => {
           const data = { value: item.state, label: item.state };
           setStateData((prevData) => [...prevData, data]);
         });
     }
 
   }
  
  async function getDesignationDataFn() {
    const query = 'getdesignation';
    let data;
     const response = await withAuth(data,query);
     console.log(response,'des');
     if (response?.Error) {
       console.log("error");
     } else {
      const newData = response.data.data;
      console.log(newData, "designation");
      newData.map((item) => {
        const data = { value: item.designation, label: item.designation };
        setDesignationData((prevData) => [...prevData, data]);
      });
     }

         
   }
 

 
  useEffect(() => {
    getCityDataFn()
    getDesignationDataFn();
    getStateDataFn();
    
  }, []);

  return (
    <div>
      <ToastContainer />
      <section className="signup">
        <div className="signup-box">
          <div className="signup-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="signup-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="signup-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="signup-right">
            <div className="container">
              <div className="signup-content">
                <div className="signup-header">
                  <h2>NEW USER</h2>
                  <h4>CREATE NEW ACCOUNT</h4>
                </div>
                <div className="signup-form">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="signup-list">
                      <div className="mb-3" id="signup-s1">
                        <select
                          id="inputState signup-input"
                          className="form-select"
                          defaultValue="Mr"
                          required
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                        </select>
                      </div>
                      <div className="mb-3" id="signup-s2">
                        <input
                          type="name"
                          className="form-control"
                          placeholder="Name"
                          id="signup-input"
                          required
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // onChange={(e) =>
                          //   setData({ ...data, name: e.target.value })
                          // }
                        />
                        {errors?.name && touched?.name && (
                          <p className="input-error">{errors?.name}</p>
                        )}
                      </div>
                      {/* <div className="mb-3" id="signup-s3"> */}
                      {/* <select
                          id="inputState signup-input"
                          className="form-select"
                        >
                          <option selected>Designation</option>
                          <option>...</option>
                        </select> */}
                      <Select
                        className="mb-3"
                        id="signup-s3"
                        // required
                        options={designationData}
                        placeholder="Designation"
                        name="designation"
                      
                        
                        value={data?.designation}
                        onChange={(e) =>
                          setData({ ...data, designation: e })
                        }
                        isSearchable={true}
                        // isMulti
                      />
                     
                      {/* </div> */}

                    </div>
                    <div className="signup-list">
                      {/* <div className="mb-3" id="signup-s4">
                        <select
                          id="inputState signup-input"
                          className="form-select"
                        >
                          <option selected>State</option>
                          <option>...</option>
                        </select>
                      </div> */}
                      <Select
                        className="mb-3"
                        id="signup-s4"
                        options={stateData}
                        placeholder="State"
                        name="state"
                        
                        value={data?.state}
                        onChange={(e) => setData({ ...data, state: e })}
                        isSearchable={true}
                        // isMulti
                      />
                      
                      <Select
                        className="mb-3"
                        id="signup-s4"
                        options={cityData}
                        placeholder="City"
                        name="city"
                        
                        value={data?.city}
                        onChange={(e) => setData({ ...data, city: e })}
                        isSearchable={true}
                        // isMulti
                      />
                   
                      {/* <div className="mb-3" id="signup-s4">
                        <select
                          id="inputState signup-input"
                          className="form-select"
                        >
                          <option selected>City</option>
                          <option>...</option>
                        </select>
                      </div> */}
                    </div>
                    <div className="signup-mainsignup">
                      <div className="mb-3" id="sigmup-m">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                          id="signup-input"
                          required
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // onChange={(e) =>
                          //   setData({ ...data, mobile: e.target.value })
                          // }
                        />
                        {errors?.mobile && touched?.mobile && (
                          <p className="input-error">{errors?.mobile}</p>
                        )}
                      </div>
                      <div className="mb-3" id="sigmup-e">
                        <input
                          type="email"
                          className="form-control"
                          id="signup-input"
                          placeholder="Email"
                          required
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // onChange={(e) =>
                          //   setData({ ...data, email: e.target.value })
                          // }
                        />
                        {errors?.email && touched?.email && (
                          <p className="input-error">{errors?.email}</p>
                        )}
                      </div>
                      <div className="mb-3 showPassword-input" id="sigmup-p">
                        <input
                          type={passwordHide == false ? "password" : "text"}
                          className={
                            errors?.password && touched?.password
                              ? "form-control inputField-error"
                              : "form-control"
                          }
                          id="signup-input"
                          required
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // onChange={(e) =>
                          //   setData({ ...data, password: e.target.value })
                          // }
                        />
                        {errors?.password && touched?.password && (
                          <p className="input-error">{errors?.password}</p>
                        )}
                        {/* <i className="bi bi-eye show-password"></i> */}
                        {passwordHide == false ? (
                          <i
                            onClick={(e) => hidePass(e)}
                            className="bi bi-eye show-password"
                          ></i>
                        ) : (
                          <i
                            onClick={(e) => hidePass(e)}
                            className="bi bi-eye-slash show-password"
                          ></i>
                        )}
                        {passwordErr ? (
                          <div
                            id="emailHelp"
                            style={{ color: "red" }}
                            className="form-text-1"
                          >
                            Hint: Use 8 or more characters with a mix of letters
                            (a-z), one capital letter, numbers (0-9) & and a
                            special character (@ $ % &)
                          </div>
                        ) : null}
                      </div>
                      <div
                        className="mb-3 showPassword-input--2"
                        id="sigmup-pp"
                      >
                        <input
                          type={passwordHide2 == false ? "password" : "text"}
                          className="form-control"
                          id="signup-input"
                          required
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // onChange={(e) =>
                          //   setData({
                          //     ...data,
                          //     confirmPassword: e.target.value,
                          //   })
                          // }
                        />
                        {errors?.confirmPassword &&
                          touched?.confirmPassword && (
                            <p className="input-error">
                              {errors?.confirmPassword}
                            </p>
                          )}
                        {/* <i className="bi bi-eye show-password--2"></i> */}
                        {passwordHide2 == false ? (
                          <i
                            onClick={(e) => hidePass2(e)}
                            className="bi bi-eye show-password--2"
                          ></i>
                        ) : (
                          <i
                            onClick={(e) => hidePass2(e)}
                            className="bi bi-eye-slash show-password--2"
                          ></i>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 form-check" id="signup-check">
                      <input
                        type="checkbox"
                        required
                        className="form-check-input login-check"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to{" "}
                        <a href="" className="signup-a">
                          Terms & Condition
                        </a>
                      </label>
                    </div>
                    <div className="signup-button">
                      <button className="signup-a" type="submit">
                        <img src="/img/Path - plus.png" alt="" />
                        {loading ? "LOADING..." : "SIGN UP"}
                      </button>
                    </div>
                    <div className="signup-newuser">
                      <span>Already Register ?</span>
                      <button className="signup-signin">
                        <Link href="/" className="signupnewuser-a">
                          Signin
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
