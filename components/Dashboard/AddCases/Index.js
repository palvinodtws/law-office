import React from "react";

export default function AddCases() {
  return (
    <div>
      <section className="add-case">
        <div className="container-fluid">
          <h2>Add New Case</h2>
          <div className="addcase-box">
            <label htmlFor="">Case Title</label>
            <div className="add_list1 mb-3">
              <div className="addlist-row">
                <input type="text" id="addlist-input" />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="addlist-select"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button id="add_listbtn">Add</button>
              </div>
            </div>
            <div className="addlist-vs mb-3">
              <span>
                <strong>VS</strong>
              </span>
            </div>
            <div className="add_list1 mb-4">
              <div className="addlist-row">
                <input type="text" id="addlist-input" />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="addlist-select"
                >
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button id="add_listbtn">Add</button>
              </div>
            </div>
            <div className="add_list2 mb-4">
              <div className="add_row1">
                <label htmlFor="">Client Name</label>
                <div className="addlist2-left">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>

              <div className="add_row2">
                <label htmlFor="">Contact Person</label>
                <div className="addlist2-right">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>
            </div>
            <div className="add_list2 mb-4">
              <div className="add_row1">
                <label htmlFor="">Appearing for</label>
                <div className="addlist2-left">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>

              <div className="add_row2">
                <label htmlFor="">Case Assigned to</label>
                <div className="addlist2-right">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>
            </div>
            <div className="add_list2 mb-4">
              <div className="add_row1">
                <label htmlFor="">Reference</label>
                <div className="addlist2-left">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>

              <div className="add_row2">
                <label htmlFor="">Opposite Counsel</label>
                <div className="addlist2-right">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="addlist-select"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button id="add_listbtn">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="addsave-btn">
            <button className="addcase-save">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
