import { createStore } from 'redux'

const initialState = {
  isLogin: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ISLOGIN':
      return { ...state, isLogin: action.payload }

    default:
      return state
  }
}

const store = createStore(reducer)

export default store