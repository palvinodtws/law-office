import React from "react";

export default function Filters() {
  return (
    <div>
      <section className="law-hero">
        <div className="container-fluid">
          <div className="hero-box">
            <div className="hero-left">
              <button className="heroleft-button">
                <img src="/img/calender.png" alt="" />
                Calender View
              </button>
            </div>
            <div className="hero-mid">
              <h3>Cause List of Office of Mr. Bhavjeet Singh, Advocate</h3>
              <h4>Thursday, 24 November 2022</h4>
              <button className="calenderview-mid">
                {" "}
                <img src="/img/calender.png" alt="" /> Calender View
              </button>
              <div className="heromid-box">
                <button className="mid-previous">Previous Day</button>
                <button className="mid-today">Today</button>
                <button className="mid-next">Next day</button>
              </div>
              <div className="middate-button">
                <div className="date_btn1">
                  <span id="date-from">Date From</span>
                  <span id="date_date">dd-mm-yyyy</span>
                  <span className="">
                    <img src="/img/mid-calender.png" alt="" />
                  </span>
                </div>
                <span className="middate-to">To</span>
                <div className="date_btn1">
                  <span id="date-from">Date From</span>
                  <span id="date_date">dd-mm-yyyy</span>
                  <span className="">
                    <img src="/img/mid-calender.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <button className="heroright-button">Add New Case</button>
            </div>
          </div>
        </div>
      </section>

      <section className="law-filter">
        <div className="container-fluid">
          <div className="filter-box">
            <div className="filter-left">
              <select
                className="form-select filter-select"
                aria-label="Default select example"
              >
                <option selected>Filter By:</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span>
                No of Cases: <strong>20</strong>
              </span>
            </div>

            <div className="filter-right">
              <div className="filterright-left">
                <select
                  className="form-select filter-select"
                  aria-label="Default select example"
                >
                  <option selected>Sort By: Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="filterright-right">
                <img src="/img/mail.png" alt="" />
                <img src="/img/download.png" alt="" />
                <img src="/img/printer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
