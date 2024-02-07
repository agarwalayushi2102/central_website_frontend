import axios from 'axios';

const BASE_URL = "http://localhost:5000"

const usersURL = BASE_URL + '/api/users'
const contentURL = BASE_URL + '/api/content'
const googleloginURL = BASE_URL + '/api/auth/googlelogin'

export const googlelogin = (googleLoginData:  Object) => axios.post(`${googleloginURL}` , googleLoginData)
