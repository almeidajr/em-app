import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'http://192.168.2.127:3333/',
})
