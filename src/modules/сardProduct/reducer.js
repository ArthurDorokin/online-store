import {HIDE_GOOD, SHOW_GOOD} from "./actions";

const cartProductStore = (state = null, action) => {
  switch (action.type) {
    case SHOW_GOOD:
      return action.good;
    case HIDE_GOOD:
      return null;
    default:
      return state
  }
};

export default cartProductStore