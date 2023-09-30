import React from "react";
import Link from "next/link";
import supabase from "../Utils/SupabaseClient";
import { useRouter } from "next/router";
export default function Navigation() {

  const router = useRouter()

  async function signOut(e) {
    e.preventDefault()
    const { data,error } = await supabase.auth.signOut()
    console.log(data,'data')
    console.log(error,'errror')
    window.location.reload()

  }



  return (
    <div>
      <section className="law__navi">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="nav-logo">
              <Link className="navbar-brand" href="index.html">
                My Law Office
              </Link>
            </div>
            <div className="right-nav" id="tabletsearch-bar">
              <img src="/img/notification.png" alt="" />
              <img src="/img/mail.png" alt="" />
              <img src="/img/admin.png" alt="" className="nav-admin" />
              <img src="/img/settings.png" alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse nav-content"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Masters
                  </Link>
                </li>
                <li className="nav-item" id="nav_item">
                  <Link className="nav-link " href="modal-form.html">
                    Date Awaited
                  </Link>
                  <span className="badge rounded-pill text-bg-danger">99</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="judge-form.html">
                    Forms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="judge-list.html">
                    Request
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="feedback.html'">
                    Feedback
                  </Link>
                </li>
              </ul>
              <div className="input-group" id="most-wanted">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find Case"
                />
                <span className="input-group-text " id="basic-addon2">
                  <img src="/img/search.png" alt="" />
                </span>
              </div>
              <div className="right-nav">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rightnav-text"
                    placeholder="Find Case"
                  />
                  <span
                    className="input-group-text rightnav-search"
                    id="basic-addon2"
                  >
                    <img src="/img/search.png" alt="" />
                  </span>
                </div>
                <img src="/img/notification.png" alt="" />
                <img src="/img/mail.png" alt="" />
                <img src="/img/admin.png" alt="" className="nav-admin" />
                {/* <select
                  className="form-select form-select-lg"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Admin</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select> */}
                <button onClick={signOut}>Logout</button>
                <Link href='/dashboard/settings'>
                <img src="/img/settings.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
