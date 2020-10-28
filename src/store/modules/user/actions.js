import userService from '../../../services/getData/UserService'
import router from '../../../router'
import localStorage from '../../../services/cookie_local_storage/Token'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'

const login = ({commit }, loginForm) => {
  userService.requestLogin(
    loginForm,
    res => {
        router.push('/')
        localStorage.setToken(res.token)
      commit('setNameUser', res.username)
      commit('setRoleUser', res.role)
    },
    e => {
      handleErrors.resolveCommonErrors(e)
    }
  )
}

const logout = () => {
  userService.logout(
    () => {
      router.push('/login')
      localStorage.clearToken('token')
    },
    () => {}
  )
}

const getResultRegister = ({commit}, callback = () => {}) => {
  userService.getResultRegister(
    res => {
      console.log(res)
      commit('setResultRegister', res.data.result)
      callback()
    },
    e => handleErrors.resolveCommonErrors(e)
  )
}

const addResultRegister = ({commit}, newSubject) => {
  userService.addResultRegister(newSubject, () => {
      commit('addResultRegister', newSubject)
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học ${newSubject.name}`,
            icon: 'success'
          }, () => {
          })
  }, e => handleErrors.resolveCommonErrors(e))
}

const deleteSubject = ({commit}, codeSubject) => {
  userService.deleteSubject(codeSubject, () => {
      commit('removeResultRegister', codeSubject)
      swalAlert.open({
            title: 'Hủy thành công!',
            text: `Bạn đã hủy thành công môn học ${codeSubject}`,
            icon: 'success'
          }, () => {
          })
  }, e => handleErrors.resolveCommonErrors(e))
}


const getListPageRegister = ({commit}, page) => {
    userService.getListPageRegister(
    page,
    res => commit('setListRegister',res.data.result),
    e => handleErrors.resolveCommonErrors(e)
  )
}

export default {
  login,
  logout,
  getResultRegister,
  addResultRegister,
  deleteSubject,
  getListPageRegister
}
