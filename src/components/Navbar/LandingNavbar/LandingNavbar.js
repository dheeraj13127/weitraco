import React from "react";
import "../css/Navbar.css";
import { FaWeight } from "react-icons/fa";
import {FcGoogle} from 'react-icons/fc'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { signInUser } from "../../../redux/actions";

function LandingNavbar() {
  const history=useHistory()
  const dispatch=useDispatch()
  const signInWithGoogle=()=>{
    dispatch(signInUser(history))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <h4> Wei<span className="brandLogo">trac</span>&nbsp;&nbsp;<FaWeight/></h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav p-2 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a className="btn btnLandingNavbar" onClick={signInWithGoogle}>
                <FcGoogle/>&nbsp;
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
      <NotificationContainer/>
    </div>
  );
}

export default LandingNavbar;
