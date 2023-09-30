import React from "react";

export default function Forms() {
  return (
    <div>
      <section className="courtlaw-form">
        <div className="container-fluid">
          <h2>Office Documents</h2>
          <div className="Courtlawform-box">
            <div className="Courtlawformbox-upper">
              <div className="Courtlawformupper-left">
                <div className="Courtlaw-content mb-3">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3 Courtlawform-textarea">
                  <label htmlFor="">Description</label>
                  <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>
              </div>
              <div className="Courtlawformupper-right">
                <div className="mb-3 Courtlawform-upload">
                  <label htmlFor="formFile" className="form-label">
                    <img src="/img/upload.png" alt="" />
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                  <p>Drag and drop file here</p>
                </div>
                <div className="mb-3 Courtlawform-uploadbtn">
                  <span>or</span>
                  <button className="clf-uploadbtn">Upload Document</button>
                </div>
                <div className="mb-3 Courtlawform-text">
                  <p>
                    Courtlawform Document should be Pdf, Doc and JPG type only.
                    Size of document should not exceed that 50 MB
                  </p>
                </div>
              </div>
            </div>
            <div className="Courtlawform-submit">
              <button className="clf-submit">Submit</button>
            </div>
          </div>
          <div className="courtlawform1-box">
            <div className="Courtlawformbox-lower">
              <div className="Courtlawformlower-top">
                <div className="Courtlawformlower-left">
                  <p>
                    <strong>List of Forms</strong>
                  </p>
                </div>
                <div className="Courtlawformlower-mid">
                  <p>
                    No. of Documents:<strong>30</strong>
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control formsearch-input"
                      placeholder="Find in Document name and description"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <img src="/img/search.png" alt="" />
                    </span>
                  </div>
                  <div className="Courtlawformlower-image">
                    <img src="/img/lightblack-ouline.png" alt="" />
                  </div>
                </div>
                <div className="Courtlawformlower-right">
                  <img src="/img/black-mail.png" alt="" />
                  <img src="/img/black-download.png" alt="" />
                  <img src="/img/black-printer.png" alt="" />
                </div>
              </div>
              <div className="form-table">
                <table className="table ">
                  <thead className="clientlower-head">
                    <tr>
                      <th scope="col">Document Name</th>
                      <th scope="col">Remarks</th>
                      <th scope="col">Uploaded on</th>
                      <th scope="col">Updated By</th>
                      <th scope="col">Type</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tablelist_white">
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
                      <td>Form name goes here</td>
                      <td>Vakalatnama Filled - last opp for...</td>
                      <td>11 Nov 2016</td>
                      <td>Harpreet singh</td>
                      <td>
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
      </section>
    </div>
  );
}
