import React from "react";

export default function Feedback() {
  return (
    <div>
      <section className="feedback">
        <div className="container-fluid">
          <h2>Feedback</h2>
          <div className="feedback-box">
            <div id="feeback_content">
              <div className="feedback-left">
                <div className="feedback-textarea">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="15"
                    placeholder="Send Us Your Valuable Feedback / Complaint / Suggestion / Requirement of New Features to Serve You Better"
                  ></textarea>
                </div>
              </div>
              <div className="feedback-right">
                <div className="mb-3 feedback-upload">
                  <label htmlFor="formFile" className="form-label">
                    <img src="/img/upload.png" alt="" />
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                  <p>Drag and drop file here</p>
                </div>
                <div className="mb-3 feedback-uploadbtn">
                  <span>or</span>
                  <button className="feed-upload">Upload Document</button>
                </div>
                <div className="mb-3 feedback-text">
                  <p>
                    Attached Document should be Pdf, Doc and JPG type only. Size
                    of document should not exceed that 50 MB
                  </p>
                </div>
                <div className="feedback-save">
                  <button className="feed-save">Save</button>
                </div>
              </div>
            </div>
            <div className="feedback_btn">
              <button className="feed-button">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
