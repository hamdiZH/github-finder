import {
  GET_USER_AND_REPOS_START,
  GET_USER_AND_REPOS_SUCCESS,
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
  // USER And Repo Cases
    case GET_USER_AND_REPOS_START:
      return  {
        ...state,
        loading: true
      }

    case GET_USER_AND_REPOS_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      }

    default: return state;
  }
}

export default githubReducer;