
// let store = class Store {
//
// };

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

}

let store = new Store();

export default store