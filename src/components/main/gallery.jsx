import React from "react";
import PhotoSlider from "react-gallery-slider";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

import Navbar from "../sub/navbar.jsx";

import Fugger from "../../img/Fugger.jpg";
import Fugger2 from "../../img/Fugger2.jpg";
import Jakob_Fugger_und_Sybille_Artzt from "../../img/Jakob_Fugger_und_Sybille_Artzt.jpg";
import Fugger3 from "../../img/Fugger3.jpg";
import emperor_karl_v_with_jakob_fugger from "../../img/emperor_karl_v_with_jakob_fugger.jpg";

export default class Gallery extends React.Component{
    render(){
        return(
            <section className="gallery-container">
                <Navbar/>
                <header className="welcome-header">Fugger paintings</header>
                <AwesomeSlider animation="foldOutAnimation" className = "slider-container">
                    <div className="slider-image"><img src={Fugger} alt=""/></div>
                    <div className="slider-image"><img src={Fugger2} alt=""/></div>
                    <div className="slider-image"><img src={Jakob_Fugger_und_Sybille_Artzt} alt=""/></div>
                    <div className="slider-image"><img src={Fugger3} alt=""/></div>
                    <div className="slider-image"><img src={emperor_karl_v_with_jakob_fugger} alt=""/></div>
                </AwesomeSlider>
            </section>
        );
    }
}