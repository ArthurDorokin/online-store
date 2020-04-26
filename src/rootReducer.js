import { combineReducers } from 'redux'
import contentStore from './modules/content/reducer'
import selectSizeStore from './modules/sidebar/reducer'
import sortStore from "./modules/sortPanel/reducer";
import cartProductStore from "./modules/сardProduct/reducer";
import BasketStore from "./modules/basket/reducer";


export default combineReducers({
  contentStore,
  selectSizeStore,
  sortStore,
  cartProductStore,
  BasketStore

  // add here next stores for other modules
})