import React from "react";

import Navbar from "../sub/navbar.jsx";

export default class Contact extends React.Component{
    render(){
        return(
            <section className="contact-container">
                <Navbar/>
                <header className="welcome-header">Contact</header>
                <div className="contact-ways">
                    <div className="contact-item">Email: szym-ku@wp.pl</div>
                    <div className="contact-item">Github: <a href="https://github.com/SKupisz" target="_blank" rel="noopener noreferrer">SKupisz</a></div>
                </div>
            </section>
        );
    }
}