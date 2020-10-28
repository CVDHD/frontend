import axios from 'axios/index'

 const InstanceAxios =  () =>  
   axios.create({
    withCredentials: true,
     baseURL: 'http://localhost:3000/api/',
        credentials: 'include',
  })
 export default InstanceAxios
