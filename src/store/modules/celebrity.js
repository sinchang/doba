import * as types from '../mutation-types'
import { ajax } from '../../util'

const state = {
  celebrity: {}
}

const mutations = {
  [types.FETCH_CELEBRITY] (state, celebrity) {
    state.celebrity = celebrity
  }
}

const actions = {
  fetchCelebrity({ commit }, id) {
    ajax({
      url: `celebrity/${id}`,
      successCallback: (res) => {
        commit(types.FETCH_CELEBRITY, res)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
