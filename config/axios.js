import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://10.0.2.2:3000'
  baseURL: 'http://192.168.55.104:3000'
})

export default instance