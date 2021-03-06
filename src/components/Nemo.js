import React, {Component} from "react";
import Store from "../Store";
import Player from "./Player";
import Actions from "../Actions";

// function player_key_move(dx, dy) {
//     Dispatcher.dispatch({
//         actionType: "pmove",
//         dx: dx,
//         dy: dy,
//     });
// }

class Nemo extends  Component{

    constructor(){
        super();
        Actions.start_game();
        this.state= Store.getState();
    }

    componentDidMount(){
        Store.addChangeListener(this._onChange);
        window.addEventListener("keydown",this.keydown)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
        Store.removeChangeListener(this.keydown);
    }

    _onChange = () => {
        console.log("chage")
        this.setState(Store.getState());
    };


    render(){
        console.log(this.state.player)
        return (
            <svg width={1000} height={100}>
                <Player {...this.state.player} />

            </svg>

        ) ;
    }

    // start_game = ()=>{
    //     Action.start();
    //     Dispatcher.dispatch({
    //         actionType: "start",
    //     });
    // }

    keydown(event) {
        let key = event.key;
        console.log(key);

        switch (key){
            case "ArrowRight":
                Actions.player_key_move(30, 0);
                break;
            case "ArrowLeft":
                Actions.player_key_move(-30, 0);
                break;
            case "ArrowDown":
                Actions.start_game();
                break;
            default:
        }

    }


}

export default Nemo;

