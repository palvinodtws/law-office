import React from "react";

export default function AddReferences() {
  return (
    <div>
      <section className="refrence-form">
        <div className="container-fluid">
          <div className="refrencenewclient-box">
            <div className="refrencenewclient-left">
              <h2>Add Reference</h2>
            </div>
            <div className="refrencenewclient-right">
              <h5>Clients / Add New Client</h5>
            </div>
          </div>
          <div className="refrenceform-box">
            <div className="refrenceform-row2">
              <div className="mb-3" id="refrence-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  Name
                </label>
                <input
                  type="email"
                  className="form-control refrence-input"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3" id="refrence-state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  Designation
                </label>
                <div className="refrenceform-state">
                  <select className="form-select refrence-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="refrence-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="refrence-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  Phone 1
                </label>
                <input type="email" className="form-control refrence-input" />
              </div>
              <div className="mb-3" id="refrence-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  Email
                </label>
                <input type="email" className="form-control refrence-input" />
              </div>
            </div>
            <div className="refrenceform-row">
              <div className="mb-3" id="refrence-state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  State
                </label>
                <div className="refrenceform-state">
                  <select className="form-select refrence-select">
                    <option selected>Uttar Pardesh</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="refrence-addbutton">Add</button>
                </div>
              </div>

              <div className="mb-3" id="refrence-city">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  City
                </label>
                <div className="refrence-state">
                  <select className="form-select refrence-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="refrence-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="refrence-address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label refrence-label"
                >
                  Address
                </label>
                <input type="email" className="form-control refrence-input" />
              </div>
            </div>
          </div>
          <div className="refrencesave--btn">
            <button className="refrence-savebutton">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
