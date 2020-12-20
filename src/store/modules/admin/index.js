import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    name: '',
    role: '',
    resultRegisters: [],
    listRegisters: [],
    listRooms: [],
    listTeachers: [],
    listSubjects: [],
  listStudentOfClass: [],
    listNotify: []
    
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
