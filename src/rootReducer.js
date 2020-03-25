import { combineReducers } from 'redux'
import contentStore from './modules/content/reducer'
import sidebarStore from './modules/sidebar/reducer'


export default combineReducers({
  contentStore,
  sidebarStore
  // add here next stores for other modules
})