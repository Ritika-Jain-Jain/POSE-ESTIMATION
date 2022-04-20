import React from "react";
import {useState} from "react";
import "./homepage.css";
import Slider from "react-slick";
import pattern2 from "../assets/pattern2.png";
import pattern3 from "../assets/pattern3.png";
import pattern4 from "../assets/pattern4.png";
import pattern5 from "../assets/pattern5.png";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import palette from "../assets/RGB.jpeg";
import paletteoutput from "../assets/rgboutput.jpeg";
import canvasscreen from "../assets/canvasscreen.png";
import eraser from "../assets/eraser.png";
import clearscreen from "../assets/clearScreen.png";
import pattern from "../assets/pattern.png";
import save from "../assets/save.png";
import exit from "../assets/exit.png";
import {useHistory} from 'react-router-dom';

const Homepage = ({setLoginUser}) => {

    const history = useHistory()

    const images = [pattern2, pattern3, pattern4, pattern5, sample1, sample2]

    const [imageIndex, setImageIndex] = useState(0);

    const settings={
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setImageIndex(next),
    };
    
    return(
        
            <div classNameName="homepage">
                
                <button onClick={() => setLoginUser({})}>Logout</button>
            

            <header className="jumbotorn">
                <div className="row">
                    <div className="leftjumbo">
                        <h1 className="ms-0"> VIRTUAL CANVAS</h1>
                        <p className="leftp">Explore your creativity with the combinastion of art<br/> and technonlogy. With the help of hand gesture<br/> technique, you can paint on the provided canvas. </p>
                        <button type="btn " id="ABC " className="badge badge-pill btn-primary" onClick={() => history.push("/canvas")}>Try us Now!</button>
                    
                        <span className="thecarousel">
                            <Slider {...settings}>
                                {images.map((img, idx) => (
                                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                        <img src={img} alt={img}/>
                                    </div>
                                ))
                                }
                            </Slider>
                        </span>

                    </div>
                </div>
            </header>
        
        
            <br/>
            
            <div className="navbar1 ">
                <nav>
                    <ul>
                        <li><a href="#g">the canvas screen</a></li>
                        <li><a href="#h">finger posture</a></li>
                        <li><a href="#k">RGB colour palette</a></li>
                        <li><a href="#m">buttons</a></li>
                        <li><a href="#l">Sample viedo</a></li>
                    </ul>
                </nav>
            </div>
            <hr/>
            <br/>
            
            <div className="description row row-content align-items-center mt-10" id="g">
                <div className="d-block">
                    <div class="headpara d-flex col col-sm order-sm-first col-md">
                        <div className="me-auto heading col-12 col-sm-4 order-sm-last col-md-3 align-items-center text-align-center">
                            <h3><strong>THE CANVAS SCREEN</strong></h3><br/>
                        </div>
                        <div className="ms-auto paragraph media-body">
                            <p>
                                The virtual canvas screen is a digital interface which is used for painting.<br/> 
                                The interface provides a set of functionalities that user can leverage for a good experience.<br/> 
                                It can be used by both adult and children for artistry.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="canvaimg">
                        <img src={canvasscreen} alt="canvasscreen"/>
                    </div>
                </div>
            </div>

            <div className="description row-content align-items-center" id="h">
                <div class="ms-auto col-12 col-sm-4 col-md-3">
                    <h3><strong>USE OF FINGER</strong></h3><br/>
                </div>
                <div className="media-body me-auto paragraph">
                    <p>
                        Use of finger the The persone starting a somth he virtual canvas screen is a digital painting Web app its is used to drow to used a painting if your regading and childern is also used a free hand painting and drow to over creativity . Explor
                        your creativity with the combination of art and tecnonlogy.. this application uses computer vision for the Hand Gesture technique which is used for painting on the provied canvas . The desired paint color can be chosen according to give
                        RGB colour palettle. The canvas screen for the user will be supporated by the live streaming of the user in order to properly control their gesture.
                    </p>
                </div>
            </div>

            <div className="description row row-content align-items-center" id="k">
                <div class="col col-sm order-sm-first col-md">
                    <div className="media  d-flex align-self-center">
                        <div className="heading me-auto col-12 col-sm-4 order-sm-last col-md-3 align-items-center text-align-center">
                            <h3><strong>RGB COLOUR PALETTE</strong></h3><br/>
                        </div>
                        <div className="paragraph ms-auto media-body">
                            <p> 
                                The RGBB Colour Palette is made from 3 primary colour Red, Green and Blue. In this web app, RGB color palette is used to select any color and drawing.
                                <br/>Using this RGB colour ,user will choose their colour to be used 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rgbimg ms-auto ">
                    <img src={palette} alt="palette"/>
                    <img src={paletteoutput} alt="palette"/>
                </div>
            </div>
            <br/>

            <div className="description" id="m">
                <p>BUTTONS DESCRIPTION</p>
                <div className="card-parent-intro d-flex align-item-center justify-content-center">
                    <div className="card" data-aos="fade-left">
                        <div className="card-body">
                            <img src={eraser} alt="eraser" className="tanvi-intro align-item-center justify-content-center"/>
                            <h5 className="card-title align-item-center justify-content-center">Tanvi Gupta</h5>
                            <p className="card-text">I am working as Frontend Developer for <strong>Virtual Canvas.</strong> I am an enthusiastic learner and take challanges as opportunity to be creative.</p>
                            <a href="https://in.linkedin.com/" className="btn btn-primary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-left">
                        <div className="card-body">
                            <img src={clearscreen} alt="clearscreen" className="ritika-intro align-item-center justify-content-center"/>
                            <h5 className="card-title align-item-center justify-content-center">Ritika Jain</h5>
                            <p className="card-text">I am working as a Frontend Developer for <strong>Virtual Canvas.</strong> I am interested in exploring the artistry of web world.</p>
                            <a href="https://www.linkedin.com/in/ritika-jain-1b9974188/" className="btn btn-primary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <div className="card-body">
                            <img src={pattern} alt="pattern" className="priyansh-intro align-item-center justify-content-center"/>
                            <h5 className="card-title align-item-center justify-content-center">Priyansh Bhardwaj</h5>
                            <p className="card-text">I am working as Backend Developer for <strong>Virtual Canvas.</strong> I have a keen interest in the field of Machine Learning, Deep Learning, and AI.</p>
                            <a href="https://www.linkedin.com/in/priyansh-bhardwaj-25964317a/" className="btn btn-primary">Linkedin</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <div className="card-body">
                            <img src={save} alt="save" className="manav-intro align-item-center justify-content-center"/>
                            <h5 className="card-title align-item-center justify-content-center">Manav Gandhi</h5>
                            <p className="card-text">I am working as Backend Developer for <strong>Virtual Canvas.</strong> I am very keen to understand about the technical things and implement them.</p>
                            <a href="https://www.linkedin.com/in/manav-gandhi-541913195/" className="btn btn-primary btn-card">Linkedin</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <div className="card-body">
                            <img src={exit} alt="exit" className="manav-intro align-item-center justify-content-center"/>
                            <h5 className="card-title align-item-center justify-content-center">Manav Gandhi</h5>
                            <p className="card-text">I am working as Backend Developer for <strong>Virtual Canvas.</strong> I am very keen to understand about the technical things and implement them.</p>
                            <a href="https://www.linkedin.com/in/manav-gandhi-541913195/" className="btn btn-primary btn-card">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="description" id="l">
                <p>SAMPLE VIDEO</p>
                <video width="400" height="300" loop="true" autoplay="autoplay" muted></video>
            </div>
            </div>
    )
}

export default Homepage