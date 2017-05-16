import Vue from 'vue'
import store from './store'

export const ajax = options => {
  const defaults = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  store.commit('SHOW_LOADING')

  options = Object.assign({}, defaults, options)

  Vue.jsonp(`https://api.douban.com/v2/movie/${options.url}`)
    .then(response => {
      store.commit('HIDE_LOADING')
      options.successCallback && options.successCallback(response)
    }, response => {
      store.commit('HIDE_LOADING')
      alert(response.statusText)
    })
}
