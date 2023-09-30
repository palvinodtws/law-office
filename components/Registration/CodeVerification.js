import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { withAuth } from "../Utils/Functions";

export default function CodeVerification() {
  const [code, setCode] = useState({ code1: '', code2: '', code3: '', code4: '' });
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
   const num1 = useRef();
   const num2 = useRef();
   const num3 = useRef();
  const num4 = useRef();
  

  // async function verifyCodeFn(data) {
  //   try {
  //     const response = await axios.post('/api/registration/verifyCode',{data:data});
  //     console.log(response, 'verify code')
  //     localStorage.setItem('token',response.data.data.data)
  //     router.push('/dashboard')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function submitHandlerFn(e) {
    e.preventDefault();
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');
    const data = {
      otp: `${code?.code1}${code?.code2}${code?.code3}${code?.code4}`,
      mobile: phone,
      email: email,
    };
    console.log(data,'code')
    // verifyCodeFn(data)
    const query = 'verifymobile';
    const response = await withAuth(data, query);

       if (response?.Error) {
         setLoading(false);
         toast.error("Something went wrong! Please try again.");
         console.log("error");
       } else {
         setLoading(false);
         setTimeout(() => {
           router.push("/dashboard");
         }, [1000]);
       }
  }

   function handleChangeFn1(e) {
     setCode({...code,code1:e.target.value});
     num2.current.focus();
   }

   function handleChangeFn2(e) {
          setCode({ ...code, code2: e.target.value });

     num3.current.focus();
   }

   function handleChangeFn3(e) {
         setCode({ ...code, code3: e.target.value });

     num4.current.focus();
   }

   function handleChangeFn4(e) {
          setCode({ ...code, code4: e.target.value });

     //  num2.current.focus();
   }
   
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem('phone'));
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
  
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(59);
  };

  return (
    <div>
      <section className="verifycode">
        <div className="verifycode-box">
          <div className="verifycode-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="verifycode-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="verifycode-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="verifycode-right">
            <form onSubmit={(e) => submitHandlerFn(e)}>
              <div className="container">
                <div className="verifycode-content">
                  <h2>Verify Mobile Number</h2>
                  <p>Code sent to {phone}</p>

                  <div className="mb-3" id="verifycode-input">
                    <input
                      onChange={(e) => handleChangeFn1(e)}
                      ref={num1}
                      type="text"
                      maxLength="1"
                      className="form-control"
                    />
                    <input
                      onChange={(e) => handleChangeFn2(e)}
                      type="text"
                      ref={num2}
                      maxLength="1"
                      className="form-control"
                    />
                    <input
                      onChange={(e) => handleChangeFn3(e)}
                      type="text"
                      ref={num3}
                      maxLength="1"
                      className="form-control"
                    />
                    <input
                      onChange={(e) => handleChangeFn4(e)}
                      type="text"
                      ref={num4}
                      maxLength="1"
                      className="form-control"
                    />
                  </div>
                  <div className="verifycode-newuser">
                    {/* <span>Didn't receive code ?</span>
                    <span className="verifycode-signin">Request again</span> */}
                    {seconds > 0 || minutes > 0 ? (
                      <span>
                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}
                        :{seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                    ) : (
                      <span>Didn't receive code ?</span>
                    )}
                    <span
                      disabled={seconds > 0 || minutes > 0}
                      style={{
                        color: seconds > 0 || minutes > 0 ? "#999" : "#435AEE",
                      }}
                      onClick={resendOTP}
                      className="verifycode-signin"
                    >
                      Request again
                    </span>
                  </div>
                  <div className="verifycode-button">
                    <button className="verifycode-a">Continue</button>
                  </div>
                  <div className="verifycode-close">
                    <button>
                      <img src="/img/close-icon.png" alt="" />
                    </button>
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
