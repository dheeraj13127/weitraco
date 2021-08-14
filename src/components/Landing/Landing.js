import React from 'react'
import Footer from '../Footer/Footer'
import LandingNavbar from '../Navbar/LandingNavbar/LandingNavbar'
import LandingSubComponent from './LandingSubComponent/LandingSubComponent'

function Landing() {
    return (
        <div>
            <LandingNavbar/>
            <LandingSubComponent/>
            <Footer/>
        </div>
    )
}

export default Landing
