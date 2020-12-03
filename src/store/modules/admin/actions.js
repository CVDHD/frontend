import adminService from '../../../services/getData/AdminService'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'
//lay ket qua dang ky hoc
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
//them sinh vien vao lop mon hoc
const addStudentToClass = ({ commit }, data) => {
  commit('loadingTrue')
  adminService.addStudent(data, () => {
    commit('loadingFalse')
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('loadingFalse')
    handleErrors.resolveCommonErrors(e)
  })
}
//xoa dang ky hoc cua sinh vien
const removeStudentFromClass = ({ commit }, data) => {
  commit('loadingTrue')
  adminService.removeStudent(data, () => {
    commit('loadingFalse')
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('loadingFalse')
    handleErrors.resolveCommonErrors(e)
  })
}

//upload file tkb csv
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

const deleteRegister = ({ commit }, codeSubject) => {
  commit('loadingTrue')
  adminService.deleteRegister(codeSubject, () => {
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
const getListRooms = ({ commit }) => {
  
    adminService.getListRooms(
      res => {
        commit('setListRooms', res.data)
    },
      e => {
        handleErrors.resolveCommonErrors(e)
      }
  )
}

const getListTeachers = ({ commit }) => {
  
    adminService.getListTeachers(
      res => {
        commit('setListTeachers', res.data)
    },
      e => {
        handleErrors.resolveCommonErrors(e)
      }
  )
}

const getListSubjects = ({ commit }) => {
  
    adminService.getListSubjects(
      res => {
        commit('setListSubjects', res.data)
    },
      e => {
        handleErrors.resolveCommonErrors(e)
      }
  )
}
export default {
  getResultRegister,
  addStudentToClass,
  deleteRegister,
  getListPageRegister,
  fileUploadCsv,
  getListRooms,
  getListTeachers,
  getListSubjects,
  removeStudentFromClass
}
