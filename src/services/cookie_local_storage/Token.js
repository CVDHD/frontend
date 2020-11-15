 const getToken = () => localStorage.getItem('token')
 const setToken = (token) => localStorage.setItem('token', token)
 const clearToken = () => localStorage.clear('token')
const setUser = (user) => localStorage.setItem('user_id', user)
const getUser = () => localStorage.getItem('user_id')
 const setRole = (role) => localStorage.setItem('role', role)
 const getRole = ()=> localStorage.getItem('role')
export default {
    getToken,
    setToken,
    clearToken,
    setUser,
    getUser,
    setRole,
    getRole
}

