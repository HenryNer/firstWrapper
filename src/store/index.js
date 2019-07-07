import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  },
  state,
  mutations,
  actions
})
