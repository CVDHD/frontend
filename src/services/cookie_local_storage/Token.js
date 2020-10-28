 const getToken = () => localStorage.getItem('token')
 const setToken = (token) => localStorage.setItem('token', token)
 const clearToken = () => localStorage.clear('token')
 
export default {
    getToken,
    setToken,
    clearToken
}

