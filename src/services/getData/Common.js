
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


}
const singletonInstance = new CommonService()
Object.freeze(singletonInstance)
export default singletonInstance
