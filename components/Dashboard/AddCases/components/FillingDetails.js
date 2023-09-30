import React from "react";

export default function FillingDetails() {
  return (
    <div>
      <div className="filling-box">
        <div className="filling-row">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label filling-label"
            >
              Date of Filling
            </label>
            <input type="date" className="form-control filling-input" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label filling-label"
            >
              Diary No.
            </label>
            <input type="text" className="form-control filling-input" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label filling-label"
            >
              Office file no.
            </label>
            <input type="text" className="form-control filling-input" />
          </div>
        </div>
        <div className="filling-row">
          <div className="mb-3" id="filling-cnr">
            <div className="filling-inputcnr">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label filling-label"
              >
                CNR No.
              </label>
              <input type="text" className="form-control filling-input" />
            </div>
            <div className="filling-cnrbtn">
              <button>Get Details</button>
            </div>
          </div>
          <div className="filling-registration">
            <div className="mb-3" id="filling-registrationnumber">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label filling-label"
              >
                Registration No.
              </label>
              <input type="text" className="form-control filling-input" />
            </div>
            <div className="mb-3" id="filling-registrationdate">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label filling-label"
              >
                Registration date
              </label>
              <input type="date" className="form-control filling-input" />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label filling-label"
            >
              Date of Fist Hearing
            </label>
            <input type="date" className="form-control filling-input" />
          </div>
        </div>
        <div className="filling-row">
          <div className="filling-textarea">
            <label htmlFor="">Remarks</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div className="filling-buttons">
        <button className="filling-save">Save</button>
        <button className="filling-skip">Skip</button>
      </div>
    </div>
  );
}
