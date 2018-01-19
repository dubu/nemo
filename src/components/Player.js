import React, { Component } from "react";

export default class Player extends Component {

    render(){
        console.log(this.props.x );
        let position = "translate(" + this.props.x + ", " + this.props.y + ")";
        return(
            <g transform={position}  ref="player">
            <rect   x={10}
                    y={5}
                    width="70" height="10" />
            </g>
        );
    }
}

