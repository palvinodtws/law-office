import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withAuth } from "../Utils/Functions";

export default function MobileVerification() {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter();


 
  
  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true)
    localStorage.setItem('phone', phone)
    const data = {
      mobile: phone,
      email:email,
    }
    console.log(data,'data')
    const query = 'addingmobile'
    const response = await withAuth(data, query);
    console.log(response)

    if (response?.Error) {
      setLoading(false);
      toast.error("Something went wrong! Please try again.");
      console.log("error");
    } else {
      setLoading(false);
      setTimeout(() => {
        router.push("/registration/codeVerification");
      }, [1000]);
    }
    
  }

  useEffect(() => {
    setPhone(localStorage.getItem('phone'))
    setEmail(localStorage.getItem('email'))
  },[])

  return (
    <div>
      <ToastContainer/>
      <section className="verify-mobile">
        <div className="verifymobile-box">
          <div className="verifymobile-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="verifymobile-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="verifymobile-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="verifymobile-right">
              <form onSubmit={(e)=> submitHandler(e)}>
            <div className="container">
              <div className="verifymobile-content">
                <h2>Verify Mobile Number</h2>
                <p>You'll receive a 4 digit code to verify your mobile.</p>
                <div className="mb-3">
                  <input
                    type="number"
                      className="form-control"
                      required
                      placeholder="Enter mobile number"
                      defaultValue={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                  />
                </div>
                <div className="verifymobile-button">
                  <button disabled={loading} className="verifymobile-a">
                     {loading ? 'Loading' : "Continue"}
                  </button>
                </div>
                <div className="verify-close">
                  <Link href='' >
                    <img src="/img/close-icon.png" alt="" />
                  </Link>
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
