import { Link } from "react-router-dom"
import "./searchItem.css"
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        {item && <><img src={item.photos[0]} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance} from center</span>
            <span className="siTaxiOp">Free Airport taxi</span>
            <span className="siSubtitle">
                Studio Appartment with air conditioning
            </span>
            <span className="siFeatures">{item.desc}</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later</span>
        </div>
        <div className="siDetails">
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">{item.cheapestPrice}</span>
                <span className="siTaxOp">Includes Tax and fees</span>
                <Link to={`/hotels/${item._id}`}>
                <button className="siCheckButton">See Availibility</button>
                </Link>
            </div>
        </div> </>}
    </div>
  )
}

export default SearchItem
