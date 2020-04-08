import {sortParams} from "./constants";
import {SET_SEARCH} from "./actions";

const sortStore = (state = sortParams, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {...state, search: action.search};
    default:
      return state
  }
};

export default sortStore