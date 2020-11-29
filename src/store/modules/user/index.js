import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    name: '',
    role: '',
    resultRegister: [],
    listRegister: [],
    
    
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
