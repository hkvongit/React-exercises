import { combineReducers } from 'redux'

import BookReducer from './bookReducer'
import ArticleReducer from './articleReducer'
import UserReducer from './userReducer'

export default combineReducers({
    BookReducer,
    ArticleReducer,
    UserReducer
  })