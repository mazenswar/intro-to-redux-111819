import React from 'react';

import store from '../Redux/store';
import actions from '../Redux/actions/actions';

export default function Essentials() {
  store.subscribe(() => {
    console.log('This is my staaaate ====>', store.getState());
  });

  return (
    <div>
      <h1>Redux World</h1>
      <button onClick={() => store.dispatch(actions.addUser(user))}>
        Add user
      </button>
      <button onClick={() => store.dispatch(actions.incrementAction)}>+</button>
      <button onClick={() => store.dispatch(actions.decrementAction)}>-</button>
    </div>
  );
}

const user = {
  id: 1,
  username: 'Rick'
};

/////////////////////////  REDUX WORLD  //////////////////////////
