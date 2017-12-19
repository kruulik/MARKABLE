import { combineReducers } from 'redux';

import items from './itemsReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
  items,
  ui
});

export default rootReducer; 
