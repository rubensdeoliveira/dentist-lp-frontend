import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PULIC_API_URL,
})
