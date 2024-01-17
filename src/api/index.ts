import axios from 'axios';
import { message } from 'antd';
const instance = axios.create({
  baseURL: '/',
  timeout: 100000,
  headers: {
    "Content-Type": "application/json"
  }
})

instance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers.Authorization = `bearer ${access_token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error.message);
})

instance.interceptors.response.use((response) => {
  return response.data;
},(error) => {
  if (error.response.data && error.response.data.detail == "Not authenticated") {
    window.location.href="/login";
    return {}
  }
  message.error(error.message)
  return {code: 1, msg: "error"}
  // return Promise.reject(error.message);
})

export default instance;
