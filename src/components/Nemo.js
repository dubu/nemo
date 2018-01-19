import React, {Component} from "react";
import Store from "../Store"

class Nemo extends  Component{

    constructor(){
        super();
        this.stage= Store.getState();

    }

    render(){
        return (
           <div> hi in div ~ {this.props.width}  {this.props.height} </div>
        ) ;
    }
}

export default Nemo;

