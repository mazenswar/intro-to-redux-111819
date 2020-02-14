import { createStore } from 'redux';

/////////////////////////  REDUX WORLD  //////////////////////////

// // Reducer
const initialState = [];

function rootReducer(state = initialState, action) {
  if (action.type === 'CLEAR') {
    return [];
  } else if (action.type === 'ADD_DOG') {
    return [...state, action.payload];
  } else if (action.type === 'GET_DOGS') {
    return action.payload;
  } else {
    return state;
  }
}
// ////////////////////////////////////////////////////////////////
// // Action
const addDoggoAction = {
  type: 'ADD_DOG',
  payload: {
    id: 13,
    mood: 'Woooooooof',
    img:
      'https://cdn.vox-cdn.com/thumbor/urDKweR6-bZ4Uqb_Ge_GZSTaZ98=/44x0:1086x695/1820x1213/filters:focal(44x0:1086x695):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/30654517/dogememe.0.png'
  }
};

const allDoggos = {
  type: 'GET_DOGS',
  payload: doggos
};

const clearDogs = {
  type: 'CLEAR'
};

////////////////////////////////////////////////////////////////
// Store

const store = createStore(rootReducer);

////////////////////////////////////////////////////////////////
///// Fake doggo
/*
{
    id: 13,
    mood: 'Woooooooof',
    img:
      'https://cdn.vox-cdn.com/thumbor/urDKweR6-bZ4Uqb_Ge_GZSTaZ98=/44x0:1086x695/1820x1213/filters:focal(44x0:1086x695):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/30654517/dogememe.0.png'
  }
*/
