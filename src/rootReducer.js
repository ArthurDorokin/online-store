import { combineReducers } from 'redux'
import contentStore from './modules/content/reducer'


export default combineReducers({
  contentStore,
  // add here next stores for other modules
})