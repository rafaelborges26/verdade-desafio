import axios from 'axios'

export const api = axios.create({
  baseURL: 'localhost:5173',
  withCredentials: true,
})