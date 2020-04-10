import {selectSizeSidebar} from "./constans";
import {SET_SELECT} from "./actions";

const sortSize = (state = selectSizeSidebar, action) => {
    switch (action.type) {
        case SET_SELECT:
            return {...state, size: action.size};
        default:
            return state
    }
};

export default sortSize
