import React from "react";

export default function ClientsList() {
  return (
    <div>
      <section className="client-list">
        <div className="container-fluid">
          <div className="clientlist-box">
            <div className="clientlist-upper">
              <div className="clientupper-left">
                <h5>List of Clients</h5>
              </div>
              <div className="clientupper-right">
                <button className="clup-btn">Add New Client</button>
              </div>
            </div>
            <div className="clientlist-mid">
              <div className="clientmid-left">
                <p>
                  Total no: <strong>30</strong>
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control clsearch-input"
                    placeholder="Find Case"
                  />
                  <span
                    className="input-group-text client-search"
                    id="basic-addon2"
                  >
                    <img src="/img/search.png" alt="" />
                  </span>
                </div>
                <img src="/img/client-outline.png" alt="" />
              </div>
              <div className="clientmid-right">
                <img src="/img/mail.png" alt="" />
                <img src="/img/download.png" alt="" />
                <img src="/img/printer.png" alt="" />
              </div>
            </div>
            <div className="clientlist-lower">
              <table className="table " id="clientlist">
                <thead className="clientlower-head">
                  <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Type</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Contact Person</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_blue">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
                    <td>
                      <img src="/img/table-delete (1).png" alt="" />
                      <img src="/img/table-delete (2).png" alt="" />
                      <img src="/img/table-delete (3).png" alt="" />
                      <img src="/img/table-delete (4).png" alt="" />
                    </td>
                  </tr>
                  <tr className="tablelist_white">
                    <td>Amit Kumar</td>
                    <td>Individual</td>
                    <td>Chandigarh</td>
                    <td>Chandigarh</td>
                    <td>Amit Kumar</td>
                    <td>+91 987654 62736</td>
                    <td>amitkumar@gmail.com</td>
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
