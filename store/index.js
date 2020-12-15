import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  isLogin: false,
  access_token: 'gaada token',
  user: {
    name: '',
    unit: '',
    email: '',
    id: null
  },
  packages: [],
  pack: {},
  history: [],
  loading: true,
  QRValue: null
}

function reducer(state = initialState, action) {
  let user = {}
  let newPackages = []
  let newHistory = []
  let newQRValue = null
  switch (action.type) {
    case 'SET_LOGIN':
      user = {
        id: action.user.id,
        name: action.user.name,
        email: action.user.email,
        unit: action.user.unit
      }
      newQRValue = JSON.stringify(user.id)
      return { ...state, isLogin: action.payload, user: user, access_token: action.user.access_token, QRValue: newQRValue }
    case 'SET_LOGOUT':
      return { ...state, 
        isLogin: false,
        access_token: '',
        user: {
          name: '',
          unit: '',
          email: '',
          id: null
        },
        packages: [],
        pack: {},
        history: [],
        loading: true,
        QRValue: null
      }
    case 'SET_ISLOGIN':
      return { ...state, isLogin: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'FETCH_PACKAGES':
      newPackages = action.payload.filter(pack => {
        if (pack.claimed === false) {
          return pack
        } else {
          newHistory.push(pack)
        }
      })
      return { ...state, packages: newPackages, history: newHistory }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store