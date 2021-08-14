import React from "react";
import { useState } from "react";
import Footer from "../../../Footer/Footer";
import DashboardNavbar from "../../../Navbar/DashboardNavbar/DashboardNavbar";
import bmi2 from "../../images/bmi2.jpeg";
import "./css/Bmi.css";
function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [auth, setAuth] = useState(false);
  const [bmi, setBmi] = useState("");
  const onFormSubmit = (e) => {
      e.preventDefault()
      const hgt=height/100
      const res=(weight/(hgt*hgt)).toFixed(3)
      setBmi(res)
      setAuth(true)
      setHeight("")
      setWeight("")
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="container bmiContainer">
        <div className="row p-3">
          <div className="col-12 col-lg-4 col-md-4 p-3 bg-dark text-center offset-md-2">
            <img src={bmi2} alt="" className="responsive-img bmiImg" />
          </div>
          <div className="col-12 col-lg-4 col-md-4 p-3 bg-dark text-center">
            <form className="bmiForm p-3" onSubmit={onFormSubmit}>
              <div className="input-group mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  aria-describedby="addon-wrapping"
                />
                <span className="input-group-text bmiUnit">kg</span>
              </div>
              <div className="input-group mb-3 mt-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  aria-describedby="addon-wrapping"
                />
                <span className="input-group-text bmiUnit">m</span>
              </div>
              <div className="text-center mt-4">
                <button className="bmiBtn btn">Check BMI</button>
              </div>
            </form>
          </div>
          {auth && (
            <div className="bg-dark col-12 col-lg-8 offset-md-2  p-3 bg-dark text-center">
              <button className="btn bmiTotalBtn">Your BMI&nbsp;{bmi}</button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Bmi;
