import React from 'react'
import Navbarmain from '../Components/Navbar';
import Cards from '../Components/Cards';
import './css/Homepage.css'
import Location from '../Components/Map';


export default function Homepage() {
    return (
        <div>
    <Navbarmain/>
    <Location/>
    <div className="MainFirst">
    <Cards/>
    </div>
    <div className="foot1" style={{width:'100%',height:"30px",textAlign:"center",background:"gray"}}>
                <p>Find Your Best Restaurant</p>
    </div>
    </div>
    )
}
