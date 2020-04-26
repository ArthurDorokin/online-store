import {sortParams} from "./constants";
import {sortSelectList} from "../constants";
import {SET_SEARCH, SET_NAME} from "./actions";

console.log(sortSelectList);
const sortStore = (state = sortParams, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {...state, search: action.search};
    case SET_NAME:
      return {...state, name: action.name};
    default:
      return state
  }
};

export default sortStore