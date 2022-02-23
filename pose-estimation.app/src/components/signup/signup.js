import React, { useState } from "react"
import "./signup.css"
import axios from "axios"   //for calling APIs
import { useHistory } from "react-router-dom"

const Signup = () => {

    const history = useHistory()

    //user object which will automatically update the variables on changes.
    const [ user, setUser ] = useState({
        // name: "",
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
        const { email, password } = user   //the user object to extract the details
        if(email && password){
            //alert("posted")
            axios.post("http://localhost:9002/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })
        }
        else{
            alert("invalid input")
        }
    }

    return(
        <div className="signup">
            {console.log("User", user)}
            <h1>SIGN UP</h1>
            {/* <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange }></input> */}
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={ handleChange }></input>
            <div className="button" onClick={signup}>Signup</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Signup

//{useState} to manage the state of variables and values