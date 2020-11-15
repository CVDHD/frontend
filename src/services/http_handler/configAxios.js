import axios from 'axios/index'
import Token from '../cookie_local_storage/Token'
 const InstanceAxios =  () =>  
   axios.create({
     headers: {
       token: Token.getToken(),
       id: Token.getUser()
     },
    // withCredentials: true,
    baseURL: 'https://my-app-dkmh.herokuapp.com/api/',
    // credentials: 'include',
  })
 export default InstanceAxios
