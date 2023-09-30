import React from "react";

export default function AttachedDocuments() {
  return (
    <div>
      <div className="attached-box">
        <div className="attachedbox-upper">
          <div className="attachedupper-left">
            <div className="document-content mb-3">
              <div className="Adoc-content">
                <label htmlFor="">Type of document</label>
                <div className="attached-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="attached_btn">Add</button>
                </div>
              </div>
              <div className="Adoc-content">
                <label htmlFor="">Name of document</label>
                <div className="attached-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="attached_btn">Add</button>
                </div>
              </div>
            </div>
            <div className="mb-3 attached-textarea">
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div className="mb-3 attached-textarea">
              <label htmlFor="">Comments</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
          <div className="attachedupper-right">
            <div className="mb-3 attached-upload">
              <label htmlFor="formFile" className="form-label">
                <img src="/img/upload.png" alt="" />
              </label>
              <input className="form-control" type="file" id="formFile" />
              <p>Drag and drop file here</p>
            </div>
            <div className="mb-3 attached-uploadbtn">
              <span>or</span>
              <button className="attached_btn">Upload Document</button>
            </div>
            <div className="mb-3 attached-text">
              <p>
                Attached Document should be Pdf, Doc and JPG type only. Size of
                document should not exceed that 50 MB
              </p>
            </div>
            <div className="attached-save">
              <button className="attached-savebutton">Save</button>
            </div>
          </div>
        </div>
        <div className="attachedbox-lower">
          <div className="attachedlower-top">
            <div className="attachedlower-left">
              <p>
                <strong>List of Documents Attached</strong>
              </p>
            </div>
            <div className="attachedlower-mid">
              <p>
                No. of Documents:<strong>30</strong>
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find in Document name and description"
                />
                <span className="input-group-text" id="basic-addon2">
                  <img src="/img/search.png" alt="" />
                </span>
              </div>
              <div className="attachedlower-image">
                <img src="/img/lightblack-ouline.png" alt="" />
              </div>
            </div>
            <div className="attachedlower-right">
              <img src="/img/black-mail.png" alt="" />
              <img src="/img/black-download.png" alt="" />
              <img src="/img/black-printer.png" alt="" />
            </div>
          </div>
          <div id="attached-table">
            <table className="table ">
              <thead className="clientlower-head">
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Updated on</th>
                  <th scope="col">Updated By</th>
                  <th scope="col">Format</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablelist_white">
                  <td>Order</td>
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                  <td>
                    <img src="/img/table-delete (1).png" alt="" />
                    <img src="/img/table-delete (2).png" alt="" />
                    <img src="/img/table-delete (3).png" alt="" />
                    <img src="/img/table-delete (4).png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>Notes</td>
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
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
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
                    <img src="/img/pdf1.png" alt="" />
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
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
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
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
                    <img src="/img/pdf1.png" alt="" />
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
                  <td>Document Name</td>
                  <td>11 Nov 2016</td>
                  <td>Vakalatnama Filled - last opp for...</td>
                  <td>11 Nov 2016</td>
                  <td>Harpreet singh</td>
                  <td className="attached-pdfpdf">
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
