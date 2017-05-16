import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  movies: []
}

const mutations = {
  [types.FETCH_INTHEATERS](state, movies) {
    state.movies = movies
  }
}

const actions = {
  fetchInTheaters({ commit }) {
    ajax({
      url: 'in_theaters',
      successCallback: (res) => {
        commit(types.FETCH_INTHEATERS, res.subjects)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
