import { combineReducers } from 'redux'
import contentStore from './modules/content/reducer'
import selectSizeStore from './modules/sidebar/reducer'
import sortStore from "./modules/sortPanel/reducer";


export default combineReducers({
  contentStore,
  selectSizeStore,
  sortStore

  // add here next stores for other modules
})