import {contentList} from "./constants";
import {SHOW_GOOD} from "./actions";

const contentStore = (state = contentList, action) => {
  switch (action.type) {
    default:
      return state
  }
};
// const contentStore = (state = contentList, action) => {
//   switch (action.type) {
//     case 'ADD_GOOD':
//       return [
//         ...state,
//         {
//           id: state[state.length - 1].id + 1,
//           img: action.img,
//           description: action.description,
//           price: action.price,
//           size: action.size,
//           attrID: []
//         }
//       ];
//     case 'REMOVE_GOOD':
//       return state.splice(state.findIndex(({id}) => id === action.id), 1);
//     case 'TOGGLE_DISABLE_GOOD':
//       return state.map((good) => good.id === action.id ? {...good, disabled: !good.disabled} : good);
//     case 'FILTER_BY_SIZE':
//       return state.sort((a, b) => a.sizeSelect - b.sizeSelect ? 1 : -1);
//     default:
//       return state
//   }
// };

export default contentStore