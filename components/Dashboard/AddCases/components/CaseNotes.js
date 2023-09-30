import React from "react";

export default function CaseNotes() {
  return (
    <div>
      <div className="casenote-box">
        <div className="notebox-upper">
          <div className="note-form">
            <div className="noteform-left">
              <div className="mb-3">
                <label htmlFor="">Case Category</label>
                <div className="notebox-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="notebook-btn">Add</button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="">Hiding</label>
                <div className="notebox-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="notebook-btn">Add</button>
                </div>
              </div>
              <div className="mb-3" id="notebox-uploadimage">
                <label htmlFor="formFile" className="form-label">
                  <img src="/img/upload.png" alt="" />
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3 noteupload-button">
                <span>or</span>
                <button className="notebook-btn">Upload Document</button>
              </div>
              <div className="noteattached-text">
                <p>
                  Attached Document should be Pdf, Doc and JPG type only. Size
                  of document should not exceed that 50 MB
                </p>
              </div>
            </div>
            <div className="noteform-right">
              <div className="mb-3 casenote-textarea">
                <label htmlFor="">Remarks</label>
                <textarea name="" id="" cols="30" rows="8"></textarea>
              </div>
              <div className="form-check mb-3" id="casenote-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Make this note private
                </label>
              </div>
              <div className="noteform-box">
                <button className="notebook-btn">Save Note</button>
              </div>
            </div>
          </div>
        </div>
        <div className="notebox-lower">
          <div className="noteboxlower-top">
            <div className="noteboxlower-left">
              <p>
                <strong>List of Applications</strong>
              </p>
            </div>
            <div className="noteboxlower-mid">
              <p>
                No. of Applications <strong>30</strong>
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find in heading and description"
                />
                <span className="input-group-text" id="basic-addon2">
                  <img src="/img/search.png" alt="" />
                </span>
              </div>
              <div className="noteboxlower-image">
                <img src="/img/lightblack-ouline.png" alt="" />
              </div>
            </div>
            <div className="noteboxlower-right">
              <img src="/img/black-mail.png" alt="" />
              <img src="/img/black-download.png" alt="" />
              <img src="/img/black-printer.png" alt="" />
            </div>
          </div>
          <div id="casenote-table">
            <table className="table ">
              <thead className="clientlower-head">
                <tr>
                  <th scope="col">Heading</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Created By</th>
                  <th scope="col">Doc</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablelist_white">
                  <td>Order</td>
                  <td>Team</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
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
                  <td>Order</td>
                  <td>Private</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="casenote-pdf">
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
                  <td>Order</td>
                  <td>Team</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
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
                  <td>Order</td>
                  <td>Private</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="casenote-pdf">
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
                  <td>Order</td>
                  <td>Team</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
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
                  <td>Order</td>
                  <td>Team</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="casenote-pdf">
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
