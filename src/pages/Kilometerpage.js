import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbarmain from '../Components/Navbar';
import {ImLocation} from 'react-icons/im'
import './css/Locations.css'
import { Button } from 'react-bootstrap';


function Dummy() {
    const [lat1, setLat1] = useState(0)
    const [lat2, setLat2] = useState(0)
    const [long1, setLong1] = useState(0)
    const [long2, setLong2] = useState(0)
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const location=useLocation()
    useEffect(() => {
        console.log(location.pathname)
        console.log(location.latitude1)
        setLat1(location.latitude1)
        setLat2(location.latitude2)
        setLong1(location.longtitude1)
        setLong2(location.longtitude2)
        setStart(location.Start)
        setEnd(location.End)
        

    }, [location])

    const distance1 = (late1,late2, lon1, lon2)=>{
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    late1 = late1 * Math.PI / 180;
    late2 = late2 * Math.PI / 180;
    // Haversine formula 
    let dlon = lon2 - lon1; 
    let dlat = late2 - late1;
    let a = Math.pow(Math.sin(dlat / 2), 2)+ Math.cos(late1) * Math.cos(late2)* Math.pow(Math.sin(dlon / 2),2);
    let c = 2 * Math.asin(Math.sqrt(a));
    // Radius of earth in kilometers. Use 3956 
    let r = 6371;
    return(c * r);
    }
    return (
        <div>
            <Navbarmain/>
            <Button className="locationbtn">{Math.floor(distance1(lat1,lat2,long1,long2))} Kilometers</Button>
            <div className="location1" style={{display:"flex"}}>
            <ImLocation className="icon1" style={{color:"blue",fontSize:"35px"}}/><h3 className="icon1n">({start})</h3>
            <ImLocation className="icon2" style={{fontSize:"35px"}}/> <h3 className="icon2n">({end})</h3>
            </div>
            <div className="foot" style={{width:'100%',height:"30px",textAlign:"center",background:"gray"}}>
                <p>Find Your Best Restaurant</p>
            </div>
        </div>
    )
}

export default Dummy;
