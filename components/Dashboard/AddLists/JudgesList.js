import React from "react";

export default function JudgesList() {
  return (
    <div>
      <section className="judge-list">
        <div className="container-fluid">
          <div className="judgelist-box">
            <div className="judgelist-upper">
              <div className="judgeupper-left">
                <h5>List of Judges</h5>
              </div>
              <div className="judgeupper-right">
                <button className="judge-addnewjudge">Add New Judge</button>
              </div>
            </div>
            <div className="judgelist-mid">
              <div className="judgemid-left">
                <p>
                  Total no: <strong>30</strong>
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control judgesearch-input"
                    placeholder="Find Case"
                  />
                  <span
                    className="input-group-text judge-search"
                    id="basic-addon2"
                  >
                    <img src="/img/search.png" alt="" />
                  </span>
                </div>
                <img src="/img/judge-outline.png" alt="" />
              </div>
              <div className="judgemid-right">
                <img src="/img/mail.png" alt="" />
                <img src="/img/download.png" alt="" />
                <img src="/img/printer.png" alt="" />
              </div>
            </div>
            <div className="judgelist-lower">
              <table className="table" id="judge-table">
                <thead className="judgelower-head">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Short Name</th>
                    <th scope="col">Court Name</th>
                    <th scope="col">Room No.</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Chandigarh</td>
                    <td>2</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Punjab</td>
                    <td>1</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Haryana</td>
                    <td>14</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Punjab</td>
                    <td>35</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Chandigarh</td>
                    <td>4</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Chandigarh</td>
                    <td>6</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Chandigarh</td>
                    <td>17</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Chandigarh</td>
                    <td>5</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Haryana</td>
                    <td>9</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Designation here</td>
                    <td>Amit</td>
                    <td>Punjab</td>
                    <td>11</td>
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
      </section>
    </div>
  );
}
