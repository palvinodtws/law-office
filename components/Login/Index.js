import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { signIn } from "next-auth/react";
import supabase from "../Utils/SupabaseClient";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function loginUser() {
    try {
      const response = await axios.post("/api/login/loginUser", {
        data: formData,
      });
      console.log(response, "register response");
    } catch (error) {
      console.log(error);
    }
  }

  async function submitHandlerFn(e) {
    e.preventDefault();

    console.log(formData, 'formData')

    const res = await signIn("credentials", {
      formData
    });

    if (res?.error) {
      setLoading(false);
      const ErrMsg = res?.error?.slice(-3);
      if (ErrMsg == 400) {
        toast.error("Invalid Password");

        return;
      }

      if (ErrMsg == "401") {
        toast.error("User doesn't Exist");
        return;
      }
      toast.error("Something went wrong! Please try again");
    }

    if (!res?.error) {
      toast.success("Logged In...");
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard/mainPage";
      }, 1000);
    }


    // loginUser();
  }

  async function loginUserFn(e) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'test111@yopmail.com',
    })

    console.log(data, 'data')

    console.log(error, 'error')
  }

  async function signInWithGoogle(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      // options: {
      //     // redirectTo: getURL() // function to get your URL
      // }
    })
    console.log(data, '<--------signInWithGoogle data')
    console.log(error, '<--------signInWithGoogle error')
  }

  async function signInWithApple(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      // options: {
      //     // redirectTo: getURL() // function to get your URL
      // }
    })
  }


  return (
    <div>
      <section className="login-law">
        <div className="login-box">
          <div className="login-left">
            <img src="/img/main-profile.png" alt="" />
            <div className="login-lower">
              <h3>Welcome to the</h3>
              <h2>My Law Office</h2>
            </div>
            <div className="login-copyright">
              <span>Copyright ©2023</span>
            </div>
          </div>
          <div className="login-right">
            <div className="container">
              <div className="loginright-content">
                <div className="loginright-header">
                  <h2>WELCOME BACK</h2>
                  <h4>LOGIN TO YOUR ACCOUNT</h4>
                  <button onClick={loginUserFn} >submit</button>
                </div>
                <div>
                  <button
                    className="btn btn-primary login-button"
                    onClick={signInWithGoogle} >
                    {" "}
                    <img src="/img/google-icon.png" alt="" />
                    Sign In with Google
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-primary login-button"
                    onClick={signInWithApple} >
                    {" "}
                    <img src="/img/apple-icon.png" alt="" />
                    Sign In with Apple
                  </button>
                </div>
                <div>


                  <h3>or</h3>
                </div>
                <div className="loginright-lower">
                  <form onSubmit={(e) => submitHandlerFn(e)}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control login-input"
                        id="exampleInputEmail1"
                        placeholder="Email/ Mobile"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control login-input"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="login-remb">
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input login-check"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="login-forgot">
                        <Link href="/forgotPassword" className="login-a">
                          Forgot Password
                        </Link>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary login-button"
                    >
                      {" "}
                      <img src="/img/login-icon.png" alt="" />
                      {loading ? 'Loading...' : 'Login'}
                    </button>

                    <div className="login-newuser">
                      <span>Are you a new user ?</span>
                      <button className="login-register">
                        <Link href="/registration" className="loginregister-a">
                          Register
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
