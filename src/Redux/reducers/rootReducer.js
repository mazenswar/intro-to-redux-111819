/// How do I want my state to look like?
// state = []
// what cases I need to deal with?
// How do I handle these cases?

function reducer(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      // Add number ONE to the array
      return [...state, 1];
    case 'DECREMENT':
      //Remove the last thing from the array
      let copy = [...state];
      copy.pop();
      return copy;
    case 'ADD_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
