/// How do I want my state to look like?
// state = {}
// what cases I need to deal with?
// How do I handle these cases?

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'CREATE_USER':
      // state => {}
      // action.payload ===>
      // { id: 1, username: 'whoo' }
      return action.payload;
    case 'LOGOUT':
      // state => { id: 1, username: 'whoo' }
      return {};
    default:
      return state;
  }
}

// state = {
//     user: {}, ===> userReducer
//     dogs: [],  ====> DogReducer
// }
