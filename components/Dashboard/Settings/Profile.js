import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import { withAuth } from "../../Utils/Functions";
import {useFormik} from "formik";

export default function Profile() {
  const [cityData, setCityData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [designationData, setDesignationData] = useState([]);
  const [selectData, setSelectData] = useState({
    designation: '',
    city: '',
    state: '',

  })

  async function getCityDataFn() {
    const query = "getcity";
    let data;
    const response = await withAuth(data, query);
    console.log(response);

    if (response?.Error) {
      console.log("error");
    } else {
      const newData = response?.data?.data;
      console.log(newData, "city");
      newData.map((item) => {
        const data = { value: item.city, label: item.city };
        setCityData((prevData) => [...prevData, data]);
      });
    }
  }

  async function getStateDataFn() {
    const query = "getstate";
    let data;
    const response = await withAuth(data, query);
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
    const query = "getdesignation";
    let data;
    const response = await withAuth(data, query);
    console.log(response, "des");
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

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        firmName: "",
        title: "",
        name: "",
        mobile: "",
        enrollmentNo: "",
        address: "",
        dob:"",
      },
      //  validationSchema: signupSchema,
      onSubmit,
    });

  async function onSubmit(values) { 
    console.log(values,'values')
  }

  useEffect(() => {
    getCityDataFn();
    getDesignationDataFn();
    getStateDataFn();
  }, []);




  return (
    <div>
      <div className="profile-box">
        <form onSubmit={handleSubmit}>
        <div className="profile-content">
          <h3>Profile Details</h3>
          <div className="profile-row1 mb-3">
            <div className="mr">
              <select
                className="form-select"
                aria-label="Default select example"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected>Mr</option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Smt</option>
              </select>
            </div>
            <div className="name">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Name"
              />
            </div>
            {/* <div className="designation">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Designation</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}

            <Select
              className="designation"
              id="signup-s3"
              // required
              options={designationData}
              placeholder="designation"
              name="designation"
              // value={data?.designation}
              // onChange={(e) => setData({ ...data, designation: e })}
              isSearchable={true}
              // isMulti
            />
          </div>
          <div className="profile-row1 mb-3">
            <div className="typeyour">
              <input
                type="text"
                className="form-control"
                name="firmName"
                value={values.firmName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type your name / firm name as required to be printed on your cause list (optional)"
              />
            </div>
          </div>
          <div className="profile-row1 mb-3">
            <div className="date">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="Enrollment">
              <input
                type="text"
                className="form-control"
                placeholder="Enrollment No."
                name="enrollmentNo"
                value={values.enrollmentNo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <h3>Contact Details</h3>
          <div className="profile-row1 mb-3">
            {/* <div className="state">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}
            <Select
              className="state"
              id="signup-s3"
              // required
              options={stateData}
              placeholder="state"
              name="state"
              value={selectData?.designation}
              onChange={(e) => setSelectData({ ...selectData, designation: e })}
              isSearchable={true}
              // isMulti
            />
            {/* <div className="city">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}
            <Select
              className="city"
              id="signup-s3"
              // required
              options={cityData}
              placeholder="city"
              name="city"
              value={selectData?.designation}
              onChange={(e) => setSelectData({ ...selectData, designation: e })}
              isSearchable={true}
              // isMulti
            />
          </div>
          <div className="profile-row1 mb-3">
            <div className="address">
              <input
                type="text"
                className="form-control"
                placeholder="Address(Optional)"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="profile-row1 mb-3">
            <div className="email">
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="profile-row1 mb-3">
            <div className="mobile">
              <input
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="form-control"
                placeholder="Mobile"
              />
            </div>
          </div>
          <button className="profile-submit">Submit</button>
          </div>
          </form>
      </div>
    </div>
  );
}
