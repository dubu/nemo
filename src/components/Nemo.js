import React, {Component} from "react";
import Store from "../Store";
import Player from "./Player";

class Nemo extends  Component{

    constructor(){
        super();
        this.stage= Store.getState();

    }


    render(){
        return (
            <svg width={100} height={100}>
                <Player />

            </svg>

        ) ;
    }
}

export default Nemo;

