
import httpHandler from '../http_handler'

class UserService {
    async requestLogin(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('login', payload))
        } catch (err) {
            onFailure(err)
        }
    }

    async logout(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('logout'))
        } catch (err) {
            onFailure(err)
        }
    }

    async getResultRegister(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('show'))
        } catch (err) {
            onFailure(err)
        }
    }
    async addResultRegister(subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('enroll', subject))
        } catch (err) {
            onFailure(err)
        }
    }

    async deleteSubject(code_subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete('delete', code_subject))
        } catch (err) {
            onFailure(err)
        }
    }

    async getListPageRegister(page, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`class/${page}`))
        } catch (err) {
            onFailure(err)
        }
    }

    async changePassword(formdata, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.postFile('change-password', formdata, {'Content-Type': 'multipart/form-data'}))
        } catch (err) {
            onFailure(err)
        }
    }
    async postCsvFile(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('lessions/import', payload))
        } catch (err) {
            onFailure(err)
        }
    }

}
const singletonInstance = new UserService()
Object.freeze(singletonInstance)
export default singletonInstance
