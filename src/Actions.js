import Dispatcher from "./Dispatcher";

export default {

    player_key_move(dx, dy) {
        Dispatcher.dispatch({
            actionType: "pmove",
            dx: dx,
            dy: dy,
        });
    },
    start_game (){
        Dispatcher.dispatch({
            actionType: "start",
        });
    }
}