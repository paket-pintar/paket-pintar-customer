import { createStore } from 'redux'

const initialState = {
  name: 'jun'
}

function reducer(state = initialState, action) {
  return state
}

const store = createStore(reducer)

export default store