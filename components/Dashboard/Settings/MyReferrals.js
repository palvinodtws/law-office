import React from "react";

export default function MyReferrals() {
  return (
    <div>
      <div className="referrals-lower">
        <div className="referrals-top">
          <div className="referrals-left">
            <p>
              <strong>My Referrals</strong>
            </p>
          </div>
          <div className="referrals-right">
            <div className="input-group">
              <input
                type="text"
                className="form-control Referralsearch-input"
                placeholder="Find in heading and description"
              />
              <span
                className="input-group-text Referral-search"
                id="basic-addon2"
              >
                <img src="/img/search.png" alt="" />
              </span>
            </div>
            <div className="referrals-image">
              <img src="/img/lightblack-ouline.png" alt="" />
            </div>
          </div>
        </div>
        <div className="Referrals-table">
          <table className="table ">
            <thead className="clientlower-head">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Trans Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Period earned</th>
                <th scope="col">Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tablelist_white">
                <td>11 Nov 2016</td>
                <td>232123</td>
                <td>Amit Kumar</td>
                <td>9876543210</td>
                <td>Premium Plan</td>
                <td>11 Nov 2016 to 11 Nov 2017</td>
                <td>
                  <img src="/img/pdf1.png" alt="" />
                </td>
              </tr>
              <tr className="tablelist_blue">
                <td>11 Oct 2016</td>
                <td>186543</td>
                <td>Amit Kumar</td>
                <td>9876543210</td>
                <td>Premium Plan</td>
                <td>11 Nov 2016 to 11 Nov 2017</td>
                <td>
                  <img src="/img/pdf1.png" alt="" />
                </td>
              </tr>
              <tr className="tablelist_white">
                <td>11 Sep 2016</td>
                <td>864535</td>
                <td>Amit Kumar</td>
                <td>9876543210</td>
                <td>Basic Plan</td>
                <td>11 Nov 2016 to 11 Nov 2017</td>
                <td>
                  <img src="/img/pdf1.png" alt="" />
                </td>
              </tr>
              <tr className="tablelist_blue">
                <td>11 Aug 2016</td>
                <td>334527</td>
                <td>Amit Kumar</td>
                <td>9876543210</td>
                <td>Basic Plan</td>
                <td>11 Nov 2016 to 11 Nov 2017</td>
                <td>
                  <img src="/img/pdf1.png" alt="" />
                </td>
              </tr>
              <tr className="tablelist_white">
                <td>11 July 2016</td>
                <td>334527</td>
                <td>Amit Kumar</td>
                <td>9876543210</td>
                <td>Basic Plan</td>
                <td>11 Nov 2016 to 11 Nov 2017</td>
                <td>
                  <img src="/img/pdf1.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
