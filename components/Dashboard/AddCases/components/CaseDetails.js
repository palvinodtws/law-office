import React from "react";

export default function CaseDetails() {
  return (
    <div>
      <div className="case-box">
        <div className="casebox-left">
          <div className="casedetails-row">
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="">Court name</label>
              <div id="casedetails-select">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button>Add</button>
              </div>
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="">Judge Name</label>
              <div id="casedetails-select">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button>Add</button>
              </div>
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Court Room No.
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="casedetails-row">
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="">Case Type</label>
              <div id="casedetails-select">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button>Add</button>
              </div>
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Case No.
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Case Year
              </label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="casedetails-row">
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Police Station
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Fire No.
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Year{" "}
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Under Section
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="casedetails-row">
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Tags
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="casedetails-row">
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="">User defined label</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3" id="casedetails-width">
              <label htmlFor="">User defined label</label>
              <div id="casedetails-select">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="casebox-right">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Case Year
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Stage</label>
            <div id="casedetails-select">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button>Add</button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Fixed For</label>
            <div id="casedetails-select">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button>Add</button>
            </div>
          </div>
          <div className="mb-3 caseright-textarea">
            <label htmlFor="">Remarks</label>
            <textarea name="" id="" cols="30" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Case Year
            </label>
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
      <div className="case-button">
        <button className="casesave-button">Save</button>
      </div>
    </div>
  );
}
