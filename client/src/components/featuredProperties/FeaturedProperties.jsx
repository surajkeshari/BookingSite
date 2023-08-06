import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css"

const FeaturedProperties = () => {

  const {data,error,loading}=useFetch("/hotels?featured=true");
  return (
    <div className="fp">
      {loading?"Loading Please wait":<>
   {data.map((item)=>(
   <div className="fpItem" key={item._id}>
      <img src={item.photos[0]} alt="" className="fpImg" />
      <span className="fpName">{item.name}</span>
      <span className="fpCity">{item.city}</span>
      <span className="fpPrice">Starting From Rs.{item.cheapestPrice}</span>
    {item.rating &&  <div className="fpRating">
        <button>{item.rating}</button>
        <span>Excellent</span>
      </div>}
      </div>
      ) )}
      </>}


    </div>
  )
}

export default FeaturedProperties
