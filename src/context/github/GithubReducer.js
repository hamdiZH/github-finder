import {
  GET_USER_REPOS_START,
  GET_USER_REPOS_SUCCESS,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USERS_START
} from "./GithubTypes";
import {GET_USERS_SUCCESS} from "./GithubTypes";
import {CLEAR_USERS} from "./GithubTypes";

const githubReducer = (state, action) => {
  switch (action.type) {
    /* USERS CASES*/
    case GET_USERS_START:
      return {
        ...state,
        loading: true
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      }
  // USER Cases
    case GET_USER_START:
      return  {
        ...state,
        loading: true
      }

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

      // Repos cases
    case GET_USER_REPOS_START:
      return {
        ...state,
        loading: true,
      }

    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }

    default: return state;
  }
}

export default githubReducer;