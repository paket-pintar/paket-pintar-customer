import axios from 'axios'

export function fetchLogin(dispatch, data) {
  axios({
    url: 'http://192.168.100.5:3000/login-user',
    method: 'POST',
    data
  })
    .then((response) => {
      console.log("response then:", response);
      console.log("data then:", response.data);
    })
    .catch(console.log)
  // fetch('http://36.71.235.144:3000', {
  // fetch('http://192.168.100.5:3000', {
  //   method: 'GET'
  // })
  //   .then(data => {
  //     console.log('data 1', data);
  //     return data.json()
  //   })
  //   .then(data => {
  //     console.log('data', data);
  //   })
  //   .catch(err => {
  //     console.log('err', err);
  //   })
  // console.log(balikan);
  // balikan = await balikan.json()
  // console.log(balikan);
}