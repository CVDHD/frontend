import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import adminModule from './modules/admin'
import commonModule from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    adminModule,
    commonModule
  }
})
