import getters from './getters'
import mutations from './mutations'

const state = {
    name: '',
    role: '',
    loading: true  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
