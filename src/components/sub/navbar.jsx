import React from "react";
import { Link } from "react-router-dom";


import "../../css/sub/navbar.scss";


export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="main-nav">
                <Link to = "/">
                    <div className="nav-item">
                        <div className="nav-item-content">
                            Fugger
                        </div>
                    </div>
                </Link>
                <Link to = "/timeline">
                    <div className="nav-item">
                        <div className="nav-item-content">Timeline</div>
                    </div>
                </Link>
                <Link to = "contact">
                    <div className="nav-item">
                        <div className="nav-item-content">Contact</div>
                    </div>
                </Link>
            </nav>
        );
    }
}