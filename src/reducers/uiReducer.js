import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_THUMB
} from '../actions/uiActions';

import merge from 'lodash/merge';

const initialState = {
  activeItem: null,
  modalOpen: false,
  sideBarOpen: false 
}
let next;

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return merge({}, state, {modalOpen: true})
    case CLOSE_MODAL:
      return merge({}, state, {modalOpen: false})
    case SELECT_THUMB:
      next = state["activeItem"] === action.item ? null : action.item
      return merge({}, state, { activeItem: next })
    default:
      return state;
  }
}

export default uiReducer;
