export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SELECT_THUMB = 'SELECT_THUMB';

export const openModal = () => {
  return ( {
    type: OPEN_MODAL,
  } );
};

export const closeModal = () => {
  return ( {
    type: CLOSE_MODAL,
   } );
};

// This action could go in items or UI. My naming convention isn't the best here. Would refactor for clarity. 
export const selectThumb = (item) => {
  return ( {
    type: SELECT_THUMB,
    item
   } );
};
