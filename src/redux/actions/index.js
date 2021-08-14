import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications'
import {auth} from '../../firebase/Firebase'
import firebase from 'firebase';
import {SIGNIN_WITH_GOOGLE} from '../constants/constants'


export const signInUser=(history)=>async(dispatch,getState)=>{
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res=>{
        dispatch({
            type:SIGNIN_WITH_GOOGLE,
            payload:res
          })
          console.log(res)
          localStorage.setItem("userEmail",res.additionalUserInfo.profile.email)
          NotificationManager.success("SignIn Successfull", '', 2000)
          setTimeout(()=>{
            history.push('/dashboard')
          },2000)
    })
  }
  export const signOutUser=(history)=>async(dispatch,getState)=>{
        auth.signOut()
          localStorage.setItem("userEmail","")
          setTimeout(()=>{
            history.push('/')
          },2000)
  
  }