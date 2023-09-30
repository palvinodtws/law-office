import React from "react";

export default function Subscription() {
  return (
    <div>
      <div className="subscription-box">
        <div className="subscription-upper">
          <h3>Subscription details</h3>
          <div className="subclient-row">
            <div className="sub1">
              <p>Client Id</p>
              <p>
                <strong>123456</strong>
              </p>
            </div>
            <div className="sub1">
              <p>Client Name</p>
              <p>
                <strong>Amit Kumar, Advocate</strong>
              </p>
            </div>
            <div className="sub1">
              <p>Plan Name</p>
              <p>
                <strong>Premium Plan</strong>
              </p>
            </div>
            <div className="sub1">
              <p>Subscription Period</p>
              <p>
                <strong>20 Jan 2022 to 20 Jan 2023</strong>
              </p>
            </div>
            <div className="sub1">
              <button className="subscription-payment">Make a Payment</button>
            </div>
          </div>
        </div>
        <div className="subscription-lower">
          <div className="subscriptionlower-top">
            <div className="subscriptionlower-left">
              <p>
                <strong>Transaction History</strong>
              </p>
            </div>
            <div className="subscriptionlower-right">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control settingssub-input"
                  placeholder="Find in Document name and description"
                />
                <span
                  className="input-group-text settings-search"
                  id="basic-addon2"
                >
                  <img src="/img/search.png" alt="" />
                </span>
              </div>
              <div className="subscriptionlower-image">
                <img src="/img/lightblack-ouline.png" alt="" />
              </div>
            </div>
          </div>
          <div className="subscription-table">
            <table className="table">
              <thead className="clientlower-head">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Trans Id</th>
                  <th scope="col">Type</th>
                  <th scope="col">Plan Name</th>
                  <th scope="col">Period</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablelist_white">
                  <td>11 Nov 2016</td>
                  <td>232123</td>
                  <td>Activate</td>
                  <td>Premium Plan</td>
                  <td>11 Nov 2016 to 11 Nov 2017</td>
                  <td>₹500</td>
                  <td>cash</td>
                  <td>
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>11 Oct 2016</td>
                  <td>186543</td>
                  <td>Upgrade</td>
                  <td>Premium Plan</td>
                  <td>11 Nov 2016 to 11 Nov 2017</td>
                  <td>₹500</td>
                  <td>online</td>
                  <td>
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_white">
                  <td>11 Sep 2016</td>
                  <td>864535</td>
                  <td>Renewal</td>
                  <td>Basic Plan</td>
                  <td>11 Nov 2016 to 11 Nov 2017</td>
                  <td>₹500</td>
                  <td>Credit Card</td>
                  <td>
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_blue">
                  <td>11 Aug 2016</td>
                  <td>334527</td>
                  <td>Referral</td>
                  <td>Basic Plan</td>
                  <td>11 Nov 2016 to 11 Nov 2017</td>
                  <td>₹500</td>
                  <td>Bill to Dealer</td>
                  <td>
                    <img src="/img/pdf1.png" alt="" />
                  </td>
                </tr>
                <tr className="tablelist_white">
                  <td>11 July 2016</td>
                  <td>334527</td>
                  <td>Referral</td>
                  <td>Basic Plan</td>
                  <td>11 Nov 2016 to 11 Nov 2017</td>
                  <td>₹500</td>
                  <td>Online Banking</td>
                  <td>
                    <img src="/img/pdf1.png" alt="" />
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
