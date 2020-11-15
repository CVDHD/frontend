import userService from '../../../services/getData/UserService'
import router from '../../../router'
import localStorage from '../../../services/cookie_local_storage/Token'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'

const login = ({commit }, loginForm) => {
  userService.requestLogin(
    loginForm,
    res => {
      localStorage.setToken(res.data.success.token)
      localStorage.setUser(res.data.success.id)
      router.push('/')
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

const getResultRegister = ({ commit }) => {
  commit('loadingTrue')
  userService.getResultRegister(
    res => {
      commit('loadingFalse')
      commit('setResultRegister', res.data)
    },
    e => {
      
      handleErrors.resolveCommonErrors(e)
    }
  )
}

const addResultRegister = ({ commit }, newSubject) => {
  commit('loadingTrue')
  userService.addResultRegister(newSubject.class_id, () => {
    commit('addResultRegisterLocal', newSubject.class_id)
    commit('loadingFalse')
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học ${newSubject.name}`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('loadingFalse')
    handleErrors.resolveCommonErrors(e)
  })
}
const fileUploadCsv = ({ commit }, formdata) => {
  commit('loadingTrue')
  userService.postCsvFile(formdata, () => {
    commit('loadingFalse')
      swalAlert.open({
            title: 'Upload thành công!',
            text: 'Bạn đã upload thành công thời khóa biểu',
            icon: 'success'
          }, () => {
          })
  }, e => {
    commit('loadingFalse')
    handleErrors.resolveCommonErrors(e)
  })
}

const deleteSubject = ({ commit }, codeSubject) => {
  commit('loadingTrue')
  userService.deleteSubject(codeSubject, () => {
    commit('removeResultRegisterLocal', codeSubject)
    commit('loadingFalse')
      swalAlert.open({
            title: 'Hủy thành công!',
            text: `Bạn đã hủy thành công môn học ${codeSubject}`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('loadingFalse')
    handleErrors.resolveCommonErrors(e)
  })
}


const getListPageRegister = ({ commit }, page) => {
  commit('loadingTrue')
    userService.getListPageRegister(
    page,
      res => {
        commit('setListRegister', res.data)
        commit('loadingFalse')
    },
      e => {
        commit('loadingFalse')
        handleErrors.resolveCommonErrors(e)
      }
  )
}

export default {
  login,
  logout,
  getResultRegister,
  addResultRegister,
  deleteSubject,
  getListPageRegister,
  fileUploadCsv
}
