import { useContext } from "react";
import "./navbar.css";
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {

  const{user}=useContext(AuthContext);

  const navigate=useNavigate();
  const handleClick = async () => {
    navigate("/login");
};

const handleClick2 = async () => {
  navigate("/register");
};
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className="logo">Booking</span>
        </Link>
           {user? user.username:
           ( <div className="navitems">
                <button onClick={handleClick2} className="navButton">Register</button>
                <button onClick={handleClick} className="navButton">Login</button>
            </div>)
            }
      </div>
    </div>
  )
}

export default Navbar
