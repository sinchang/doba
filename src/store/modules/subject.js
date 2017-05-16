import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  movie: {}
}

const mutations = {
  [types.FETCH_SUBJECT] (state, movie) {
    state.movie = movie
  }
}

const actions = {
  fetchSubject({ commit }, id) {
    ajax({
      url: `subject/${id}`,
      successCallback: (res) => {
        commit(types.FETCH_SUBJECT, res)
      },
    })
  }
}

export default {
  state,
  mutations,
  actions
}
