import Vue from 'vue'
import Vuex from 'vuex'
import doctors from './doctors'
import pateins from './pateins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctors:[],
    pateins:[]
  },
  modules: {
    doctors,
    pateins
  }
})
