import {createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (Testing Purposes)
  /**
   *
   * @returns {Promise<void>}
   * const fetchUsers = async () => {
    dispatch({
      type: 'GET_USERS_START'
    })
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    dispatch({
      type: 'GET_USERS_SUCCESS',
      payload: data,
    })
  }
   */

    // Get Search Results
  const searchUsers = async (text) => {
      dispatch({
        type: 'GET_USERS_START'
      })
      const params = new URLSearchParams({
        q: text
      })
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `${GITHUB_TOKEN}`
        }
      })
      // const data = await response.json()
      const {items} = await response.json()
      dispatch({
        type: 'GET_USERS_SUCCESS',
        payload: items,
      })
    }

  // Clear Users from state
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS'
    })
  }
  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers,
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
