import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  movie: {}
}

const mutations = {
  [types.FETCH_SUBJECT] (state, id) {
    state.movie = {}
    ajax({
      url: `subject/${id}`,
      successCallback: (res) => {
        state.movie = res
      },
    })
  }
}

const getters = {
  movie: state => state.movie
}

export default {
  state,
  getters,
  mutations
}
