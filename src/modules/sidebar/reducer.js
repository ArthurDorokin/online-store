import {sidebarListNew} from "./constans";


const sidebarStore = (state = sidebarListNew, action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            return [
                ...state,
            ];
        case 'REMOVE_GOOD':
            return state.splice(state.findIndex(({id}) => id === action.id), 1);
        case 'TOGGLE_DISABLE_GOOD':
            return state.map((good) => good.id === action.id ? {...good, disabled: !good.disabled} : good);
        default:
            return state
    }
};

export default sidebarStore