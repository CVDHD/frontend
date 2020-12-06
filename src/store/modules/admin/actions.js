import adminService from '../../../services/getData/AdminService'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'
//lay ket qua dang ky hoc
const getResultRegister = ({ commit }) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.getResultRegister(
    res => {
      commit('commonModule/loadingFalse', null, { root: true })
      commit('setResultRegister', res.data['class list'])
    },
    e => {
      handleErrors.resolveCommonErrors(e)
    }
  )
}
//them sinh vien vao lop mon hoc
const addStudentToClass = ({ commit }, data) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.addStudent(data, () => {
    commit('commonModule/loadingFalse', null, { root: true })
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse', null, { root: true })
    handleErrors.resolveCommonErrors(e)
  })
}
//xoa dang ky hoc cua sinh vien
const removeStudentFromClass = ({ commit }, data) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.removeStudent(data, () => {
    commit('commonModule/loadingFalse', null, { root: true })
      swalAlert.open({
            title: 'Đăng ký thành công!',
            text: `Bạn đã đăng ký thành công môn học`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse', null, { root: true })
    handleErrors.resolveCommonErrors(e)
  })
}

//upload file tkb csv
const fileUploadCsv = ({ commit }, formdata) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.postCsvFile(formdata, () => {
    commit('commonModule/loadingFalse', null, { root: true })
      swalAlert.open({
            title: 'Upload thành công!',
            text: 'Bạn đã upload thành công thời khóa biểu',
            icon: 'success'
          }, () => {
          })
  }, e => {
    commit('commonModule/loadingFalse', null, { root: true })
    handleErrors.resolveCommonErrors(e)
  })
}

const deleteRegister = ({ commit }, class_id) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.deleteRegister({class_id}, () => {
    commit('removeListRegisterLocal', class_id)
    console.log(class_id)
    commit('commonModule/loadingFalse', null, { root: true })
      swalAlert.open({
            title: 'Hủy thành công!',
            text: `Bạn đã hủy thành công môn học ${class_id}`,
            icon: 'success'
          }, () => {
          })
  }, e => {
      commit('commonModule/loadingFalse', null, { root: true })
    handleErrors.resolveCommonErrors(e)
  })
}


const getListPageRegister = ({ commit }, page) => {
  commit('commonModule/loadingTrue', null, { root: true })
    adminService.getListPageRegister(
    page,
      res => {
        commit('setListRegister', res.data['class list'])
        commit('commonModule/loadingFalse', null, { root: true })
    },
      e => {
        commit('commonModule/loadingFalse', null, { root: true })
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

const getAllPdf = ({commit}) => {
    commit('commonModule/loadingTrue', null, { root: true })
  adminService.getFileZip(
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

const getFilePdf = ({ commit }, data) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.getFilePdf(
    {class: data},
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
  getResultRegister,
  addStudentToClass,
  deleteRegister,
  getListPageRegister,
  fileUploadCsv,
  getListRooms,
  getListTeachers,
  getListSubjects,
  removeStudentFromClass,
  getAllPdf,
  getFilePdf
}
