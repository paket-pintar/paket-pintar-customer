import axios from '../config/axios'

export function fetchPackages(access_token) {
  // console.log(access_token);
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    axios({
      method: 'get',
      url: '/packages',
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        //  console.log(data);
        dispatch({
          type: 'FETCH_PACKAGES',
          payload: data
        })
      })
      .catch(err => {
        // console.log(err)
      })
      .finally(() => {
        // console.log('fetch packages done')
        dispatch({ type: 'SET_LOADING', payload: false })
      })
  }
}

export function fetchRegister(payload) {
  return axios({
    method: 'POST',
    url: '/register',
    data: payload
  })
}

export function fetchLogin(email, password) {
  return axios({
    method: 'POST',
    url: '/login-user',
    data: { email, password }
  })
}

export function fetchRegisterExpoToken(id, access_token, userToken) {
  return axios({
    url: '/users/register-token/' + id,
    method: 'PUT',
    headers: { access_token },
    data: { userToken }
  })
}

// export function fetchUserProfile(access_token) {
//   return (dispatch) => {
//     dispatch({ type: 'SET_LOADING', payload: true })
//     axios({
//       method: 'get',
//       url: '/packages',
//       headers:{
//         access_token
//       }
//     })
//        .then(({ data }) => {
//          dispatch({
//            type: 'FETCH_PROFILE',
//            payload: data
//          })
//        })
//        .catch(console.log)
//        .finally(() => {
//           console.log('fetch profile done')
//           dispatch({ type: 'SET_LOADING', payload: false })
//         })
//   }
// }