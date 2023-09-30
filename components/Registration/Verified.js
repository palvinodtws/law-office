import React from "react";

export default function Verified() {
  return (
    <div>
      <section className="verified">
        <div className="verified-box">
          <div className="verified-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="verified-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="verified-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="verified-right">
            <div className="container">
              <div className="verified-content">
                <h2>Verified</h2>
                <p>Your email address was verified successfully.</p>
                <div className="verified-button">
                  <a href="verify-mobile.html" className="emailverified-a">
                    Next
                  </a>
                </div>
              </div>
              <div className="verified-newuser">
                <span>Already a Member ?</span>
                <a href="login.html" className="verified-signin">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
