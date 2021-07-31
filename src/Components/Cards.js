import {Card,Button} from 'react-bootstrap'
import Datas  from '../Data/restaurants.json'
import React, { useEffect, useState } from 'react'
import { update_id } from '../Redux/RestaurentidSlice'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './css/Cards.css'
function Cards() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [hotels, setHotels] = useState([])
  
  useEffect(() => {
    setHotels(Datas.restaurants)
}, [])

  const clicked = (id) => {
      dispatch(update_id({
        id: id
      }))
      history.push("/details")
  }
    return (
        <div>
            { hotels.map((obj,key)=>{
                return(
<Card className="Maincard">
    <div style={{display:"flex"}}>
  <div className="cardleft">
<img src={obj.photograph} alt="" />
  </div>
  <div className="cardright">
  <h4>{obj.name}</h4>
  <p>{obj.address}</p>
  <Button onClick={()=>clicked(obj.id)}>Click Here To View Details</Button>
  
  </div>
  </div>
</Card>
                )
            })
}          
        </div>
    )
}

export default Cards
