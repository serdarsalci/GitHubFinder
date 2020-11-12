import {
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  SEARCHED_ITEM,
  SET_SEARCHED,
  CLEAR_USERS

} from '../types';


export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        searched: action.searched
      }
    case SET_LOADING:
      return {
        ...state,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    default:
      return state;
  }
}