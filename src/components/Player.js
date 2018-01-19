import React, { Component } from "react";

export default class Player extends Component {

    render(){
        return(
            <g ref="player">
            <rect   x={10}
                    y={5}
                    width="70" height="10" />
            </g>
        );
    }
}

