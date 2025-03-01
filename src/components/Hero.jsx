import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"

import { motion } from "framer-motion";
import OurServices from './OurServices';
import ItDigital from './ItDigital';
import AGlimpse from './AGlimpse';
import CardCrousal from './CardCrousal';
import StartJourney from './StartJourney';

const Hero = () => {
    return (
        <>
            <section className=" " style={{ marginTop: "10rem" }}>
                <div className="container  d-flex flex-column  flex-md-row justify-content-center align-items-center overflow-hidden position-relative text-center">

                    {/* Left Floating Polygon Image */}
                    <img
                        src="public/img/Polygon-hero-right.svg (1).png"
                        className="smallicon position-absolute top-0 start-0 d-none d-md-block"
                        alt="Polygon Hero Right"
                    />

                    {/* Hero Content */}
                    <div className="hero d-flex flex-column justify-content-center align-items-center text-center position-relative px-3">

                        <h1 className="fw-bold heading1 display-4 display-md-3 ">
                            <i className=''>Let’s Bring Your</i> <br />
                            <span className="heading text-primary">
                                <img src="public/img/Ideas to life.png" className="img-fluid" alt="Ideas to Life" />
                            </span>
                        </h1>

                        <p className="mt-3 lead">
                            With every single one of our clients, we bring forth a deep <br className="d-none d-md-block" />
                            passion for creative problem solving — which is what we deliver.
                        </p>

                        <button type="button" className=" btn2 text-white rounded-lg mt-3  py-4">
                            Get in Touch
                        </button>

                        {/* Right Floating Polygon Image */}
                        <img
                            src="public/img/Polygon hero - left.png"
                            className="position-absolute bottom-0 end-0 img-fluid d-none d-md-block"
                            alt="Polygon Hero Left"
                        />
                    </div>
                </div>

            </section>


            

           
            



           









        </>
    )
}

export default Hero
