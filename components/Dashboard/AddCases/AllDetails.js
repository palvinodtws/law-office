import React from "react";
import Applications from "./components/Applications";
import AttachedDocuments from "./components/AttachedDocuments";
import CaseDetails from "./components/CaseDetails";
import CaseNotes from "./components/CaseNotes";
import FillingDetails from "./components/FillingDetails";
import ProccedingHistory from "./components/ProccedingHistory";
import TaskList from "./components/TaskList";

export default function AllDetails() {
  return (
    <div>
      <section className="case-tab">
        <div className="container-fluid">
          <h2>Add New Case</h2>
          <div className="caseadd-box">
            <div className="casehead-upper mb-2">
              <div className="case-upper1">
                <p className="allhead">
                  <strong>The State Of Bihar -</strong> Plaintiff
                </p>
              </div>
              <div className="case-upper1">
                <p>
                  Assigned to: <strong>Manish Kumar</strong>
                </p>
              </div>
              <div className="case-upper1">
                <p>
                  Appearing for: <strong>Amit Kumar</strong>
                </p>
              </div>
              <div className="case-upper1">
                <p>
                  Case id: <strong>7363729</strong>
                </p>
              </div>
              <div className="case-upperimg">
                <p>
                  <img src="/img/edit.png" alt="" />
                </p>
              </div>
            </div>
            <div className="casehead-mid mb-3">vs</div>
            <div className="casehead-lower">
              <div className="case-lower1">
                <p className="allhead">
                  <strong>Jibril Sah -</strong> Respondent
                </p>
              </div>
              <div className="case-lower1">
                <p>
                  Contact Person: <strong>Amit Dua, 98765 43210</strong>
                </p>
              </div>
              <div className="case-lower1">
                <p>
                  Opposite Counsel: <strong>Amit Dua, 98765 43210</strong>
                </p>
              </div>
              <div className="case-lower1">
                <p>
                  Case Status: <strong>Active</strong>
                </p>
              </div>
              <div className="case-upperimg"></div>
            </div>
          </div>

          <div className="casetab-box">
            <ul
              className="nav nav-tabs"
              id="myTab caseadd-newtab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  <span>Filing Details</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  <span>Case Details</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  <span>Applications</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Case-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#Case-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Case-tab-pane"
                  aria-selected="false"
                >
                  <span>Case Notes</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Attached-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#Attached-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Attached-tab-pane"
                  aria-selected="false"
                >
                  <span>Attached Document</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Task-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#Task-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Task-tab-pane"
                  aria-selected="false"
                >
                  <span>Task list</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="History-tab casetab-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#History-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="History-tab-pane"
                  aria-selected="false"
                >
                  <span>History Of Proceeding</span>
                </button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <FillingDetails />
              </div>

              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <CaseDetails />
              </div>

              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <Applications />
              </div>

              <div
                className="tab-pane fade"
                id="Case-tab-pane"
                role="tabpanel"
                aria-labelledby="Case-tab"
                tabindex="0"
              >
                <CaseNotes />
              </div>

              <div
                className="tab-pane fade"
                id="Attached-tab-pane"
                role="tabpanel"
                aria-labelledby="Attached-tab"
                tabindex="0"
              >
                <AttachedDocuments />
              </div>

              <div
                className="tab-pane fade"
                id="Task-tab-pane"
                role="tabpanel"
                aria-labelledby="Task-tab"
                tabindex="0"
              >
                <TaskList />
              </div>

              <div
                className="tab-pane fade"
                id="History-tab-pane"
                role="tabpanel"
                aria-labelledby="History-tab"
                tabindex="0"
              >
                <ProccedingHistory />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
