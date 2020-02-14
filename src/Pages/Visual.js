import React, { useState } from 'react';
import vis from '../Assets/redux-ill.gif';

export default function Visual() {
  const [show, setShow] = useState(false);

  return (
    <div className="visual">
      {show ? (
        <button id="show-butt" onClick={() => setShow(false)}>
          Hide
        </button>
      ) : (
        <button id="show-butt" onClick={() => setShow(true)}>
          Show
        </button>
      )}
      {show ? <img src={vis} alt="redux" /> : null}
      <div className="blue">
        <h3>Three Princples</h3>
        <ol>
          <li>
            <strong>Single source of truth: </strong> The state of your whole
            application is stored in an object tree within a single store.
          </li>
          <li>
            <strong>State is read-only: </strong> The only way to change the
            state is to emit an action, an object describing what happened.
          </li>
          <li>
            <strong>Changes are made with pure functions: </strong>To specify
            how the state tree is transformed by actions, you write pure
            reducers.
          </li>
        </ol>
      </div>

      <div className="green">
        <h3>What the fudge is a store?</h3>
        <p>
          A store holds the whole state tree of your application. The only way
          to change the state inside it is to dispatch an action on it. A store
          is not a class. It's just an object with a few methods on it. To
          create it, pass your root reducing function to createStore.
        </p>
        <p>
          In English: The store is a box that contains your state(data
          container). It regulates access to the state through:
        </p>
        <p>Dispatching actions(requests to change the state):</p>
        <code>store.dispatch(action)</code>
        <p>Reading the state: </p>
        <code>store.getState()</code>
      </div>
      <div className="green">
        <h3>What the fudge is an action?</h3>
        <p>
          in simple terms, an action is an object that has ONE required key
          'type'
        </p>
        <p>
          The purpose of an action is to specify how your reducer should
          manipulate the state. It specificly tell you reducer which course of
          action it should take in reference to the state
        </p>
        <p>What does an action look like?</p>
        <code>{'const action = { type: "INCREMENT" }'}</code>
        <p>What does an action that also has data look like?</p>
        <code>
          {
            'const action = { \n type: "LOGIN", \n payload: {id: 1, username: "I cry because of Pry"} \n }'
          }
        </code>
      </div>
      <div className="green">
        <h3>What the fudge is a reducer?</h3>
        <p>
          A reducer is a <strong>PURE</strong> function that takes in two
          arguments:
        </p>
        <ol>
          <li>the Previous State</li>
          <li>The action object</li>
        </ol>
        <p>What does a reducer look like?</p>
        <code>
          {
            'function rootReducer(state = {}, action) { \n switch (action.type) { \n    case typeName: \n       return { ...state, ...action.payload } \n    default: \n       return state \n  } \n}'
          }
        </code>
      </div>
      <div className="green">
        <h3>WTF is a pure function?</h3>
        <ul>
          <li>Given the same input, will always return the same output. </li>
          <li>Produces no side effects</li>
        </ul>
      </div>
    </div>
  );
}
