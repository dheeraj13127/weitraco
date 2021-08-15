import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
firebase.initializeApp(
    {
        apiKey: "AIzaSyDN5J0PqYx8Ql8jipFQpmBSRJ2fIp49KzI",
        authDomain: "weight-tracko.firebaseapp.com",
        projectId: "weight-tracko",
        storageBucket: "weight-tracko.appspot.com",
        messagingSenderId: "461137650461",
        appId: "1:461137650461:web:46c5296ea9d4dd5400f7f4"
      }
)
export const auth=firebase.auth()
export const firestore=firebase.firestore()


export default firebase