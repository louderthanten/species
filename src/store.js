import Vue from 'vue'
import Vuex from 'vuex'
import families from './store/families'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    families
  }
})
