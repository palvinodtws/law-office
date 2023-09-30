import React from "react";
import ChangePassword from "./ChangePassword";
import MyReferrals from "./MyReferrals";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Subscription from "./Subscription";

export default function Index() {
 
  
  
  return (
    <div>
      <section className="setting">
        <div className="container-fluid">
          <div className="setting-head">
            <h2>Settings</h2>
          </div>
          <div className="setting-main">
            <div className="d-flex align-items-start" id="settings-maintab">
              <div
                className="setting-alltabs nav flex-column nav-pills me-3 "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active settingtab-button"
                  id=" v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <div className="setting-tab">
                    <div className="setting-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.255"
                        height="18.191"
                        viewBox="0 0 24.255 18.191"
                      >
                        <path
                          id="Path_account-multiple-outline"
                          data-name="Path / account-multiple-outline"
                          d="M15.425,11.774a6.064,6.064,0,0,0,0-7.058A4.111,4.111,0,0,1,17.765,4a4.245,4.245,0,0,1,0,8.489,4.111,4.111,0,0,1-2.341-.716M6.245,8.245a4.245,4.245,0,1,1,4.245,4.245A4.245,4.245,0,0,1,6.245,8.245m2.425,0a1.819,1.819,0,1,0,1.819-1.819A1.819,1.819,0,0,0,8.67,8.245M18.978,19.765v2.425H2V19.765s0-4.851,8.489-4.851,8.489,4.851,8.489,4.851m-2.425,0c-.17-.946-1.613-2.425-6.064-2.425S4.51,18.929,4.425,19.765m14.492-4.851A6.452,6.452,0,0,1,21.4,19.765v2.425h4.851V19.765s0-4.4-7.349-4.851Z"
                          transform="translate(-2 -4)"
                        />
                      </svg>
                    </div>
                    <div className="setting-text">
                      <span>Profile</span>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link settingtab-button"
                  id="v-pills-password-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-password"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-password"
                  aria-selected="false"
                >
                  <div className="setting-tab">
                    <div className="setting-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.424"
                        height="25.424"
                        viewBox="0 0 25.424 25.424"
                      >
                        <g id="MDI_security" data-name="MDI / security">
                          <g
                            id="Boundary"
                            stroke="rgba(0,0,0,0)"
                            stroke-width="1"
                            opacity="0"
                          >
                            <rect width="25.424" height="25.424" />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="24.424"
                              height="24.424"
                            />
                          </g>
                          <path
                            id="Path_security"
                            data-name="Path / security"
                            d="M12.534,12.653h7.415c-.561,4.354-3.475,8.242-7.415,9.449V12.653H5.119V6.614L12.534,3.32m0-2.32L3,5.237v6.356c0,5.879,4.068,11.367,9.534,12.712C18,22.96,22.068,17.473,22.068,11.593V5.237Z"
                            transform="translate(0.178 0.059)"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="setting-text">
                      <span>ChangePassword</span>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link settingtab-button"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <div className="setting-tab">
                    <div className="setting-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.571"
                        height="24"
                        viewBox="0 0 20.571 24"
                      >
                        <path
                          id="Path_bell-alert-outline"
                          data-name="Path / bell-alert-outline"
                          d="M13.286,2A2.286,2.286,0,0,0,11,4.286a2.285,2.285,0,0,0,0,.331,8,8,0,0,0-5.714,7.669v6.857L3,21.429v1.143H23.571V21.429l-2.286-2.286V12.286a8,8,0,0,0-5.714-7.669,2.286,2.286,0,0,0,0-.331A2.286,2.286,0,0,0,13.286,2m0,4.571A5.714,5.714,0,0,1,19,12.286v8H7.571v-8a5.714,5.714,0,0,1,5.714-5.714M11,23.714a2.286,2.286,0,1,0,4.571,0Z"
                          transform="translate(-3 -2)"
                        />
                      </svg>
                    </div>
                    <div className="setting-text">
                      <span>Notification</span>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link settingtab-button"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <div className="setting-tab">
                    <div className="setting-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.08"
                        height="23.32"
                        viewBox="0 0 19.08 23.32"
                      >
                        <path
                          id="Path_shield-star-outline"
                          data-name="Path / shield-star-outline"
                          d="M22.08,11.6c0,5.883-4.07,11.385-9.54,12.72C7.07,22.985,3,17.483,3,11.6V5.24L12.54,1l9.54,4.24V11.6M12.54,22.2c3.975-1.06,7.42-5.788,7.42-10.367V6.618L12.54,3.311,5.12,6.618v5.215c0,4.579,3.445,9.307,7.42,10.367m3.233-5.3-3.265-1.961L9.254,16.9l.859-3.71L7.24,10.71l3.795-.329,1.473-3.5,1.484,3.487,3.795.329L14.9,13.19l.869,3.71"
                          transform="translate(-3 -1)"
                        />
                      </svg>
                    </div>
                    <div className="setting-text">
                      <span>Subscription</span>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link settingtab-button"
                  id="v-pills-referrals-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-referrals"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-referrals"
                  aria-selected="false"
                >
                  <div className="setting-tab">
                    <div className="setting-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.255"
                        height="18.191"
                        viewBox="0 0 24.255 18.191"
                      >
                        <path
                          id="Path_account-multiple-outline"
                          data-name="Path / account-multiple-outline"
                          d="M15.425,11.774a6.064,6.064,0,0,0,0-7.058A4.111,4.111,0,0,1,17.765,4a4.245,4.245,0,0,1,0,8.489,4.111,4.111,0,0,1-2.341-.716M6.245,8.245a4.245,4.245,0,1,1,4.245,4.245A4.245,4.245,0,0,1,6.245,8.245m2.425,0a1.819,1.819,0,1,0,1.819-1.819A1.819,1.819,0,0,0,8.67,8.245M18.978,19.765v2.425H2V19.765s0-4.851,8.489-4.851,8.489,4.851,8.489,4.851m-2.425,0c-.17-.946-1.613-2.425-6.064-2.425S4.51,18.929,4.425,19.765m14.492-4.851A6.452,6.452,0,0,1,21.4,19.765v2.425h4.851V19.765s0-4.4-7.349-4.851Z"
                          transform="translate(-2 -4)"
                        />
                      </svg>
                    </div>
                    <div className="setting-text">
                      <span>My Referral</span>
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="tab-content settingall-tabscontent"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <Profile />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-password"
                  role="tabpanel"
                  aria-labelledby="v-pills-referrals-tab"
                  tabindex="0"
                >
                  <ChangePassword />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                  <Notifications />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabindex="0"
                >
                  <Subscription />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-referrals"
                  role="tabpanel"
                  aria-labelledby="v-pills-referrals-tab"
                  tabindex="0"
                >
                  <MyReferrals />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
