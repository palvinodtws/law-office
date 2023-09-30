import React from "react";

export default function AddJudges() {
  return (
    <div>
      <section className="judge">
        <div className="container-fluid">
          <div className="judge-upper">
            <div className="judgeupper-left">
              <h5>Add Judge</h5>
            </div>
            <div className="judgeupper-right">
              <h6>Clients / Add New Client</h6>
            </div>
          </div>
          <div className="judge-box">
            <div className="judge-row">
              <div className="mb-3" id="judge_name">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label judge-label"
                >
                  Name of Judge
                </label>
                <input type="email" className="form-control judge-input" />
              </div>
              <div className="mb-3" id="judge_short">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label judge-label"
                >
                  Short name of judge
                </label>
                <input type="email" className="form-control judge-input" />
              </div>
              <div className="mb-3" id="judge_select">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label judge-label"
                >
                  Designation of judge
                </label>
                <div className="judge-state">
                  <select className="form-select judge-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="judge-addbutton">Add</button>
                </div>
              </div>
            </div>
            <div className="judge-row2">
              <div className="mb-3" id="judgecourt-name">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label judge-label"
                >
                  Court Name
                </label>
                <div className="judge-state">
                  <select className="form-select judge-select">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="judge-addbutton">Add</button>
                </div>
              </div>
              <div className="mb-3" id="judgecourt-room">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label judge-label"
                >
                  Court Room No.
                </label>
                <input type="email" className="form-control judge-input" />
              </div>
            </div>
          </div>
          <div className="judgesave--btn">
            <button className="judge-savebutton">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
