import {sidebarListNew} from "./constans";
import {selectSizeSidebar} from "./constans";


const selectSizeStore = (state = selectSizeSidebar, action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            return [
                ...state,
                {
                    id: state[state.length - 1] + 1,
                    size: action.size
                }
            ];
        default:
            return state
    }
};


export default selectSizeStore
