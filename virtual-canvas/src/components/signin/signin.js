import React, { useState } from "react"
import "./signin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import signui from "../assets/signui.png"
import { FaLock } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import video from "../assets/virtualcanvas.mp4";
// import { GoogleLogin } from "react-google-login";

// const client_id = "143637741162-81lmqf3jfndn28ejnglndlrr4f3n1tcl.apps.googleusercontent.com"

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
            history.push("/homepage")
        })
    }

    // const onSuccess = (res) => {
    //     console.log("LOGIN SUCESSFUL! Current user: ", res.profileObj);
    //     history.push("/homepage")
    // }

    // const onFailure = (res) => {
    //     console.log("LOGIN FAILED!", res);
    // }

    return(
        <div className="container">
            <div className="leftside">
            <video src={video} autoPlay loop muted className="video"/>
            </div>
        <div className="login ms-auto">
            {/* {console.log("User", user)} */}
            <img src={signui} alt="Signui"/>
            
            <h1>LOGIN</h1>

            <div className="signinfield">
                <AiFillMail/>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"></input>
            </div>
            
            <div className="signinfield">
                <FaLock/>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"></input>
            </div>
            <a>Forgot Password?</a>
            <div className="button-container">
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                {/* <div id="signInButton">
                    <GoogleLogin
                        clientId={client_id}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single-host-origin'}
                        isSignedIn={true}
                    />
                </div> */}
                <div className="button" onClick={() => history.push("/signup")}>Signup</div>
            </div>
        </div>
        </div>
    )
}

export default Login