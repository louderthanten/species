import families from '../data/families'

const state = {
  families: []
}

const mutations = {
  'SET_FAMILIES' (state, families) {
    state.families = families
  }
}

const actions = {
  initFamilies: ({ commit }) => {
    commit('SET_FAMILIES', families)
  }
}

const getters = {
  families: state => {
    return state.families
  },
  family: state => (name) => {
    return state.families.find(family => family.name === name)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
