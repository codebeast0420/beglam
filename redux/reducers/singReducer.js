const initialState = {
  userId: '',
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userId: action.payload.userId,
        name: action.payload.name,
      };
    // case 'COUNT_DECRESE':
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    default:
      return state;
  }
};