import useFetch from "../../hooks/useFetch.js"
import "./propertyList.css";

const PropertyList = () => {

    const {data,loading,error}=useFetch("/hotels/countByType");

    const images=[
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        "https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf61baeeea1dfe9.gif",
        "https://cf.bstatic.com/images/hotel/max1024x768/415/415304940.jpg",
        "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b611b-resorts-near-coimbatore.jpg?fit=1000%2C667&ssl=1",
    ]

  return (
    <div className="pList">
       {loading?("Loading please wait"):(
       <>
     {  data && images.map((img,i)=>(

    <div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type} </h2>
            </div>
        </div>
    ))}
        </>)}
      
    </div>
  )
}

export default PropertyList
