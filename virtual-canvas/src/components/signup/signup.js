import React, { useState } from "react"
import "./signup.css"
import axios from "axios"   //for calling APIs
import { useHistory } from "react-router-dom"
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import signui from "../assets/signui.png";
import video from "../assets/virtualcanvas.mp4";

const Signup = () => {

    const history = useHistory()

    //user object which will automatically update the variables on changes.
    const [ user, setUser ] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,    //This is Spread Operator which will update the value of variable updated and will keep the value of other variables same and will keep them with updated one.
            [name]: value   //using this value will be changed.
        })
    }

    //function of onClick provoking
    const signup = () => {
        const { username, email, password } = user   //the user object to extract the details
        if(email && password){
            //alert("posted")
            axios.post("http://localhost:9002/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/homepage")
            })
        }
        else{
            alert("invalid input")
        }
    }

    return(
        <div className="container">
            <div className="leftside">
                <video src={video} autoPlay loop muted className="video"/>
            </div>
            <div className="signup ms-auto">
                {console.log("User", user)}
                <img src={signui} alt="Signui"/>
                <h1 className="justify-content-center align-text-center pt-10"><strong>WELCOME</strong></h1>
                
                <div className="input-flied">
                <FaUser/>
                <input type="text" name="name" value={user.name} placeholder="Username" onChange={ handleChange }></input> 
                </div>
            
                
                {/* <input type="text" name="username" placeholder="Username" onChange={ handleChange }></input> */}
                <div className="input-flied">
                <AiFillMail/>
                <input type="text" name="email" value={user.email} placeholder="Email" onChange={ handleChange }></input>
                </div>

                <div className="input-flied">
                <FaLock/>
                <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
                </div>

                <label>
                    <input name="isRemember" type="checkbox"/> Remember Me
                </label>
                
                <div className="button-container mt-20">
                    <div className="button" onClick={signup}>Signup</div>
                    <div>or</div>
                    <div className="button" onClick={() => history.push("/login")}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Signup

//{useState} to manage the state of variables and values