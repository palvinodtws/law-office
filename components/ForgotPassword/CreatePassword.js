import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Utils/Functions";

export default function CreatePassword() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  async function submitHandlerFn(e) {
    e.preventDefault()
    setLoading(true)
    const email = localStorage.getItem('email')
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }

    createPasswordFn(data)
    
  }

  async function createPasswordFn(data) {
    const query = 'forgotPassword';
    const response = await withAuth(data, query);
    console.log(response,'createpassword')
    
    if (!response?.Error) {
      console.log(response?.Error)
      setLoading(false)
    } else {
      console.log('done')
      setLoading(false)
    }
  }

  return (
    <div>
      <ToastContainer/>
      <section className="createnew">
        <div className="createnew-box">
          <div className="createnew-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="createnew-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="createnew-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="createnew-right">
            <form onSubmit={(e)=> submitHandlerFn(e)}>
            <div className="container">
              <div className="createnew-content">
                <h2>Create New Password</h2>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                      placeholder="New password"
                      onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                      placeholder="Confirm new password"
                      onChange={(e)=> setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="createnew-button">
                    <button  disabled={loading} type="submit" className="Cnew_btn">{loading ? 'Loading...' : 'Save' }Save</button>
                </div>
              </div>
              <div className="createnew-newuser">
                <span>Are you a new member ?</span>
                <a href="signup.html" className="createnew-signin">
                  Sign Up
                </a>
              </div>
              </div>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}
