import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "../../css/sub/timeline.scss";

export default class Timeline extends React.Component{
    constructor(props){
        super(props);
        this.base = require("../../data/timeline.json");
        this.formTheList = this.formTheList.bind(this);
        this.finalItems = [];
        this.colors = ["#ffa500","#1999ff","#ff8000","#00ff40"];
        this.block = 0;
    }
    formTheList(){
        if(this.block == 0){
            let counter = 0;
            let itemName = "item"+counter;
            while(this.base.hasOwnProperty(itemName)){
                this.finalItems.push(<VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.colors[counter%4], color: '#111' , border: "1px solid black"}}
                    contentArrowStyle={{ borderRight: '7px solid '+this.colors[counter%4] }}
                    date="">
                    <h3 className="vertical-timeline-element-title">{this.base[itemName]["header"]}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{this.base[itemName]["smaller"]}</h4>
                    <p>
                        {this.base[itemName]["content"]}
                    </p>
                </VerticalTimelineElement>);
    
                counter++;
                itemName = "item"+counter;
                console.log(itemName);
            }
            this.block = 1;
        }

    }
    render(){
        this.formTheList();
        return(
            <div className="timeline-container">
                <VerticalTimeline>
                    {this.finalItems}
                </VerticalTimeline>
            </div>
        );
    }
}