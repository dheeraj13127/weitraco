import React from "react";
import DashboardNavbar from "../../../Navbar/DashboardNavbar/DashboardNavbar";
import "./css/Stats.css";
import Footer from "../../../Footer/Footer";
import { auth, firestore } from "../../../../firebase/Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {useHistory} from 'react-router-dom'
import "react-notifications/lib/notifications.css";
function Stats() {
const history=useHistory()
  const weightRef = firestore.collection(
    `users/${auth.currentUser && auth.currentUser.uid}/weights`
  );
  const [weights] = useCollectionData(weightRef.orderBy("createdAt","desc"), {
    idField: "id",
  });

  const setWeight=(id)=>{
    history.push(`/dashboard/stats/${id}`)
  }
  const deleteWeight=(id)=>{
    weightRef.doc(id).delete()
    NotificationManager.success("Deleted", '', 2000)
  }
  return (
    <div>
      <DashboardNavbar />
      <div className="container statsContainer">
        {weights ? (
            
          weights.map((wei, index) => {
              
            return (
                
              <div className="row p-2" key={index}>
                <div className="col-6 col-lg-4 col-md-4 bg-dark p-3 mt-3 offset-md-3">
                  <button type="button" className="btn btn-light px-4">
                    {wei.weight} <span className="badge statsUnit">kg</span>
                  </button>
                  <p className="text-left mt-3 text-light">
                  {wei.createdAt.toDate().toString().slice(16, 21)}&nbsp;,{wei.createdAt.toDate().toISOString().slice(0, 10).split("-").reverse().join("-")}
                  </p>
                </div>
                <div className="col-6 col-lg-2 col-md-3 bg-dark p-3 mt-3">
                  <div>
                      <button className="btn editBtn" onClick={()=>setWeight(wei.id)}><MdEdit className="editIcon"/></button>
                      <button className="btn deleteBtn" onClick={()=>deleteWeight(wei.id)}><MdDelete className="deleteIcon"/></button>
                   
                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <div className=" mt-3">
            <div className="text-center mt-3">
              <p className="mt-2">Just a moment fetching your data !</p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
      <NotificationContainer/>
    </div>
  );
}

export default Stats;
