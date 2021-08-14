import React from "react";
import weight1 from "../images/weight1.jpeg";
import { FcGoogle } from "react-icons/fc";
import { RiArrowDownSLine } from "react-icons/ri";
import bmi from "../images/bmi.jpeg";
import "../css/landing.css";
import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {
  NotificationContainer,
  
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { signInUser } from "../../../redux/actions";

function LandingSubComponent() {
  const history=useHistory()
  const dispatch=useDispatch()
  const signInWithGoogle=()=>{
    dispatch(signInUser(history))
  }
  return (
    <div className="container-fluid landingSubComponentContainer">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6 text-center">
          <img
            src={weight1}
            alt=""
            className="img-fluid landingSubComponentImg1"
          />
        </div>
        <div className="col-12  col-lg-4 p-5">
          <h3 className="text-start landingSubComponentHeader">
            Importance of Weight
          </h3>
          <p className="text-start landingSubComponentTypography">
            Reaching and maintaining a healthy weight is important for overall
            health and can help you prevent and control many diseases and
            conditions. If you are overweight or obese, you are at higher risk
            of developing serious health problems, including heart disease, high
            blood pressure, type 2 diabetes, gallstones, breathing problems, and
            certain cancers. That is why maintaining a healthy weight is so
            important.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12  col-lg-12 bg-dark signInBox">
          <h5 className="text-center text-light">
            Wanna keep track of you weight ?
          </h5>
          <div className="text-center mt-5">
            <p>
              <RiArrowDownSLine className="text-light arrowIcon" />
            </p>
            <p>
              <RiArrowDownSLine className="text-light arrowIcon" />
            </p>
            <p>
              <RiArrowDownSLine className="text-light arrowIcon" />
            </p>
          </div>
          <div className="text-center">
            <button className="btn  signInBtn" onClick={signInWithGoogle}>
              <FcGoogle className="googleIcon" />
              &nbsp;Sign In
            </button>
          
          </div>
        </div>
      </div>
      <div className="row mt-5 landingSubRow">
        <div className="col-12 col-sm-12 col-lg-6 text-center">
          <img src={bmi} alt="" className="img-fluid landingSubComponentImg1" />
        </div>
        <div className="col-12  col-lg-4 p-5">
          <h3 className="text-end landingSubComponentHeader">
            Body Mass Index (BMI)
          </h3>
          <p className="text-end landingSubComponentTypography">
            BMI is one way of measuring whether a person’s weight is healthy. It
            takes both height and weight into account. However, it does not
            provide an accurate reflection of an individual’s body composition.
            Find out how to measure BMI in adults, children, and teens in this
            article.
          </p>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default LandingSubComponent;
