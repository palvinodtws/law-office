import React from "react";

export default function AddClients() {
  return (
    <div>
      <section className="client-form">
        <div className="container-fluid">
          <div className="addnewclient-box">
            <div className="addnewclient-left">
              <h2>Add New Client</h2>
            </div>
            <div className="addnewclient-right">
              <h5>Clients / Add New Client</h5>
            </div>
          </div>
          <div className="clientform-box">
            <div className="mb-3 client_radio">
              <div className="clientform-radio">
                <input type="radio" name="radio" id="radio1" />
                <label htmlFor="radio1" className="client-radio">
                  Organization
                </label>
              </div>
              <div className="clientform-radio">
                <input type="radio" name="radio" id="radio2" />
                <label htmlFor="radio2" className="client-radio">
                  Individual
                </label>
              </div>
            </div>
            <div className="clientform-row">
              <div className="mb-3" id="client_name">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  Client name
                </label>
                <input
                  type="email"
                  className="form-control clientform-input"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3" id="client_state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  State
                </label>
                <div className="clientform-state">
                  <select className="form-select clientform-select">
                    <option selected>Uttar Pardesh</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="client-addbutton">Add</button>
                </div>
              </div>

              <div className="mb-3" id="client_city">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  City
                </label>
                <div className="clientform-state">
                  <select className="form-select clientform-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="client-addbutton">Add</button>
                </div>
              </div>
            </div>
            <div className="mb-3" id="client_name">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label clientform-label"
              >
                Address
              </label>
              <input type="email" className="form-control clientform-input" />
            </div>
            <h3>Add Contact Person</h3>
            <div className="clientform-row2">
              <div className="mb-3" id="cleint-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  Name
                </label>
                <input type="email" className="form-control clientform-input" />
              </div>
              <div className="mb-3" id="cleint-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  Phone 1
                </label>
                <input type="email" className="form-control clientform-input" />
              </div>
              <div className="mb-3" id="cleint-add">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  Email
                </label>
                <input type="email" className="form-control clientform-input" />
              </div>
            </div>
            <div className="clientform-row">
              <div className="mb-3" id="form-state">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  State
                </label>
                <div className="clientform-state">
                  <select className="form-select clientform-select">
                    <option selected>Uttar Pardesh</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="client-addbutton">Add</button>
                </div>
              </div>

              <div className="mb-3" id="form-city">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  City
                </label>
                <div className="clientform-state">
                  <select className="form-select clientform-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="client-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="form-address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label clientform-label"
                >
                  Address
                </label>
                <input type="email" className="form-control clientform-input" />
              </div>
            </div>
            <button className="addmore-contact">Add More Contact Person</button>
          </div>
          <div className="clientsave--btn">
            <button className="cls-button">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
