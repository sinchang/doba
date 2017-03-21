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
  result: []
}

const getters = {
  loading: state => state.loading,
  keyword: state => state.keyword,
  result: state => state.result
}

const mutations = {
  [types.SHOW_LOADING] (state) {
    state.loading = true
  },
  [types.HIDE_LOADING] (state) {
    state.loading = false
  },
  [types.SEARCH] (state, e) {
    state.result = []
    state.keyword = e ? e.target.value : state.route.query.q
    e ? e.target.value = '' : ''
    router.push({ path: '/search', query: { q: state.keyword }})
    ajax({
       url: `search?q=${state.keyword}`,
      successCallback: function(res) {
        state.result = res.subjects
      },
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    inTheaters,
    subject,
    celebrity
  }
})
