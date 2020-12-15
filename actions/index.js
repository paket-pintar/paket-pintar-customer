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
      .catch(console.log)
      .finally(() => {
        console.log('fetch packages done')
        dispatch({ type: 'SET_LOADING', payload: false })
      })
  }
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