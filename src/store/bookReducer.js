const initialState = {
  no: 30
};

const BookReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "BOOK_UP":
      newState.no += 1;
      return newState;
    case "BOOK_DOWN":
      newState.no -= 1;
      return newState;
    default:
      return state;
  }
};

export default BookReducer;