import axios from 'axios';

const BASE_URL = "http://localhost:5000"

const usersURL = BASE_URL + '/api/users'
const contentURL = BASE_URL + '/api/content'
const googleloginURL = BASE_URL + '/api/auth/googlelogin'

export const googlelogin = (googleLoginData:  Object) => axios.post(`${googleloginURL}` , googleLoginData)

export const uploadImageServer = (imageData) => axios.post(`${contentURL}/image`, imageData, {headers: { 'Content-Type': 'application/json' , authorization: localStorage.getItem('token') }})

export const getContentVersionAdmin = () => axios.get(`${usersURL}/admin`, { headers: { authorization: localStorage.getItem('token') } })
export const getContentVersionPublic = (userEmailId) => axios.get(`${usersURL}/public/${userEmailId}`)

export const updateContentVersion = (updatedContentVersion) => axios.patch(`${contentURL}`, updatedContentVersion , { headers: { authorization: localStorage.getItem('token') } })
export const publishVersion = () => axios.patch(`${usersURL}/admin`, {}, { headers: { authorization: localStorage.getItem('token') } })
