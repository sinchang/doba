import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { ajax } from '../util'
import * as types from './mutation-types'
import inTheaters from './modules/inTheaters'
import subject from './modules/subject'
import celebrity from './modules/celebrity'

Vue.use(Vuex)

const state = {
  loading: false,
  keyword: '',
  results: []
}

const mutations = {
  [types.SHOW_LOADING](state) {
    state.loading = true
  },
  [types.HIDE_LOADING](state) {
    state.loading = false
  },
  [types.SEARCH](state, subjects) {
    state.results = subjects
  },
  [types.GET_KEYWORD](state, keyword) {
    state.keyword = keyword
  }
}

const actions = {
  searchHandle(store, e) {
    const keyword = e ? e.target.value : store.state.route.query.q
    router.push({ path: '/search', query: { q: keyword } })
    ajax({
      url: `search?q=${keyword}`,
      successCallback: function (res) {
        store.commit(types.SEARCH, res.subjects)
        store.commit(types.GET_KEYWORD, keyword)
      },
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    inTheaters,
    subject,
    celebrity
  }
})
