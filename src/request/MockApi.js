import axios from "axios"
import { BASE_URL } from "../configs/Config"


export const FETCH_USER = (id) => {
  const url = BASE_URL + "/users/" + id
  return axios.get(url)
}

export const FETCH_USERS = () => {
  return axios.get(BASE_URL + "/users")
}

export const INSERT_USER = (params) => {
  return axios.post(BASE_URL + "/users", params)
}


export const FETCH_POST = (id) => {
  const url = BASE_URL + "/post/" + id
  return axios.get(url)
}

export const FETCH_POSTS = () => {
  return axios.get(BASE_URL + "/post")
}

export const INSERT_POST = (params) => {
  return axios.post(BASE_URL + "/post", params)
}


export const FETCH_MESSAGE = (id) => {
  const url = BASE_URL + "/message/" + id
  return axios.get(url)
}

export const FETCH_MESSAGES = () => {
  return axios.get(BASE_URL + "/message")
}

export const INSERT_MESSAGER = (params) => {
  return axios.post(BASE_URL + "/pmessageost", params)
}