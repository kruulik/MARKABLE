import {
  SAVE_ITEM,
  UNSAVE_ITEM,
  VIEW_DETAILS
} from '../actions/itemActions';

import merge from 'lodash/merge';

const initialState = {
  saved: [],
}

let prev, next;

const itemsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SAVE_ITEM:
      prev = state["saved"];
      next = action.reference;
      return merge({}, state, {saved: [...prev, next]});
    case UNSAVE_ITEM:
      prev = state["saved"];
      let idx = prev.findIndex(i => i === action.reference);
      prev.splice(idx, 1);
      return merge({}, state, {saved: prev});
    case VIEW_DETAILS:
      debugger
    default:
      return state;
  }
}

export default itemsReducer;
