import getters from './getters'
import mutations from './mutations'

const state = {
    name: '',
    role: '',
    loading: false,
    totalRow: 0
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
