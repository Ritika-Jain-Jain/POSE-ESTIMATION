import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css";
import video from "../assets/virtualcanvas.mp4";
// import logo from '../assets/Logo.png';
import logo from '../assets/logo1.png';

const navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <video src={video} autoPlay loop muted className="video"/>
                </a>

                {/* <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                             
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/homepage">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/canvas">Canvas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signin">Signin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Signup</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default navbar