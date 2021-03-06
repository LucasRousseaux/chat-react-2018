import axios from 'axios';

class ChatAPI {

  constructor() {
    this.axios = axios.create({
      baseURL: '/api/'
    })
  }

  postAuthAPI = (user) => (
    this.axios.post('/auth',user, {
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      return response.data
    })
  )

  postUsersAPI = (user) => (
    this.axios.post('/users',user, {
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      return response.data
    })
  )

  getUsersAPI = () => (
    this.axios.get('/users', {
      headers: {"Content-Type": "application/json"}
      }).then(response => {
      return response.data
    })
  )


  getOneUserAPI = (id,token) => (
    this.axios.get(`/users/${id}`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token }
    }).then(response => {
      return response.data
    })
  )

  postChannelsAPI = (name,token) => (
    this.axios.post(`/channels`,name,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  getChannelsAPI = (token) => (
    this.axios.get(`/channels`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  getMembersAPI = (id,token) => (
    this.axios.get(`/channels/${id}/members`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  postMembersAPI = (id,token) => (
    this.axios.post(`/channels/${id}/members`,null,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )


  getMessagesAPI = (id, token) => (
    this.axios.get(`/channels/${id}/messages`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })

  )


  getMessagesSinceAPI = (id,since, token) =>  (
    this.axios.get(`/channels/${id}/messages?since=${since}`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  postMessagesAPI = (id,token,values) => (
    this.axios.post(`/channels/${id}/messages`,values,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )


}

export default ChatAPI;
