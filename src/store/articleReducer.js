const initialState = {
    no: 5
  };
  
  const ArticleReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
      case "ARTICLE_UP":
        newState.no += 1;
        return newState;
      case "ARTICLE_DOWN":
        newState.no += 1;
        return newState;
      default:
        return state;
    }
  };
  
  export default ArticleReducer;