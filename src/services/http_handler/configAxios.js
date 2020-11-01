import axios from 'axios/index'

 const InstanceAxios =  () =>  
   axios.create({
    // withCredentials: true,
     baseURL: 'https://my-app-dkmh.herokuapp.com/api/',
        // credentials: 'include',
  })
 export default InstanceAxios
