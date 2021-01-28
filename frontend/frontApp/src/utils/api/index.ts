import axios from 'axios'

const headers = new Headers()

headers.append('Access-Control-Allow-Origin', '*')

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: headers,
})

export default api
