import axios from 'axios/index'
import Token from '../cookie_local_storage/Token'
 const InstanceAxios =  () =>  
   axios.create({
     headers: {
       token: Token.getToken(),
       id: Token.getUser(),
       Authorization: `Bearer ${Token.getToken()}`
     },
    // withCredentials: true,
    // baseURL: 'https://my-app-dkmh.herokuapp.com/api/',
    baseURL: 'http://localhost:8000/api/',
     
    // credentials: 'include',
  })
 export default InstanceAxios
