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
      localStorage.setUser(loginForm)
      localStorage.setRole(res.data.success.role)
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
      location.reload()
      router.push('/login')
      localStorage.clearToken('token')
    },
    () => {}
  )
}

const getResultRegister = ({ commit }) => {
  commit('commonModule/loadingTrue', null, { root: true })
  userService.getResultRegister(
    res => {
      commit('commonModule/loadingFalse', null, { root: true })
      commit('setResultRegister', res.data)
    },
    e => {
      commit('commonModule/loadingFalse', null, { root: true })
      handleErrors.resolveCommonErrors(e)
    }
  )
}

const addResultRegister = ({ commit }, newSubject) => {
  commit('commonModule/loadingTrue',  null, { root: true })
  userService.addResultRegister(newSubject.class_id, () => {
    commit('addResultRegisterLocal', newSubject.class_id)
    commit('commonModule/loadingFalse',null, { root: true })
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học ${newSubject.name}`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse',null, { root: true })
    handleErrors.resolveCommonErrors(e)
  })
}
const fileUploadCsv = ({ commit }, formdata) => {
  commit('commonModule/loadingTrue', null, {root: true})
  userService.postCsvFile(formdata, () => {
     commit('commonModule/loadingFalse', null, {root: true})
      swalAlert.open({
            title: 'Upload thành công!',
            text: 'Bạn đã upload thành công thời khóa biểu',
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse', null, {root: true})
    handleErrors.resolveCommonErrors(e)
  })
}

const deleteSubject = ({ commit }, codeSubject) => {
  commit('commonModule/loadingTrue')
  userService.deleteSubject(codeSubject, () => {
    commit('removeResultRegisterLocal', codeSubject)
    commit('commonModule/loadingFalse', null, {root: true})
      swalAlert.open({
            title: 'Hủy thành công!',
            text: `Bạn đã hủy thành công môn học ${codeSubject}`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse', null, {root: true})
    handleErrors.resolveCommonErrors(e)
  })
}


const getListPageRegister = ({ commit }, page) => {
  commit('commonModule/loadingTrue', null, {root: true})
    userService.getListPageRegister(
    page,
      res => {
        console.log(res.data.total)
        commit('commonModule/setTotalRow',res.data.total, {root: true})
        commit('setListRegister', res.data['class list'])
        commit('commonModule/loadingFalse', null, {root: true})
    },
      e => {
        commit('commonModule/loadingFalse', null, {root: true})
        handleErrors.resolveCommonErrors(e)
      }
  )
}
const getPdfFile = ({commit}) => {
    commit('commonModule/loadingTrue', null, { root: true })
  userService.getFile(
      res => {
        commit('commonModule/loadingFalse', null, { root: true })
        const fileName = res.headers["content-disposition"].split("filename=")[1]
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
    },
      e => {
        commit('commonModule/loadingFalse', null, { root: true })
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
  fileUploadCsv,
  getPdfFile
}
