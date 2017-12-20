import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/uiActions';

import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return merge({}, state, {modalOpen: true})
    case CLOSE_MODAL:
      return merge({}, state, {modalOpen: false})
    default:
      return state;
  }
}

export default uiReducer;
