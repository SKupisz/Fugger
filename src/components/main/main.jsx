import React from "react";

import Entrance from "../sub/entrance.jsx";
import Timeline from "../sub/timeline.jsx";

import "../../css/main/main.scss";

export default class Main extends React.Component{
    render(){
        return(
            <section className="main-container">
                <header className="welcome-header">Jacob Fugger</header>
                <Entrance/>
                <Timeline/>
            </section>
        );
    }
}