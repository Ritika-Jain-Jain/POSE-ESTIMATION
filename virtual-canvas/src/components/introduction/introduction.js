import React, { useEffect } from "react";
import video from "../assets/virtualcanvas.mp4";
import art1 from "../assets/art1.svg";
import tanvi from "../assets/tanvigupta.jpeg";
import ritika from "../assets/ritika.jpg"
import priyansh from "../assets/priyanshbhardwaj.jpeg";
import manav from "../assets/manavgandhi.jpeg";
import Aos from "aos";
import background from "../assets/background.jpg";

const Intro = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return(
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav-bg">
                    <div className="row-intro">
                        <div className="col-10 mx-auto d-flex">

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 sider-section-intro">
                                <h1><strong className="brand-name-intro me-auto">VIRTUAL CANVAS</strong></h1>
                                <p className="p-intro">Explore your creativity with the combination of art and technology</p> 
                                <div className="mt-3">
                                    <a href="/signup" className="get-started-intro">Get Started</a>
                                </div>
                            </div>

                            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 flex-column video-intro">
                                <video src={video} autoPlay loop muted />
                            </div>

                        </div>

                        {/* <hr/> */}
                        
                        <div className="steps-intro" data-aos="fade-up">
                            <p>Virtual Canvas Application is used for relieving the stress due to workload.</p>
                            <p><strong>Reach your creativity in 4 easy steps.</strong></p>
                        </div>
                        <div className="description-intro d-flex" data-aos="fade-up">
                            <p><strong className="heading-intro">Joinus by</strong><br/>
                                <span>SIGNING UP</span> using either <span>GET STARTED</span> or <span> SIGN UP </span> links.<br/>
                                <strong className="heading-intro">Select.. Click.. Create..</strong><br/>
                                You can create your art in two mode <span>Free Hand Painting<br/> Mode</span> and <span>Pattern Based Painting Mode.</span><br/>
                                <strong className="heading-intro">Choose your colours</strong><br/>
                                You can choose colour from <span>RGB Palette</span> and create some<br/> awesome piece of arts.<br/>
                                <strong className="heading-intro">Save the art</strong><br/>
                                You can save your art work in the gallery.
                            </p>
                            <img src={art1} alt="art1" className="art1-intro"></img>
                        </div>

                        <div className="developer-intro">
                            <h3>DEVELOPERS TEAM</h3>
                        </div>
                        
                        <div className="card-parent-intro d-flex align-item-center justify-content-center">
                            <div className="card" data-aos="fade-left">
                                <div className="card-body">
                                    <img src={tanvi} alt="tanvi" className="tanvi-intro align-item-center justify-content-center"/>
                                    <h5 className="card-title align-item-center justify-content-center">Tanvi Gupta</h5>
                                    <p className="card-text">I am working as Frontend Developer for <strong>Virtual Canvas.</strong> I am an enthusiastic learner and take challanges as opportunity to be creative.</p>
                                    <a href="https://in.linkedin.com/" className="btn btn-primary">Linkedin</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-left">
                                <div className="card-body">
                                    <img src={ritika} alt="ritika" className="ritika-intro align-item-center justify-content-center"/>
                                    <h5 className="card-title align-item-center justify-content-center">Ritika Jain</h5>
                                    <p className="card-text">I am working as a Frontend Developer for <strong>Virtual Canvas.</strong> I am interested in exploring the artistry of web world.</p>
                                    <a href="https://www.linkedin.com/in/ritika-jain-1b9974188/" className="btn btn-primary">Linkedin</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-right">
                                <div className="card-body">
                                    <img src={priyansh} alt="priyansh" className="priyansh-intro align-item-center justify-content-center"/>
                                    <h5 className="card-title align-item-center justify-content-center">Priyansh Bhardwaj</h5>
                                    <p className="card-text">I am working as Backend Developer for <strong>Virtual Canvas.</strong> I have a keen interest in the field of Machine Learning, Deep Learning, and AI.</p>
                                    <a href="https://www.linkedin.com/in/priyansh-bhardwaj-25964317a/" className="btn btn-primary">Linkedin</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-right">
                                <div className="card-body">
                                    <img src={manav} alt="manav" className="manav-intro align-item-center justify-content-center"/>
                                    <h5 className="card-title align-item-center justify-content-center">Manav Gandhi</h5>
                                    <p className="card-text">I am working as Backend Developer for <strong>Virtual Canvas.</strong> I am very keen to understand about the technical things and implement them.</p>
                                    <a href="https://www.linkedin.com/in/manav-gandhi-541913195/" className="btn btn-primary btn-card">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                </div>
                
            </section>
        </>
        // <div className='introduction'>      
    )
}

export default Intro;

