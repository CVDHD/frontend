
import httpHandler from '../http_handler'

class CommonService {
    async getAllPdf(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('download-class/all'))
        } catch (err) {
            onFailure(err)
        }
    }

    async getClassPdf(payload,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('download-class', payload))
        } catch (err) {
            onFailure(err)
        }
    }
    async getStudentPdf(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('download-class'))
        } catch (err) {
            onFailure(err)
        }
    }

    async getListNotify(onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.get('list_req'))
        } catch (err) {
            onFailure(err)
        }
    }

    async createNotify(data,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('create_notify', data))
        } catch (err) {
            onFailure(err)
        }
    }

    async updateNotify(data,onSuccess, onFailure) {
        try {
            onSuccess(await httpHandler.post('updatenotify', data))
        } catch (err) {
            onFailure(err)
        }
    }


}
const singletonInstance = new CommonService()
Object.freeze(singletonInstance)
export default singletonInstance
