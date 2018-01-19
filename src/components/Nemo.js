import React, {Component} from "react";
import Store from "../Store";
import Player from "./Player";
import Dispatcher from "../Dispatcher";

function player_key_move(dx, dy) {
    Dispatcher.dispatch({
        actionType: "pmove",
        dx: dx,
        dy: dy,
    });
}

class Nemo extends  Component{

    constructor(){
        super();
        this.stage= Store.getState();
    }

    componentDidMount(){
        Store.addChangeListener(this._onChange);
        window.addEventListener("keydown",this.keydown)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(Store.getState());
    };


    render(){
        return (
            <svg width={1000} height={100}>
                <Player {...this.stage.player} />

            </svg>

        ) ;
    }

    keydown(event) {
        let key = event.key;
        console.log(key);

        switch (key){
            case "ArrowRight":
                player_key_move(30, 0);
                break;
            case "ArrowLeft":
                player_key_move(-30, 0);
                break;
            default:
        }

    }


}

export default Nemo;

