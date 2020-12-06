import InstanceAxios from './configAxios'

class HttpHandler {
  get (url, config = {}) {
    return InstanceAxios()({
      method: 'get',
      url: url,
      config
    })
  }
  getZip (url) {
    return InstanceAxios()({
      method: 'get',
      url: url,
      responseType: 'blob'
    })
  }

  getPdf (url, payload) {
    return InstanceAxios()({
      method: 'get',
      url: url,
      responseType: 'blob',
      data: payload
    })
  }

  post (url, payload, config = {}) {
    return InstanceAxios()({
      method: 'post',
      url: url,
      data: payload,
      config
    })
  }
  postFile (url, payload) {
    return InstanceAxios()({
      method: 'post',
      url: url,
      data: payload,
      headers: {'Content-Type': 'multipart/form-data' }
    })
  }
    
  put (url, payload, config = {}) {
    return InstanceAxios()({
      method: 'put',
      url: url,
      data: payload,
      config
    })
  }

  delete (url, payload, config={}) {
    return InstanceAxios()({
      method: 'delete',
      url: url,
      config,
      data: payload
    })
  }
}
const singletonInstance = new HttpHandler()
Object.freeze(singletonInstance)
export default singletonInstance
