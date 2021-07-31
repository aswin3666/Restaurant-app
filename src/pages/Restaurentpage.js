import React,{useEffect,useState} from 'react'
import Datas  from '../Data/restaurants.json'
import {useSelector} from 'react-redux'
import './css/Restaurantdetails.css'
import Navbar from '../Components/Navbar'
import {Button} from 'react-bootstrap'
import HalfRating from '../Components/HalfRating'
import {FaUserCircle} from 'react-icons/fa'

export default function Restaurentpage() {
    const id = useSelector(state => state.id.value)
    const [restaurant, setRestaurant] = useState(0)
    const [review, setReview] = useState([0])
    useEffect(() => {
        setRestaurant(Datas.restaurants[id])
        setReview(Datas.restaurants[id].reviews)
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="details">
                <div  className="details1">
              <img src={restaurant.photograph} alt="" />
              <h4 className="restname">{restaurant.name}</h4>   
              <Button  className="restbutton">Order Here</Button>
            </div>
           <div className="Workinghours">
               <h2>Workinghours</h2>
               <h3> Monday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Monday}</span></h3>
               <h3> Tuesday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Tuesday}</span></h3>
               <h3> Wednesday : <span style={{color:"red"}}> {restaurant && restaurant.operating_hours.Wednesday}</span></h3>
               <h3> Thursday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Thursday}</span></h3>
               <h3> Friday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Friday}</span></h3>
               <h3> Saturday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Saturday}</span></h3>
               <h3> Sunday : <span style={{color:"red"}}>{restaurant && restaurant.operating_hours.Sunday}</span></h3>
           </div>
           </div>
           <div className="mainsection">
               <h2>{restaurant.name}</h2>
               <h6>{restaurant.neighborhood}</h6>
               <h6>{restaurant.address }</h6>
               <h6>Cuisine Type : {restaurant.cuisine_type }</h6>
               <h5 className="ratinghead">Ratings & Reviews</h5>
               {review && review.map((obj,key)=>{
                   return(
                       <div>
                           <div className="ratingsection" ><FaUserCircle style={{marginTop:"6px"}}/> <div style={{width:"80px",marginLeft:"10px"}}> <p>{obj.name}</p></div> <div className="rateicon" >{obj.rating && <HalfRating  rate={obj.rating}/>}</div>  <Button className="ratingpoint">{obj.rating}</Button> <p className="commentdate">{obj.date}</p></div>
                           <p className="comment">{obj.comments}</p>
                           <div style={{height:"1px",width:"90%",backgroundColor:"green",marginTop:"92px"}}></div>
                       </div>
                       
                   )
               })}
            
           </div>
           <div className="foot2" style={{width:'100%',height:"30px",textAlign:"center",background:"gray"}}>
                <p>Find Your Best Restaurant</p>
            </div>
                   
        </div>
    )
}
