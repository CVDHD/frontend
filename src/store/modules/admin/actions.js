import adminService from '../../../services/getData/AdminService'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'

const getResultRegister = ({ commit }) => {
  commit('loadingTrue')
  adminService.getResultRegister(
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
  adminService.addResultRegister(newSubject.class_id, () => {
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
  adminService.postCsvFile(formdata, () => {
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
  adminService.deleteSubject(codeSubject, () => {
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
    adminService.getListPageRegister(
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
  getResultRegister,
  addResultRegister,
  deleteSubject,
  getListPageRegister,
  fileUploadCsv
}
