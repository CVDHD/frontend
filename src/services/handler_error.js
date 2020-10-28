import router from '../router'
import localStorage from './cookie_local_storage/Token'
import swalAlert from './swal_alert'

class HandleErrors {
  resolveCommonErrors (e, title = 'Error') {
    if (e.response) {
      switch (e.response.status) {
        case 401: router.push('/login')
          swalAlert.open({
            title: 'Unauthorized',
            text: 'Your session has expired or invalid. You must login again!',
            icon: 'error'
          }, () => {
            localStorage.clearToken()
          })
          break
        case 403: router.push('/')
          swalAlert.open({
            title: 'Permission denied',
            text: 'You do not have permission to view this page!',
            icon: 'warning'
          }, () => {
          })
          break
        default:
          swalAlert.open({
          title: title,
          text: e.response.status,
          icon: 'error'
        }, () => {})
      }
    } else {
      swalAlert.open({
        text: 'SOMETHING WENT WRONG! CANNOT CONNECT TO SERVER API',
        icon: 'error'
      }, (ok) => {
        console.log(e, ok)
      })
    }
  }
}
const singletonInstance = new HandleErrors()
Object.freeze(singletonInstance)
export default singletonInstance
