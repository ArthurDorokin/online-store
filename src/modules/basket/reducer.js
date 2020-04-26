import {HIDE_BASKET, SHOW_BASKET} from "./actions";

const BasketStore = (state = null, action) => {
    switch (action.type) {
        case SHOW_BASKET:
            return action.good;
        case HIDE_BASKET:
            return null;
        default:
            return state
    }
};

export default BasketStore