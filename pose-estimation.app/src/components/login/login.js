import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ( {setLoginUser} ) => {

    const history = useHistory()

    const [ user, setUser] = useState({
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

    const login = () => {
            //alert("posted")
        axios.post("http://localhost:9002/login", user)
        .then( res => {
            alert(res.data.message)
            setLoginUser(res.data.user)   //It will set the data of user from backend to app.js object.
            history.push("/")
        })
    }

    return(
        <div className="login">
            {/* {console.log("User", user)} */}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/signup")}>Signup</div>
        </div>
    )
}

export default Login