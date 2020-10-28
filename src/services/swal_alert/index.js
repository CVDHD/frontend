import Swal from 'sweetalert2'

class SwalAlert {
  open (options, callback) {
    let defaultOption = {
      allowOutsideClick: false
    }
    Swal.fire(Object.assign(options, defaultOption)).then(result => {
      if (result.value) {
        callback(result.value)
      }
    })
  }

  loading () {
    Swal.isLoading()
  }
}
const singletonInstance = new SwalAlert()
Object.freeze(singletonInstance)
export default singletonInstance
