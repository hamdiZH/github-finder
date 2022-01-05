const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS_START':
      return {
        ...state,
        loading: true
      }

    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }

    default: return state;
  }
}

export default githubReducer;