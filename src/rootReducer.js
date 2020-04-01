import { combineReducers } from 'redux'
import contentStore from './modules/content/reducer'
import sidebarStore from './modules/sidebar/reducer'
import selectSizeStore from './modules/sidebar/reducer'


export default combineReducers({
  contentStore,
  selectSizeStore

  // add here next stores for other modules
})