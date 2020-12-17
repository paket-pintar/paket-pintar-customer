import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://10.0.2.2:3000'
  // baseURL: 'http://192.168.100.122:3000'
  baseURL: 'http://192.168.100.7:3000'
})

export default instance