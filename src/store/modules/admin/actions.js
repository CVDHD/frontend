import adminService from '../../../services/getData/AdminService'
import userService from '../../../services/getData/UserService'
import handleErrors from '../../../services/handler_error'
import swalAlert from '../../../services/swal_alert'
//lay ket qua dang ky hoc
const getResultRegister = ({ commit }) => {
  commit('commonModule/loadingTrue', null, { root: true })
  userService.getListPageRegister(
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
  adminService.addStudentToClass(data, () => {
    commit('commonModule/loadingFalse', null, { root: true })
      swalAlert.open({
            title: 'Thêm thành công!',
            text: `Bạn thêm thành công sinh viên ${data.student_id}  vào lớp học ${data.class_id}`,
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
  adminService.deleteStudentOfClass(data, () => {
    commit('commonModule/loadingFalse', null, { root: true })
    console.log(data)
    commit('deleteStudentOfClassLocal', data.student_id)
      swalAlert.open({
            title: 'Xóa thành công!',
            text: `Bạn đã xóa sinh viên ${data.student_id} khỏi lớp học ${data.class_id}`,
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
    userService.getListPageRegister(
    page,
      res => {
        commit('setListRegister', res.data['class list'])
        commit('commonModule/loadingFalse', null, { root: true })
        commit('commonModule/setTotalRow',res.data.total, {root: true})

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
        commit('setListRooms', res.data.data)
    },
      e => {
        handleErrors.resolveCommonErrors(e)
      }
  )
}

const getListTeachers = ({ commit }) => {
  
    adminService.getListTeachers(
      res => {
        commit('setListTeachers', res.data.data)
    },
      e => {
        handleErrors.resolveCommonErrors(e)
      }
  )
}

const getListSubjects = ({ commit }) => {
  
    adminService.getListSubjects(
      res => {
        commit('setListSubjects', res.data.data)
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
  console.log(data)
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.getFilePdf(
    data,
      res => {
        commit('commonModule/loadingFalse', null, { root: true })
        const fileName = res.headers["content-disposition"].split("filename=")[1]
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', data +fileName.slice(0, -1));
        document.body.appendChild(link);
        link.click();
    },
      e => {
        commit('commonModule/loadingFalse', null, { root: true })
        handleErrors.resolveCommonErrors(e)
      }
  )
}

const getAllStudentByClass = ({commit}, data) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.getStudentByClass(data,
    res => {
      commit('commonModule/loadingFalse', null, { root: true })
      commit('setListStudentOfClass',res.data.data)
      console.log(res.data.data)
    },
    e => {
        commit('commonModule/loadingFalse', null, { root: true })
        handleErrors.resolveCommonErrors(e)
      }
  )
}
const addRegister = ({commit}, data) => {
  commit('commonModule/loadingTrue', null, { root: true })
  adminService.addRegister(data,
    res => {
      commit('commonModule/loadingFalse', null, { root: true })
      commit('addListRegisterLocal', data)
      swalAlert.open({
            title: 'Upload thành công!',
            text: 'Bạn đã upload thành công thời khóa biểu',
            icon: 'success'
          }, () => {
      })
      console.log(res)
      
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
  getFilePdf,
  getAllStudentByClass,
  addRegister
}
