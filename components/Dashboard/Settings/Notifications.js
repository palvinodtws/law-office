import React from "react";

export default function Notifications() {
  return (
    <div>
      <div className="notification-box">
        <h3>Notification Settings</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label notification-label">
            Email Notifications
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label notification-label">
            Text Message Notifications
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label notification-label">
            Default Notifications
          </label>
        </div>
      </div>
    </div>
  );
}
