import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  movies: []
}

const mutations = {
  [types.FETCH_INTHEATERS] (state) {
    state.movies = []
    ajax({
      url: 'in_theaters',
      successCallback: function(res) {
        state.movies = res.subjects
      },
    })
  }
}

const getters = {
  movies: state => state.movies
}

export default {
  state,
  getters,
  mutations
}
