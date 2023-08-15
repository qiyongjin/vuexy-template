/* eslint-disable regex/invalid */
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import router from '@/router'

const axiosIns: AxiosInstance = axios.create({
  // You can add your headers here
  // ================================
  baseURL: '/',
  timeout: 6000,

  // 跨域时候允许携带凭证
  withCredentials: true,

  // headers: {'X-Custom-Header': 'foobar'}
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosIns.interceptors.request.use((config: AxiosRequestConfig | any) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('accessToken')

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {}

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : ''
  }

  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  if (error.response) {
    // Handle error
    if (error.response.status === 401) {
    // ℹ️ Logout user and redirect to login page
    // Remove "userData" from localStorage
      localStorage.removeItem('userData')

      // Remove "accessToken" from localStorage
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userAbilities')

      // If 401 response returned from api
      router.push('/login')
    }
    else {
      return Promise.reject(error)
    }
  }
})

export default axiosIns
