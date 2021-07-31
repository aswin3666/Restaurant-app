import React, { useState,useEffect } from "react";
import {Button} from "react-bootstrap"
import Datas  from '../Data/restaurants.json'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { location } from "../Data/Ourlocation";
import {useHistory} from 'react-router-dom'
import './css/Map.css'

export default function Location() {
  const [hotels, setHotels] = useState([])
  const [location1, setLocation1] = useState(0)
  const [location2, setLocation2] = useState(0)
  const history = useHistory()

  var latitude1=[]
  var latitude2=[]
  var longtitude1=[]
  var longtitude2=[]
  var Start=[]
  var End=[]
  
  
  useEffect(() => {
    setHotels(Datas.restaurants)
}, [])

function distance(){
  latitude1.push(location1.lat1)
  longtitude1.push(location1.long1)
  latitude2.push(location2.latlng.lat)
  longtitude2.push(location2.latlng.lng)
  Start.push(location1.name)
  End.push(location2.name)
  console.log(latitude1)
  console.log(latitude2)
  console.log(longtitude1)
  console.log(longtitude2)
  history.push({pathname:"/distances",sample:"hiii",latitude1:latitude1,latitude2:latitude2,longtitude1:longtitude1,longtitude2:longtitude2,Start:Start,End:End})
}



  return(
  <div className="search1">

<Autocomplete className="search11"
      id="combo-box-demo"
      options={location}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => setLocation1(value)} 
      renderInput={(params) => <TextField {...params} label="Enter Your Location" variant="outlined" />}
    />
    <Autocomplete className="search12"
      id="combo-box-demo"
      options={hotels}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => setLocation2(value)} 
      renderInput={(params) => <TextField {...params} label="Enter Restaurant Location" variant="outlined" />}
    />
    
    <Button className="search13" onClick={()=>distance()}>Search</Button>
  </div>
  );
}