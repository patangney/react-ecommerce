/**
 * A reducer is just a function that will get two properties (type and payload)
 * It gets a state object which represents the last state OR an inital state that we are trying to store
 * Then it recieves an action.
 * That action is just an object that has a type which is a string value
 * Need to make sure reducers are aware of what specific type of action
 *
 */
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
