export const SAVE_ITEM = 'SAVE_ITEM';
export const UNSAVE_ITEM = 'UNSAVE_ITEM';
export const VIEW_DETAILS = 'VIEW_DETAILS';

export const saveItem = (reference) => {
  return ( {
    type: SAVE_ITEM,
    reference
  } );
};

export const unSaveItem = (reference) => {
  return ( {
    type: UNSAVE_ITEM,
    reference
  } );
};

export const viewDetails = (reference) => {
  return ({
    type: VIEW_DETAILS,
    reference
  })
}
