export const SAVE_ITEM = 'SAVE_ITEM';
export const UNSAVE_ITEM = 'UNSAVE_ITEM';

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
