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
                </div>
            </section>
        );
    }
}