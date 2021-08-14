import React from "react";
import "../../css/Dashboard.css";
import addweight from "../../images/addweight.jpeg";
import stats1 from "../../images/stats1.jpeg";
import diet from "../../images/diet.jpeg";
import bmi from "../../images/bmi.jpeg";
import HashLoader from "react-spinners/HashLoader";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Footer from '../../../Footer/Footer'
function DashboardLanding() {
  const history = useHistory();
  const [auth, setAuth] = useState(true);
  const onHandleClick = (data) => {
    setAuth(!auth);
    setTimeout(()=>{
      history.push(`/dashboard/${data}`)
    },3000)
  };
  return (
    <div>
      {auth === true ? (
        <>
          <div className="container dashboardLandingContainer">
            <div className="row p-5">
              <div className="col-12 col-lg-3 col-md-3 offset-md-2 dashboardLandingColumn bg-dark">
                <div className="text-center">
                  <img
                    src={addweight}
                    alt=""
                    className="responsive-img dashboardLandingImages"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-5 dashboardLandingColumn bg-dark">
                <div className="text-center mt-3">
                  <h3 className="text-center text-light">Add Your Weight</h3>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn dashboardLandingBtn"
                    onClick={()=>onHandleClick("newWeight")}
                  >
                    Lets go
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-5 mt-3">
              <div className="col-12 col-lg-3 col-md-3 offset-md-2 dashboardLandingColumn bg-dark">
                <div className="text-center">
                  <img
                    src={bmi}
                    alt=""
                    className="responsive-img dashboardLandingImages"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-5 dashboardLandingColumn bg-dark">
                <div className="text-center mt-3">
                  <h3 className="text-center text-light">Checkout your BMI</h3>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn dashboardLandingBtn"
                    onClick={()=>onHandleClick("bmi")}
                  >
                    Lets go
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-5 mt-3">
              <div className="col-12 col-lg-3 col-md-3 offset-md-2 dashboardLandingColumn bg-dark">
                <div className="text-center">
                  <img
                    src={stats1}
                    alt=""
                    className="responsive-img dashboardLandingImages"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-5 dashboardLandingColumn bg-dark">
                <div className="text-center mt-3">
                  <h3 className="text-center text-light">
                    View Your Latest Stats
                  </h3>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn dashboardLandingBtn"
                    onClick={()=>onHandleClick("stats")}
                  >
                    Lets go
                  </button>
                </div>
              </div>
            </div>
          
          
          </div>
          <Footer/>
        </>
      ) : (
        <div className="text-center loader">
          <HashLoader color="#111111" loading={true} size={100} />
        </div>
      )}
    </div>
  );
}

export default DashboardLanding;
