import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-xxhp.onrender.com'
})
