import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Utils/Functions";


export default function InfoText() {
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState();
  const router = useRouter();

  useEffect(() => {
    setEmail(localStorage.getItem('email'))
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  async function verifyUserFn(e) {
    e.preventDefault();
    setLoading(true)
    
    const data = {email: email}
    const query = 'checkverification'
    const response = await withAuth(data, query);
    console.log(response, 'verify user')
    
    if (response?.Error) {
      setLoading(false)
      toast.error("Please click on the link received.");
        console.log("error");
      } else {
      setLoading(false)
      toast.success('Verified successfully')
        setTimeout(() => {
          router.push("/registration/mobileVerification");
        }, [1000]);
      }
 
    
  }


  const resendOTP = () => {
    setMinutes(0);
    setSeconds(59);
  };
  return (
    <div>
      <ToastContainer/>
      <section className="verify">
        <div className="verify-box">
          <div className="verify-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="verify-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="verify-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="verify-right">
            <div className="container">
              <div className="verify-content">
                <h2>Verify Email</h2>
                <p>
                  A verification link has been sent to{" "}
                  <strong>{ email}</strong>
                </p>
                <p>Check your inbox/spam and click on the link received.</p>
                <div className="verify-a">
                  {seconds > 0 || minutes > 0 ? (
                    <p>
                      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : (
                    <p>Didn't recieve code?</p>
                  )}
                  <button
                    disabled={seconds > 0 || minutes > 0}
                    style={{
                      color: seconds > 0 || minutes > 0 ? "#999" : "#74777b",
                    }}
                    onClick={resendOTP}
                    className="resend-code"
                    type="submit"
                  >
                    Resend Code
                  </button>
                </div>

                <div className="infoNext-div">
                  <button disabled={loading} onClick={(e)=> verifyUserFn(e) } className="info-next" type="button">
                    {loading ? "Loading..." : "Next"}
                  </button>
                </div>
              </div>

              <div className="verify-newuser">
                <span>Already a Member ?</span>
                <a href="login.html" className="verify-signin">
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
