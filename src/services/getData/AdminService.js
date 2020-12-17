import httpHandler from '../http_handler'

class AdminService {
//them dk hoc
    async addRegister(subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('add-register', subject))
        } catch (err) {
            onFailure(err)
        }
    }
//xoa dang ky hoc
    async deleteRegister(class_id, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete('delete-register', class_id))
        } catch (err) {
            onFailure(err)
        }
    }
//sua dang ky hoc 
    async editRegister(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.put(`class/${payload.class_id}`, payload))
        } catch (err) {
            onFailure(err)
        }
    }
//lay dang ky hoc theo trang
    async getListPageRegister(page, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`class/${page}`))
        } catch (err) {
            onFailure(err)
        }
    }
//lay file pdf theo lop
    async getPdfFileByClass(class_id, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`download-class/${class_id}`))
        } catch (err) {
            onFailure(err)
        }
    }
//lay file pdf ca
    async getAllPdfFile(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`download-class/all`))
        } catch (err) {
            onFailure(err)
        }
    }
//them student vao lop hoc dang ky
    async addStudent(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post(`class/${payload.class_id}`, payload.student_id))
        } catch (err) {
            onFailure(err)
        }
    }
//xoa sing vien trong lop
    async removeStudent(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete(`class/${payload.class_id}`, payload.data))
        } catch (err) {
            onFailure(err)
        }
    }
   //lay danh sach giang vien
    async getListTeachers(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('teachers',))
        } catch (err) {
            onFailure(err)
        }
    }

     //lay danh sach mon hoc
    async getListSubjects(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('subjects',))
        } catch (err) {
            onFailure(err)
        }
    }
     //lay danh sach phong hoc
    async getListRooms(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('rooms',))
        } catch (err) {
            onFailure(err)
        }
    }
    //upload FIle csv
    async importFileCsv(formData, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.postFile('upload', formData))
        } catch (err) {
            onFailure(err)
        }
    }
    //lay dang ky hoc theo trang
    async getListRegisterClass(class_id, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`class/${class_id}`))
        } catch (err) {
            onFailure(err)
        }
    }

    async getInfoStudentById(student_id, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`student/${student_id}`))
        } catch (err) {
            onFailure(err)
        }
    }
    async getFileZip(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.getZip('download-class/all'))
        } catch (err) {
            onFailure(err)
        }
    }
    async getFilePdf(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.getPdf(`download-class?class=${payload}`))
        } catch (err) {
            onFailure(err)
        }
    }
    async getStudentByClass(payload,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`list-by-class?class=${payload}`))
        } catch (err) {
            onFailure(err)
        }
    }
    async deleteStudentOfClass(payload,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete('delete-student-register',payload))
        } catch (err) {
            onFailure(err)
        }
    }
    async addStudentToClass(payload,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('add-student-register',payload))
        } catch (err) {
            onFailure(err)
        }
    }
    async setTimeRegister(payload,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('setting/setup_register_time',payload))
        } catch (err) {
            onFailure(err)
        }
    }
    async getTimeRegister(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('setting/get_time'))
        } catch (err) {
            onFailure(err)
        }
    }

}

const singletonInstance = new AdminService()
Object.freeze(singletonInstance)
export default singletonInstance
