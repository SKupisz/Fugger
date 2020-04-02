import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import WelcomeSite from "./welcome.jsx";
import TimeLineContainer from "./timeLine.jsx";
import Gallery from "./gallery.jsx";
import Contact from "./contact.jsx";

import "../../css/main/main.scss";

export default class Main extends React.Component{
    render(){
        return(
            <Router>
            <section className="main-container">
                <Route exact path = "/" component = {WelcomeSite}/>
                <Route exact path = "/timeline" component = {TimeLineContainer}/>
                <Route exact path = "/gallery" component = {Gallery}/>
                <Route exact path = "/contact" component = {Contact}/>
            </section>
            </Router>
        );
    }
}