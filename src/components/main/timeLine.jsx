import React from "react";

import Timeline from "../sub/timeline.jsx";
import Navbar from "../sub/navbar.jsx";

export default class TimeLineContaner extends React.Component{
    render(){
        return(
            <section className="timeline-section">
                <Navbar/>
                <header className="welcome-header">Live of Jacob Fugger</header>
                <Timeline/>
            </section>
        );
    }
}