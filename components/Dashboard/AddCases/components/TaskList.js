import React from "react";

export default function TaskList() {
  return (
    <div>
      <div className="task-box">
        <div className="task-upper">
          <div className="task-tasktitle">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Task Title
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 task-textarea">
              <label htmlFor="">Task Description</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
          <div className="task-assigned">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Assigned To
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 task-textarea">
              <label htmlFor="">Comments</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
          <div className="tasklist-button">
            <button className="task-reminder">Set Reminder</button>
            <button className="task-addtask">Add task</button>
          </div>
          <div className="tasklist-text">
            <div className="tasktotal-task">
              <p>Total task</p>
              <p>
                <strong>25</strong>
              </p>
            </div>
            <div className="taskpending-task">
              <p>Pending Task</p>
              <p>
                <strong>30</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="task-lower">
          <div className="tasklower-top">
            <div className="tasklower-left">
              <p>
                <strong>List of Tasks</strong>
              </p>
            </div>
            <div className="tasklower-mid">
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
              <div className="tasklower-image">
                <img src="/img/lightblack-ouline.png" alt="" />
              </div>
            </div>
            <div className="tasklower-right">
              <img src="/img/black-mail.png" alt="" />
              <img src="/img/black-download.png" alt="" />
              <img src="/img/black-printer.png" alt="" />
            </div>
          </div>
          <div id="task-table">
            <table className="table ">
              <thead className="clientlower-head">
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Created By</th>
                  <th scope="col">Created On</th>
                  <th scope="col">Assigned To</th>
                  <th scope="col">Commented on</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablelist_white">
                  <td>Order</td>
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Arminder Singh</td>
                  <td>11 Nov 2016</td>
                  <td>Pending</td>
                  <td>
                    <a href="">Add Comments</a>
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
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Amit Sharma</td>
                  <td>11 Nov 2016</td>
                  <td>Pending</td>
                  <td>
                    <a href="">Add Comments</a>
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
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Vijay Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Completed</td>
                  <td>
                    <a href="">Add Comments</a>
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
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Vijay Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Pending</td>
                  <td>
                    <a href="">Add Comments</a>
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
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Vijay Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Pending</td>
                  <td>
                    <a href="">Add Comments</a>
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
                  <td>Amit Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Vijay Kumar</td>
                  <td>11 Nov 2016</td>
                  <td>Pending</td>
                  <td>
                    <a href="">Add Comments</a>
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
