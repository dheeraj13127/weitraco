import React from 'react'
import './css/Footer.css'
import { FaWeight } from "react-icons/fa";
function Footer() {
  return (
    <div>
       <footer>
   <div className="container-fluid bg-dark fixed-bottom footerContainer text-light mt-5 ">
     <div className="row ">
       <div className="col-12">
         
         <div className="text-center mt-4">
          <h6 style={{fontWeight:"bolder"}}>&copy; &nbsp;Copyrights &nbsp; Wei<span className="brandLogo">trac</span>&nbsp;&nbsp;<FaWeight/></h6>
         </div>
       </div>
     </div>
   </div>

   </footer>
    </div>
  )
}

export default Footer