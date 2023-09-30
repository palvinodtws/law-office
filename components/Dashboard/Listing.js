import React from "react";

export default function Listing() {
  return (
    <div>
      <section className="law-tables">
        <div className="container-fluid">
          <div className="law-table1">
            <div className="lawtb-head">
              <div className="lawtbhead-left">
                <h2>The State Of Bihar Vs Jibril Sah</h2>
                <span>(CWP 28589 of 2019)</span>
              </div>

              <div className="lawtbhead-right">
                <div className="alert_date">
                  <button
                    type="button"
                    className="btn btn-primary alertdate_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Set Alert
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog law-dialog">
                      <div className="modal-content">
                        <div className="modal-header lawdialog-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel1"
                          >
                            Set Alert
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="lawmodal-body">
                            <div className="modalbody-left">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label "
                                  htmlFor="flexCheckChecked"
                                  id="modalcheck-label"
                                >
                                  For Self
                                </label>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows=""></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4" id="emailismust">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>

                            <div className="modalbody-right">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                  id="modalcheck-label"
                                >
                                  For Client
                                </label>
                              </div>
                              <div className="mb-3">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  id="lawmodal__select"
                                >
                                  <option selected>Amit Kumar</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows=""></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4" id="emailismust">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer lawmodal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary modalfooter-alert"
                            data-bs-dismiss="modal"
                          >
                            Set Alert
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary modalfooter-now"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next_date">
                  <button
                    type="button"
                    id="nextdate_btn"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Set Next date
                  </button>

                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" id="next-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="next-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Set Next Date
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body" id="next-body">
                          <div className="nextbody-left">
                            <label htmlFor="">Select Judge</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <label htmlFor="">Fixed for</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <label htmlFor="">Stage</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <label htmlFor="">Case Status</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                          </div>

                          <div className=" nextbody-right">
                            <label htmlFor="">Case Status</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select className="form-select form-select-sm">
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <div id=" next-textarea" className="mb-3">
                              <label htmlFor="">Remarks</label>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                              ></textarea>
                            </div>

                            <label htmlFor="">Next Date</label>
                            <div
                              className="input-group mb-3"
                              id="next-inputgrp"
                            >
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer" id="next-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="nextfooter-btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lawtb-lower">
              <div className="lawlist-l1">
                <span>
                  Court: <strong>Supreme Court</strong>
                </span>
                <span>
                  Judge: <strong>Surjit Singh, Harjeet Singh</strong>(2)
                </span>
                <span>
                  Court Room: <strong>20</strong>
                </span>
                <span>
                  List No.{" "}
                  <strong>
                    <input type="text" />
                  </strong>
                </span>
                <span>
                  Priority:<strong>Urgent</strong>
                </span>
              </div>
              <div className="lawlist-l1">
                <span>
                  Advocates:<strong>Manish Kumar</strong>
                </span>
                <span>
                  Appearing for:<strong>Plantiff</strong>
                </span>
                <span>
                  Contact:<strong>Amit Kumar, 98765 23527</strong>
                </span>
                <span>
                  Opp. Counsel:<strong>Vijay Sharma, 98765 23527</strong>
                </span>
              </div>
              <div className="lawlist-l1" id="abcde">
                <span className="poi">
                  Pre Date:<strong>13 Jan 2022</strong>
                </span>
                <span className="poi">
                  Stage:<strong>1</strong>
                </span>
                <span className="poi">
                  Fixed for:<strong>1</strong>
                </span>
                <span className="poi">
                  Previous Order:{" "}
                  <strong>
                    <img src="/img/pdf.png" alt="" />
                  </strong>
                </span>
                <span className="poi">
                  Current Date:<strong>25 Jan 2023</strong>
                </span>
                <span className="poi">
                  Next Date: <strong>25 Feb 2023</strong>
                </span>
              </div>
              <div className="lawlist-l1" id="lawprevious">
                <span id="lawlong-span">
                  Previous Remarks:
                  <strong className="lawlong-text">
                    This is the remark text goes hereThis is the remark text
                    goes hereThis is the remark text goes hereThis is the remark
                    text goes here.
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="law-table1">
            <div className="lawtb-head">
              <div className="lawtbhead-left">
                <h2>The State Of Bihar Vs Jibril Sah</h2>
                <span>(CWP 28589 of 2019)</span>
              </div>

              <div className="lawtbhead-right">
                <div className="alert_date">
                  <button
                    type="button"
                    className="btn btn-primary alertdate_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Set Alert
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog law-dialog">
                      <div className="modal-content">
                        <div className="modal-header lawdialog-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel1"
                          >
                            Set Alert
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="lawmodal-body">
                            <div className="modalbody-left">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label "
                                  htmlFor="flexCheckChecked"
                                  id="modalcheck-label"
                                >
                                  For Self
                                </label>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows="5"></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>

                            <div className="modalbody-right">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                  id="modalcheck-label"
                                >
                                  For Client
                                </label>
                              </div>
                              <div className="mb-3">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  id="lawmodal__select"
                                >
                                  <option selected>Amit Kumar</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows=""></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer lawmodal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary modalfooter-alert"
                            data-bs-dismiss="modal"
                          >
                            Set Alert
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary modalfooter-now"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next_date">
                  <button
                    type="button"
                    id="nextdate_btn"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Set Next date
                  </button>

                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" id="next-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="next-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Set Next Date
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body" id="next-body">
                          <div className="nextbody-left">
                            <label htmlFor="">Select Judge</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Fixed for</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Stage</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Case Status</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                          </div>
                          <div className=" nextbody-right">
                            <label htmlFor="">Case Status</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <div id=" next-textarea" className="mb-3">
                              <label htmlFor="">Remarks</label>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                              ></textarea>
                            </div>
                            <label htmlFor="">Next Date</label>
                            <div
                              className="input-group mb-3"
                              id="next-inputgrp"
                            >
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer" id="next-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="nextfooter-btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lawtb-lower">
              <div className="lawlist-l1">
                <span>
                  Court: <strong>Supreme Court</strong>
                </span>
                <span>
                  Judge: <strong>Surjit Singh, Harjeet Singh</strong>(2)
                </span>
                <span>
                  Court Room: <strong>20</strong>
                </span>
                <span>
                  List No.{" "}
                  <strong>
                    <input type="text" />
                  </strong>
                </span>
                <span>
                  Priority:<strong>Urgent</strong>
                </span>
              </div>
              <div className="lawlist-l1">
                <span>
                  Advocates:<strong>Manish Kumar</strong>
                </span>
                <span>
                  Contact:<strong>Amit Kumar, 98765 23527</strong>
                </span>
                <span>
                  Opp. Counsel:<strong>Vijay Sharma, 98765 23527</strong>
                </span>
              </div>
              <div className="lawlist-l1">
                <span>
                  Pre Date:<strong>13 Jan 2022</strong>
                </span>
                <span>
                  Stage:<strong>1</strong>
                </span>
                <span>
                  Fixed for:<strong>1</strong>
                </span>
                <span>
                  Previous Order:{" "}
                  <strong>
                    <img src="/img/pdf.png" alt="" />
                  </strong>
                </span>
                <span>
                  Current Date:<strong>25 Jan 2023</strong>
                </span>
                <span>
                  Next Date: <strong>25 Feb 2023</strong>
                </span>
              </div>
              <div className="lawlist-l1" id="lawprevious">
                <span id="lawlong-span">
                  Previous Remarks:
                  <strong className="lawlong-text">
                    This is the remark text goes hereThis is the remark text
                    goes hereThis is the remark text goes hereThis is the remark
                    text goes here.
                  </strong>
                </span>
              </div>
            </div>
          </div>
          <div className="law-table1">
            <div className="lawtb-head">
              <div className="lawtbhead-left">
                <h2>The State Of Bihar Vs Jibril Sah</h2>
                <span>(CWP 28589 of 2019)</span>
              </div>

              <div className="lawtbhead-right">
                <div className="alert_date">
                  <button
                    type="button"
                    className="btn btn-primary alertdate_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Set Alert
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog law-dialog">
                      <div className="modal-content">
                        <div className="modal-header lawdialog-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel1"
                          >
                            Set Alert
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="lawmodal-body">
                            <div className="modalbody-left">
                              <div className="form-check">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modalcheck-label"
                                >
                                  For Self
                                </label>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows="5"></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>

                            <div className="modalbody-right">
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckDefault"
                                  id="modalcheck-label"
                                >
                                  For Client
                                </label>
                              </div>
                              <div className="mb-3">
                                <select
                                  className="form-select modal-select"
                                  aria-label="Default select example"
                                  id="lawmodal__select"
                                >
                                  <option selected>Amit Kumar</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 modal-textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" rows="5"></textarea>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  7654332301
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  9876543210
                                </label>
                              </div>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input modal-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked
                                />
                                <label
                                  className="form-check-label modal-label"
                                  htmlFor="flexCheckChecked"
                                  id="modal_checked"
                                >
                                  person@mail.com
                                </label>
                              </div>
                              <div className="prior mb-5">
                                <strong>Prior No. of Days </strong>
                                <span>3</span>
                                <img src="/img/alert.png" alt="" />
                              </div>

                              <div className="prior">
                                <strong>Particular Date</strong>
                                <span>dd/mm/yyyy</span>
                                <img src="/img/blue-calender.png" alt="" />
                                <img src="/img/alert.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer lawmodal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary modalfooter-alert"
                            data-bs-dismiss="modal"
                          >
                            Set Alert
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary modalfooter-now"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next_date">
                  <button
                    type="button"
                    id="nextdate_btn"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Set Next date
                  </button>

                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" id="next-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="next-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Set Next Date
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body" id="next-body">
                          <div className="nextbody-left">
                            <label htmlFor="">Select Judge</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select className="form-select form-select-sm modal_select">
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Fixed for</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm modal-select"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Stage</label>
                            <div className=" next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm modal-select"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                            <label htmlFor="">Case Status</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm modal-select"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>
                          </div>
                          <div className="nextbody-right">
                            <label htmlFor="">Case Status</label>
                            <div className="next__list">
                              <div className="mb-3" id="next-select">
                                <select
                                  className="form-select form-select-sm modal-select"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Select Judge</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mb-3 next_btn">
                                <button>Add</button>
                              </div>
                            </div>

                            <div id="next-textarea" className="mb-3">
                              <label htmlFor="">Remarks</label>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                              ></textarea>
                            </div>

                            <label htmlFor="">Next Date</label>
                            <div
                              className="input-group mb-3"
                              id="next-inputgrp"
                            >
                              <input
                                type="date"
                                className="form-control modal-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer" id="next-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="nextfooter-btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lawtb-lower">
              <div className="lawlist-l1">
                <span>
                  Court: <strong>Supreme Court</strong>
                </span>
                <span>
                  Judge: <strong>Surjit Singh, Harjeet Singh</strong>(2)
                </span>
                <span>
                  Court Room: <strong>20</strong>
                </span>
                <span>
                  List No.{" "}
                  <strong>
                    <input type="text" />
                  </strong>
                </span>
                <span>
                  Priority:<strong>Urgent</strong>
                </span>
              </div>
              <div className="lawlist-l1">
                <span>
                  Advocates:<strong>Manish Kumar</strong>
                </span>
                <span>
                  Contact:<strong>Amit Kumar, 98765 23527</strong>
                </span>
                <span>
                  Opp. Counsel:<strong>Vijay Sharma, 98765 23527</strong>
                </span>
              </div>
              <div className="lawlist-l1">
                <span>
                  Pre Date:<strong>13 Jan 2022</strong>
                </span>
                <span>
                  Stage:<strong>1</strong>
                </span>
                <span>
                  Fixed for:<strong>1</strong>
                </span>
                <span>
                  Previous Order:{" "}
                  <strong>
                    <img src="/img/pdf.png" alt="" />
                  </strong>
                </span>
                <span>
                  Current Date:<strong>25 Jan 2023</strong>
                </span>
                <span>
                  Next Date: <strong>25 Feb 2023</strong>
                </span>
              </div>
              <div className="lawlist-l1" id="lawprevious">
                <span id="lawlong-span">
                  Previous Remarks:
                  <strong className="lawlong-text">
                    This is the remark text goes hereThis is the remark text
                    goes hereThis is the remark text goes hereThis is the remark
                    text goes here.
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
