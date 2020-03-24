import React from "react";

import Entrance from "../sub/entrance.jsx";
import Navbar from "../sub/navbar.jsx";

export default class WelcomeSite extends React.Component{
    render(){
        return(
            <section className="main-container">
                <header className="welcome-header">Jacob Fugger</header>
                <Entrance/>
                <Navbar/>
            </section>
        );
    }
}