import React from "react";
import Typing from "react-typing-animation";

export default class Entrance extends React.Component{
    render(){
        return(
            <div className="describe-container">
            <div className="fugger-picture-container reverse-picture"></div>
            <div className="short-describe">
                <p className="text-container">
                    <Typing speed = {10} startDelay = {2000} className = "first-text">
                       An average human nowadays doesn't have a clue who Jacob Fugger was. And that's such a pity that we don't remember about one of the richest men in history. Jacob Fugger, one of the most effective bankers of the Renaissance Europe, created a financial empire that existed for a long time after he had passed away.
                    </Typing>
                    <Typing speed = {10} startDelay = {8000}>
                        <label htmlFor="" className="ifNotTooSmall">Let me show you some of Jacob Fugger's career below. If, having read it, you would like to know more about Fugger, read "The Richest Man Who Ever Lived: The Life and Times of Jacob Fugger" by Greg Steinmetz, whose book has inspired me to make this app.</label>
                    </Typing>
                </p>
            </div>
            <div className="fugger-picture-container"></div>
        </div>
        );
    }
}