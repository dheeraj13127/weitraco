import React from "react";
import DashboardNavbar from "../../../Navbar/DashboardNavbar/DashboardNavbar";
import Footer from "../../../Footer/Footer";
import weight1 from "../../images/weight1.jpeg";
import "./css/NewWeight.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import firebase,{ auth, firestore,functions } from "../../../../firebase/Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

function NewWeight() {
  const [weight, setWeight] = useState("");
  const weightRef = firestore.collection(
    `users/${auth.currentUser && auth.currentUser.uid}/weights`
  );
  const [weights] = useCollectionData(weightRef.orderBy("createdAt"),{idField:"id"});
  const onWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    weightRef.add({
      weight: weight,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    NotificationManager.success("Weight Added", "", 2000);
    setWeight("");
  };


  return (
    <div>
      <DashboardNavbar />
      <div className="container newWeightContainer">
        <div className="row p-3">
          <div className="col-12 col-lg-4 col-md-4 p-3 bg-dark text-center offset-md-2">
            <img src={weight1} alt="" className="responsive-img newWeightImg" />
          </div>
          <div className="col-12 col-lg-4 col-md-4 p-3 bg-dark text-center">
            <form className="newWeightForm p-3" onSubmit={onFormSubmit}>
              <div className="input-group mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Weight"
                  value={weight}
                  onChange={onWeightChange}
                  aria-describedby="addon-wrapping"
                />
                <span className="input-group-text newWeightUnit">kg</span>
              </div>
              <div className="text-center mt-4">
                <button className=" newWeightBtn bg-dark">
                  <IoMdAddCircle className="newWeightIcon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <NotificationContainer />
    </div>
  );
}

export default NewWeight;
