
// let store = class Store {
//
// };

import Dispatcher from "./Dispacher";
const EventEmitter = require("events").EventEmitter;

let Data = {timer: null, enemies: [], player: {}};

class Store extends EventEmitter{

    constructor(){
        super();
    }

    getState() {

        return {
            timer: Data.timer,
            enemies: Data.enemies,
            player: Data.player
        }
    }

    movePlay(dx, dy) {
        let p = Data.player;

        p.x += dx;
        p.y += dy;

        Data.player = p;

    }
}


Dispatcher.register(function (action) {
    switch (action.actionType){
        case "pmove" :
           store.movePlay(action.dx, action.dy)
            break;
        default:
    }

})


let store = new Store();

export default store