export const SAVE_ITEM = 'SAVE_ITEM';
export const UNSAVE_ITEM = 'UNSAVE_ITEM';
export const VIEW_DETAILS = 'VIEW_DETAILS';
// Not implemented
export const BEGIN_CHECKOUT = 'BEGIN_CHECKOUT';

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
};

export const beginCheckout = (reference) => {
  return ({
    type: BEGIN_CHECKOUT,
    reference
  })
};
