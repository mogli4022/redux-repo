const initialState = {};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "loginData":
      return {...state, ...action.data}
    default:
      return state;
  }
};

export default changeTheNumber;
