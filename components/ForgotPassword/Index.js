import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { withAuth } from "../Utils/Functions";
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";


export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const router = useRouter();

    async function sendEmailCodeFn(data) {
      const query = "sendCode";
      console.log(data,'email data')
      const response = await withAuth(data, query);
      console.log(response, "res2");

      if (response?.Error) {
        toast.error("Something went wrong ! Please try again");
        console.log("error");
      } else {
        router.push("/forgotPassword/emailVerification");
      }
    }

  async function submitHandlerFn(e) {
    e.preventDefault();
    localStorage.setItem('email', email)
    const data = {
      email: email
    }
    sendEmailCodeFn(data)
    
  }
  return (
    <div>
      <ToastContainer/>
      <section className="forgotpassword">
        <div className="forgotpassword-box">
          <div className="forgotpassword-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="forgotpassword-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="forgotpassword-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="forgotpassword-right">
              <form onSubmit={(e)=> submitHandlerFn(e)}>
            <div className="container">
              <div className="forgotpassword-content">
                <h2>Forgot Password?</h2>
                <p>Enter your registered email address</p>
                <div className="mb-3" id="forgotpassword-input">
                  <input
                      type="email"
                      required
                    className="form-control"
                      placeholder="Enter email address"
                      onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
                <div className="forgotpassword-button">
                  <button type="submit" className="forgotpassword-a">
                    Continue
                  </button>
                </div>
                <div className="forgotpassword-close">
                    {/* <button> */}
                    <Link href='/'>
                    <img src="/img/close-icon.png" alt="" />
                    </Link>
                  {/* </button> */}
                </div>
                </div>
            </div>
                </form>
          </div>
        </div>
      </section>
    </div>
  );
}
