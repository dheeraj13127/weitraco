import React from 'react'
import DashboardNavbar from '../../../../Navbar/DashboardNavbar/DashboardNavbar'
import './css/StatsEditForm.css'
import { auth, firestore } from "../../../../../firebase/Firebase";
import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
  import {useHistory,useParams} from 'react-router-dom'
  import "react-notifications/lib/notifications.css";
import { useState } from 'react';
import Footer from '../../../../Footer/Footer';
function StatsEditForm() {
    const history=useHistory()
    const {id}=useParams()
    const weightRef = firestore.collection(
        `users/${auth.currentUser && auth.currentUser.uid}/weights`
      );
    
    const [newWeight,setNewWeight]=useState("")
    const onWeightChange=(e)=>{
        setNewWeight(e.target.value)
    }
    const onFormSubmit=(e)=>{
        e.preventDefault()
        if(newWeight===""){
            NotificationManager.error("Please enter new weight", '', 2000)
        }
        else{
            weightRef.doc(id).set({weight:newWeight},{merge:true})
            setTimeout(()=>{
                history.push('/dashboard/stats')
            },2000)
        }
    }

    return (
        <div>
           <DashboardNavbar/>
           <div className="container statsEditFormContainer">
            <div className="row p-3">
            <div className="col-12 col-lg-6 col-md-6 bg-dark editCol p-3 offset-md-3">
            <div className="formContainer">
                <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="New Weight"
                  value={newWeight}
                  onChange={onWeightChange}
                  aria-describedby="addon-wrapping"
                />
                <span className="input-group-text newWeightUnit">kg</span>
              </div>
              <div className="text-center mt-4">
                <button className="newWeightBtn btn">
                 Update
                </button>
              </div>
                </form>
            </div>
            </div>
            </div>
           </div>
           <Footer/>
           <NotificationContainer/>
        </div>
    )
}

export default StatsEditForm
