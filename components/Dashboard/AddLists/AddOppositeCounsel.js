import React from "react";

export default function AddOpositeCounsel() {
  return (
    <div>
      <section className="opposite-form">
        <div className="container-fluid">
          <div className="oppositenewclient-box">
            <div className="addnewclient-left">
              <h2>Add Opposite Counsel</h2>
            </div>
            <div className="oppositenewclient-right">
              <h5>Clients / Add New Client</h5>
            </div>
          </div>
          <div className="oppositeform-box">
            <div className="oppositeform-row2">
              <div className="mb-3" id="opposite-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  Name
                </label>
                <input type="email" className="form-control opposite-input" />
              </div>
              <div className="mb-3" id="opposite-state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  Designation
                </label>
                <div className="oppositeform-state">
                  <select className="form-select opposite-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="opposite-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="opposite-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  Phone 1
                </label>
                <input type="email" className="form-control opposite-input" />
              </div>
              <div className="mb-3" id="opposite-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  Email
                </label>
                <input type="email" className="form-control opposite-input" />
              </div>
            </div>
            <div className="oppositeform-row">
              <div className="mb-3" id="opposite-state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  State
                </label>
                <div className="oppositeform-state">
                  <select className="form-select opposite-select">
                    <option selected>Uttar Pardesh</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="opposite-addbutton">Add</button>
                </div>
              </div>

              <div className="mb-3" id="opposite-city">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  City
                </label>
                <div className="opposite-state">
                  <select className="form-select opposite-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="opposite-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="opposite-address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label opposite-label"
                >
                  Address
                </label>
                <input type="email" className="form-control opposite-input" />
              </div>
            </div>
          </div>
          <div className="oppositesave--btn">
            <button className="opsa-button">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
