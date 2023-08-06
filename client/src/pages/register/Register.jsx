import { useContext, useState } from "react";
import "./register.css"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [credentials,setCredentials]=useState({
        email:undefined,
        username:undefined,
        password:undefined,
    });

    const{loading,error,dispatch}=useContext(AuthContext);

    const navigate=useNavigate();

    const handleChange=(e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick=async e=>{
        e.preventDefault()
        dispatch({type:"LOGIN_SUCCESS"})
        try{
            const res=axios.post("/auth/register",credentials);
            dispatch({type:"USER CREATED",payload:res.data});
            navigate("/")
        }
        catch(err){
            dispatch({type:"REGISTRATION FAILED",payload:err.response.data});
        }
    };

  return <div className="login">
      <div className="lContainer">
        <h1>Hello</h1>
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"></input>
        <input type="text" placeholder="email" id="email" onChange={handleChange} className="lInput"></input>
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"></input>
        <button onClick={handleClick} className="lButton">Login</button>
         {/* {error && <span>{error.message}</span>}  */}
      </div>
    </div>
  
}

export default Register
