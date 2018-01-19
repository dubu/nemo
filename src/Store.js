
// let store = class Store {
//
// };

const EventEmitter = require("events").EventEmitter;

class Store extends EventEmitter{

    constructor(){
        super();

    }

    getState() {
        return {
            enemies: Data.enemies,
            player: Data.player
        }
    }

}




let store = new Store();
export default store