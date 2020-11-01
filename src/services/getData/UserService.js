
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
            onSuccess(await httpHandler.get('student'))
        } catch (err) {
            onFailure(err)
        }
    }
    async addResultRegister(subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('result-register', subject))
        } catch (err) {
            onFailure(err)
        }
    }

    async deleteSubject(code_subject, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.delete(`code-subject?id=${code_subject}`))
        } catch (err) {
            onFailure(err)
        }
    }

    async getListPageRegister(page, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get(`class?page=${page}`))
        } catch (err) {
            onFailure(err)
        }
    }

    async changePassword(payload, onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('change-password', payload))
        } catch (err) {
            onFailure(err)
        }
    }

}
const singletonInstance = new UserService()
Object.freeze(singletonInstance)
export default singletonInstance
