import React from "react";

export default function Applications() {
  return (
    <div>
      <div className="application-box">
        <div className="application-upper">
          <div className="application-form">
            <div className="applicationform-left">
              <div className="application-row">
                <div className="mb-3" id="application-width">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Application Number
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3" id="application-width">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Application Year
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3" id="application-width">
                  <label htmlFor="">Application Type</label>
                  <div className="application-select">
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
              <div className="application-row">
                <div className="mb-3" id="application-width">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Date of Application
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3" id="application-width">
                  <label htmlFor="">Name of Application</label>
                  <div className="application-select">
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
                <div className="mb-3" id="application-width">
                  <label htmlFor="">Filled By</label>
                  <div className="application-select">
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
              <div className="application-row">
                <div
                  className="mb-3 application-textarea"
                  id="application-width"
                >
                  <label htmlFor="">Remarks</label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="mb-3" id="application-width">
                  <label htmlFor="">Application Status</label>
                  <div className="application-select">
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
            <div className="applicationform-right">
              <div className="total-application">
                <p>Total No. of Application</p>
                <p>
                  <strong>100</strong>
                </p>
              </div>
              <div className="pending-application">
                <p>Pending Applications</p>
                <p>
                  <strong>70</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="application-lower">
          <div className="applicationlower-top">
            <div className="applicationtop-left">
              <p>
                <strong>List of Applications</strong>
              </p>
            </div>
            <div className="applicationtop-mid">
              <p>
                No. of Applications <strong>30</strong>
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <img src="/img/search.png" alt="" />
                </span>
              </div>
              <div className="applicationmid-image">
                <img src="/img/lightblack-ouline.png" alt="" />
              </div>
            </div>
            <div className="applicationtop-right">
              <img src="/img/black-mail.png" alt="" />
              <img src="/img/black-download.png" alt="" />
              <img src="/img/black-printer.png" alt="" />
            </div>
          </div>
          <div id="application-table">
            <table className="table ">
              <thead className="clientlower-head">
                <tr>
                  <th scope="col">Date of filling</th>
                  <th scope="col">Name</th>
                  <th scope="col">Filled By</th>
                  <th scope="col">Application No.</th>
                  <th scope="col">Remnarks</th>
                  <th scope="col">Status</th>
                  <th scope="col">Doc</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablelist_white">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Allowed</td>
                  <td>
                    <a href="">Attach</a>
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Disallowed</td>
                  <td className="application-pdfpdf">
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_white">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Dispose of</td>
                  <td>
                    <a href="">Attach</a>
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Allowed</td>
                  <td className="application-pdfpdf">
                    <img src="/img/doc.png" alt="" />
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_white">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Allowed</td>
                  <td>
                    <a href="" Attach></a>
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>11 Nov 2016</td>
                  <td>Order</td>
                  <td>11 Nov 2016</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>Allowed</td>
                  <td className="application-pdfpdf">
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
