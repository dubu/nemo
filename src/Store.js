
// let store = class Store {
//
// };

import Dispatcher from "./Dispatcher";
const EventEmitter = require("events").EventEmitter;

let Data = {timer: null, enemies: [], player: {}};

// Data.player = {
//     x: 50,
//     y: 10,
// };

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

        console.log(p);
        p.x += dx;
        p.y += dy;

        console.log(p);

        Data.player = p;

    }

    start(){
        Data.player = {
            x: 50,
            y: 10,
        };
    }

    addChangeListener(callback) {
        this.on("chage", callback);
    }

    removeChangeListener(callback) {
        this.on("change", callback);
    }

    emitChange() {
        this.emit("change");
    }


}

Dispatcher.register(function (action) {
    switch (action.actionType){
        case "pmove" :
            store.movePlay(action.dx, action.dy)
            break;
        case "start":
            store.start();
            break;
        default:
    }

})


let store = new Store();

export default store