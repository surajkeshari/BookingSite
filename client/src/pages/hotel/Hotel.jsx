import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import {faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { Navigate, useLocation, useNavigate } from "react-router-dom" 
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"
import Reserve from "../../components/reserve/Reserve"

const Hotel = () => {
    const location=useLocation();
    const id=location.pathname.split("/")[2];
    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen]=useState(false);
    const [openModal, setOpenModal] = useState(false);

    const {data,loading,error} = useFetch(`/hotels/find/${id}`);
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();
    const {dates,options}=useContext(SearchContext);

    const MILLISECONDS_PER_DAY=1000*60*60*24;
    function dayDifference(date1,date2){
      const timeDiff=Math.abs(date2.getTime()-date1.getTime());
      const diffDays=Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
      return diffDays+1;
    }


    const days=dayDifference(dates[0].endDate,dates[0].startDate);

    const handleClick = () => {
      if (user) {
        setOpenModal(true);
      } else {
        navigate("/login");
      }
    };


  return (
    <div>
     <Navbar/>  
     <Header type="List"/>
    {loading?"loading": (<div className="hotelContainer">
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!!</button>
        <h1 className="hotelTitle">{data.name}</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>{data.address}</span>
        </div>
        <span className="hotelDistance">
          Excellent {data.distance}
        </span>
        <span className="hotelPriceHighlight">Book and Stays at the rate of {data.cheapestPrice} per night </span>
     
      <div className="hotelImages">
      {data.photos?.map(photo=>(
        <div className="hotelImgWrapper">
          <img src={photo.src} alt="" className="hotelImg" />
        </div>
      ))}
      </div>
      <div className="hotelDetails">
        <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">{data.title}</h1>
            <p className="hotelDesc">{data.desc}</p>
        </div>
        <div className="hotelDetailsPrice"> 
        <h1>Perfect for a {days} days stay for you</h1>
        <span>Located at Number One place</span>
        <h2>
          <b>Rs.{days*data.cheapestPrice*options.room}</b>({days} nights)
        </h2>
        <button onClick={handleClick}>Reserve or Book Now!!!</button>
        </div>
      </div>
     </div>
     <MailList/>
     <Footer/>
    </div>) }
    {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel
