const incrementAction = {
  type: 'INCREMENT'
};

const decrementAction = {
  type: 'DECREMENT'
};

const addUser = userObj => {
  return {
    type: 'ADD_USER',
    payload: userObj
  };
};

export default {
  incrementAction,
  decrementAction,
  addUser
};
