import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Aos from "aos";
import "aos/dist/aos.css";
import Homepage from './components/homepage/homepage';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import Introduction from './components/introduction/introduction';
import Canvas from './components/canvas/canvas';
// import Footer from './components/footer/footer';
import { Switch, Route } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
// import {gapi} from 'gapi-script';

// const client_id = "143637741162-81lmqf3jfndn28ejnglndlrr4f3n1tcl.apps.googleusercontent.com";

function App() {

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       client_id: client_id,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // })

  // var accessToken = gapi.auth.getToken().access_token;

  const [ user, setLoginUser] = useState({})

  return (
    
    <div className="App">

      {/* <Router> */}

        <Navbar />

        <Switch>

          <Route exact path="/">
            <Introduction/>
          </Route>

          <Route path='/homepage'>    
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Signin setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route path='/signin'>
            <Signin setLoginUser={setLoginUser}/>
          </Route>

          <Route path='/signup'>
            <Signup/>
          </Route>

          <Route path="/canvas">
            <Canvas/>
          </Route>

        </Switch>

      {/* </Router>  */}

    </div>

  );
}

export default App;


















