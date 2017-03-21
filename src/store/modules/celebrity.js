import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  celebrity: {}
}

const mutations = {
  [types.FETCH_CELEBRITY] (state, id) {
    state.celebrity = {}
    ajax({
      url: `celebrity/${id}`,
      successCallback: function(res) {
        state.celebrity = res
      },
    })
  }
}

const getters = {
  celebrity: state => state.celebrity
}

export default {
  state,
  getters,
  mutations
}
