import React from "react";
import "../css/Navbar.css";
import { auth } from "../../../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { FaWeight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../../redux/actions";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
function DashboardNavbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const signOutGoogle = () => {
    dispatch(signOutUser(history));
  };
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            <h4>
              {" "}
              Wei<span className="brandLogo">trac</span>&nbsp;&nbsp;
              <FaWeight />
            </h4>
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
                <a className="nav-link text-light" href="/dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/dashboard/newWeight">
                Add Weight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/dashboard/bmi">
              BMI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/dashboard/stats">
                 View Stats
                </a>
              </li>
             
            </ul>
            <div className="d-flex">
                {
                    user&&(
                        <button type="button" className="btn profileBtn">
                         <span className="badge"><img src={user.photoURL} alt="profile" className="profilePhoto" /></span><span className="profileName">{user&&user.displayName}</span>
                      </button>
                    )
                }
            
              <button className="btn btnLandingNavbar1" onClick={signOutGoogle}>
                <FcGoogle />
                &nbsp; Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <NotificationContainer />
    </div>
  );
}

export default DashboardNavbar;
